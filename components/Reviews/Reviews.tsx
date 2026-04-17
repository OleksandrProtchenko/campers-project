"use client";

import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";
import Button from "../Button/Button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getReviewsByCamperId, postBooking } from "@/api/campersApi";
import toast from "react-hot-toast";

export default function Reviews({ camperId }: { camperId: string }) {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["reviews", camperId],
    queryFn: () => getReviewsByCamperId(camperId),
    enabled: Boolean(camperId),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (bookingData: { name: string; email: string }) =>
      postBooking(camperId, bookingData),
    onSuccess: (message) => {
      toast.success(message || "Booking request sent successfully");
    },
    onError: () => {
      toast.error("Failed to send booking request");
    },
  });

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";

    if (!name || !email) {
      toast.error("Please fill in name and email");
      return;
    }

    mutate(
      { name, email },
      {
        onSuccess: () => {
          form.reset();
        },
      },
    );
  };

  if (isLoading) return <div>Loading reviews...</div>;
  if (isError) return <div>Failed to load reviews</div>;

  return (
    <div>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <div className={css.reviewsWrapper}>
        <div className={css.reviews}>
          {reviews && reviews.length > 0 ? (
            reviews.map((review) => {
              const reviewerInitial =
                review.reviewer_name?.trim().charAt(0).toUpperCase() || "A";
              return (
                <article key={review.id} className={css.review}>
                  <div className={css.reviewHeader}>
                    <div className={css.reviewAuthorImage} aria-hidden="true">
                      {reviewerInitial}
                    </div>
                    <div className={css.reviewAuthorInfo}>
                      <h3 className={css.reviewAuthorName}>
                        {review.reviewer_name}
                      </h3>
                      <div>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FaStar
                            key={index}
                            className={css.iconStar}
                            style={{
                              fill:
                                index < review.reviewer_rating
                                  ? "#ffc531"
                                  : "#DADDE1",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote className={css.reviewText}>
                    {review.comment}
                  </blockquote>
                </article>
              );
            })
          ) : (
            <p>No reviews available for this camper.</p>
          )}
        </div>
        <div>
          <form onSubmit={handleSubmit} className={css.bookingForm}>
            <h3 className={css.bookingFormTitle}>Book your campervan now</h3>
            <p className={css.bookingFormDescription}>
              Stay connected! We are always ready to help you.
            </p>
            <label>
              <input
                className={`${css.bookingFormInput} ${css.bookingFormInputName}`}
                type="text"
                name="name"
                placeholder="Name*"
                autoComplete="off"
              />
            </label>
            <label>
              <input
                className={`${css.bookingFormInput} ${css.bookingFormInputEmail}`}
                type="email"
                name="email"
                placeholder="Email*"
                autoComplete="off"
              />
            </label>
            <Button
              type="submit"
              text={isPending ? "Booking..." : "Send"}
              class={css.bookingFormBtn}
              disabled={isPending}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

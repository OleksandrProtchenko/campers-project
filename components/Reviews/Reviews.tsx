import Image from "next/image";
import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";
import Button from "../Button/Button";
export default function Reviews() {
  return (
    <div>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <div className={css.reviewsWrapper}>
        <div className={css.reviews}>
          <article className={css.review}>
            <div className={css.reviewHeader}>
              <Image
                className={css.reviewAuthorImage}
                src="/path/to/image.jpg"
                alt="Review image"
                width={500}
                height={300}
              />
              <div className={css.reviewAuthorInfo}>
                <h3 className={css.reviewAuthorName}>Alice</h3>
                <div>
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                </div>
              </div>
            </div>
            <blockquote className={css.reviewText}>
              The Mavericks panel truck was a perfect choice for my solo road
              trip. Compact, easy to drive, and had all the essentials. The
              kitchen facilities were sufficient, and the overall experience was
              fantastic.
            </blockquote>
          </article>
          <article className={css.review}>
            <div className={css.reviewHeader}>
              <Image
                className={css.reviewAuthorImage}
                src="/path/to/image.jpg"
                alt="Review image"
                width={500}
                height={300}
              />
              <div className={css.reviewAuthorInfo}>
                <h3 className={css.reviewAuthorName}>Alice</h3>
                <div>
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                  <FaStar className={css.iconStar} />
                </div>
              </div>
            </div>
            <blockquote className={css.reviewText}>
              The Mavericks panel truck was a perfect choice for my solo road
              trip. Compact, easy to drive, and had all the essentials. The
              kitchen facilities were sufficient, and the overall experience was
              fantastic.
            </blockquote>
          </article>
        </div>
        <div>
          <form className={css.bookingForm}>
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
            <Button type="submit" text="Send" class={css.bookingFormBtn} />
          </form>
        </div>
      </div>
    </div>
  );
}

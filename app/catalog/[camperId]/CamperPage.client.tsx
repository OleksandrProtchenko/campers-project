import css from "./CamperPage.module.css";
import { Camper } from "@/api/campersApi";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import CamperDetails from "@/components/CamperDetails/CamperDetails";
import Reviews from "@/components/Reviews/Reviews";

export default function CamperPage({ camper }: { camper: Camper }) {
  const {
    name,
    price,
    rating,
    totalReviews,
    location,
    description,
    engine,
    transmission,
    form,
    coverImage,
  } = camper;
  return (
    <div className={css.camperPageWrapper}>
      <div className={css.camperContent}>
        <CamperGallery />
        <CamperDetails />
      </div>
      <Reviews />
    </div>
  );
}

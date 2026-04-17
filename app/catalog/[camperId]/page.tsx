import { Camper, getCamperById } from "@/api/campersApi";
import CamperPage from "./CamperPage.client";
import Reviews from "@/components/Reviews/Reviews";
import CamperDetails from "@/components/CamperDetails/CamperDetails";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import css from "./CamperPage.module.css";

interface Props {
  params: Promise<{ camperId: string }>;
  camper: Camper;
}

export default async function CamperById({ params }: Props) {
  const { camperId } = await params;
  let camperData: Camper;
  try {
    camperData = await getCamperById(camperId);
  } catch {
    return <div>Camper not found</div>;
  }

  return (
    <div className={css.camperPageWrapper}>
      <div className={css.camperContent}>
        <CamperGallery camper={camperData} />
        <CamperDetails camper={camperData} />
      </div>
      <Reviews />
    </div>
  );
}

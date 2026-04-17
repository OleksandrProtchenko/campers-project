import { Camper, getCamperById } from "@/api/campersApi";
import Reviews from "@/components/Reviews/Reviews";
import CamperDetails from "@/components/CamperDetails/CamperDetails";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import css from "./CamperPage.module.css";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ camperId: string }>;
  camper: Camper;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);

    return {
      title: camper.name,
      description:
        camper.description?.slice(0, 160) ||
        "Detailed information about the camper, gallery, reviews and booking.",
      alternates: {
        canonical: "/catalog/" + camperId,
      },
      openGraph: {
        title: camper.name + " | TravelTrucks",
        description:
          camper.description?.slice(0, 200) ||
          "Detailed information about the camper, gallery, reviews and booking.",
        url: "/catalog/" + camperId,
        images: camper.coverImage ? [{ url: camper.coverImage }] : undefined,
      },
    };
  } catch {
    return {
      title: "Camper not found",
      description: "The camper page was not found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function CamperById({ params }: Props) {
  const { camperId } = await params;
  let camperData: Camper;
  try {
    camperData = await getCamperById(camperId);
  } catch {
    notFound();
  }

  return (
    <div className={css.camperPageWrapper}>
      <div className={css.camperContent}>
        <CamperGallery camper={camperData} />
        <CamperDetails camper={camperData} />
      </div>
      <Reviews camperId={camperId} />
    </div>
  );
}

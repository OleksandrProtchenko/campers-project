import { Camper, getCamperById } from "@/api/campers";
import CamperPage from "./CamperPage.client";

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

  return <CamperPage camper={camperData} />;
}

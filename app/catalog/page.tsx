import { Suspense } from "react";

import { Metadata } from "next";
import CatalogContent from "@/components/CatalogContent/CatalogContent";
import Loader from "@/components/Loader/Loader";

export const metadata: Metadata = {
  title: "Camper catalog",
  description:
    "Browse the camper catalog, apply filters, and load more cards using Load More.",
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: "Camper catalog | TravelTrucks",
    description:
      "Find a camper by location, body type, engine, and transmission.",
    url: "/catalog",
  },
};

export default async function Catalog() {
  return (
    <Suspense fallback={<Loader />}>
      <CatalogContent />
    </Suspense>
  );
}

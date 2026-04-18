"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getCampersFilters } from "@/api/campersApi";
import Filters from "../Filters/Filters";
import CatalogList from "../CatalogList/CatalogList";
import Loader from "../Loader/Loader";
import css from "./CatalogContent.module.css";

export default function CatalogContent() {
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const {
    data: filtersData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["campersFilters"],
    queryFn: getCampersFilters,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
  });

  if (isLoading) return <Loader />;
  if (isError) return <div>Failed to load filters</div>;
  if (!filtersData) return null;

  return (
    <div className={css.catalog}>
      <aside>
        <Filters filtersData={filtersData} />
      </aside>
      <main className={css.main}>
        <CatalogList key={query} query={query} />
      </main>
    </div>
  );
}

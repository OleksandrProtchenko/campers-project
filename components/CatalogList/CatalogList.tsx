"use client";

import css from "./CatalogList.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";
import { Engines, Forms, getCampers, Transmissions } from "@/api/campers";
import Button from "../Button/Button";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";

const PER_PAGE = 4;

function normalizeFilters(searchParams: URLSearchParams) {
  const location = searchParams.get("location") || undefined;
  const form = (searchParams.get("form") as Forms) || undefined;
  const engine = (searchParams.get("engine") as Engines) || undefined;
  const transmission =
    (searchParams.get("transmission") as Transmissions) || undefined;

  return { location, form, engine, transmission };
}

export default function CatalogList() {
  const searchParams = useSearchParams();

  const filters = useMemo(() => normalizeFilters(searchParams), [searchParams]);

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam = 1 }) => getCampers(filters, PER_PAGE, pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  if (isLoading) return <Loader />;
  if (isError) return <div>Failed to load campers</div>;

  return (
    <>
      <ul className={css.catalogList}>
        {campers.map((camper) => (
          <CatalogItem key={camper.id} camper={camper} />
        ))}
      </ul>
      {hasNextPage && (
        <Button
          type="button"
          text={isFetchingNextPage ? "Loading..." : "Load More"}
          class={css.loadMoreBtn}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        />
      )}
    </>
  );
}

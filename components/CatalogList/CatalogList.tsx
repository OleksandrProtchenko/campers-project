"use client";

import css from "./CatalogList.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";
import { getCampers } from "@/api/campersApi";
import Button from "../Button/Button";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import normalizeFilters from "@/utils/normalizeFilters";

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
    queryFn: ({ pageParam = 1 }) => getCampers(filters, undefined, pageParam),
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
      {campers && campers.length > 0 && (
        <ul className={css.catalogList}>
          {campers.map((camper) => (
            <CatalogItem key={camper.id} camper={camper} />
          ))}
        </ul>
      )}
      {(!campers || campers.length === 0) && (
        <div className={css.noCampers}>
          No campers found. Try another filters for search.
        </div>
      )}
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

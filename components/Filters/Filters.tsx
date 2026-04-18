"use client";

import { useSearchParams } from "next/navigation";

import { GetCampersByFiltersResponse } from "@/api/campersApi";

import FiltersForm from "../FiltersForm/FiltersForm";

interface FiltersProps {
  filtersData: GetCampersByFiltersResponse;
}

export default function Filters({ filtersData }: FiltersProps) {
  const searchParams = useSearchParams();

  const location = searchParams.get("location") ?? "";
  const form = searchParams.get("form") ?? "";
  const engine = searchParams.get("engine") ?? "";
  const transmission = searchParams.get("transmission") ?? "";

  const paramsKey = searchParams.toString();

  return (
    <FiltersForm
      key={paramsKey}
      filtersData={filtersData}
      initialLocation={location}
      initialForm={form}
      initialEngine={engine}
      initialTransmission={transmission}
    />
  );
}

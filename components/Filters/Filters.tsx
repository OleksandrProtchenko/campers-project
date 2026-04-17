"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button/Button";
import css from "./Filters.module.css";
import { FaRegMap } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import {
  GetCampersByFiltersResponse,
  getCampersFilters,
} from "@/api/campersApi";
import normalizeNameFilters from "@/utils/normalizeNameFilters";

interface FiltersProps {
  initialFilters: GetCampersByFiltersResponse;
}

export default function Filters({ initialFilters }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const location = searchParams.get("location") ?? "";
  const form = searchParams.get("form") ?? "";
  const engine = searchParams.get("engine") ?? "";
  const transmission = searchParams.get("transmission") ?? "";

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    const location = formData.get("location")?.toString().trim() ?? "";
    const form = formData.get("form")?.toString() ?? "";
    const engine = formData.get("engine")?.toString() ?? "";
    const transmission = formData.get("transmission")?.toString() ?? "";

    if (location) params.set("location", location);
    if (form) params.set("form", form);
    if (engine) params.set("engine", engine);
    if (transmission) params.set("transmission", transmission);

    router.push(
      "/catalog" + (params.toString() ? "?" + params.toString() : ""),
    );
  };

  const handleReset = () => {
    router.push("/catalog");
  };

  const {
    data: filtersData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["campersFilters"],
    queryFn: getCampersFilters,
    initialData: initialFilters,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
  });
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <fieldset
        className={`${css.fieldLocation} ${css.fieldsReset} ${css.firstField}`}
      >
        <legend className={css.legend}>Location</legend>
        <label className={css.labelLocation}>
          <input
            className={css.location}
            type="text"
            name="location"
            placeholder="Kyiv, Ukraine"
            defaultValue={location}
          />
          <FaRegMap className={css.locationIcon} />
        </label>
      </fieldset>

      <h2 className={css.filterTitle}>Filters</h2>

      <fieldset className={css.fieldsReset}>
        <legend className={css.legend}>Camper form</legend>
        {filtersData &&
          filtersData.forms.length > 0 &&
          filtersData.forms.map((formOption) => {
            return (
              <label className={css.label} key={formOption}>
                <input
                  className={css.radio}
                  type="radio"
                  name="form"
                  value={formOption}
                  defaultChecked={form === formOption}
                />
                <span className={css.radio__custom}></span>
                {normalizeNameFilters(formOption)}
              </label>
            );
          })}
      </fieldset>

      <fieldset className={css.fieldsReset}>
        <legend className={css.legend}>Engine</legend>
        {filtersData &&
          filtersData.engines.length > 0 &&
          filtersData.engines.map((engineOption) => {
            return (
              <label className={css.label} key={engineOption}>
                <input
                  className={css.radio}
                  type="radio"
                  name="engine"
                  value={engineOption}
                  defaultChecked={engine === engineOption}
                />
                <span className={css.radio__custom}></span>
                {normalizeNameFilters(engineOption)}
              </label>
            );
          })}
      </fieldset>

      <fieldset className={`${css.fieldsReset} ${css.lastField}`}>
        <legend className={css.legend}>Transmission</legend>
        {filtersData &&
          filtersData.transmissions.length > 0 &&
          filtersData.transmissions.map((transmissionOption) => {
            return (
              <label className={css.label} key={transmissionOption}>
                <input
                  className={css.radio}
                  type="radio"
                  name="transmission"
                  value={transmissionOption}
                  defaultChecked={transmission === transmissionOption}
                />
                <span className={css.radio__custom}></span>
                {normalizeNameFilters(transmissionOption)}
              </label>
            );
          })}
      </fieldset>

      <Button type="submit" class={css.searchBtn} text="Search" />
      <Button
        onClick={handleReset}
        type="reset"
        class={css.clearBtn}
        text="Clear filters"
        icon={<IoCloseOutline className={css.clearIcon} />}
      />
    </form>
  );
}

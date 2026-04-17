"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "../Button/Button";
import css from "./Filters.module.css";
import { FaRegMap } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

import { GetCampersByFiltersResponse } from "@/api/campersApi";
import normalizeNameFilters from "@/utils/normalizeNameFilters";

interface FiltersProps {
  filtersData: GetCampersByFiltersResponse;
}

export default function Filters({ filtersData }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(
    () => searchParams.get("location") ?? "",
  );
  const [form, setForm] = useState(() => searchParams.get("form") ?? "");
  const [engine, setEngine] = useState(() => searchParams.get("engine") ?? "");
  const [transmission, setTransmission] = useState(
    () => searchParams.get("transmission") ?? "",
  );

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) params.set("location", location.trim());
    if (form) params.set("form", form);
    if (engine) params.set("engine", engine);
    if (transmission) params.set("transmission", transmission);

    router.replace(
      "/catalog" + (params.toString() ? "?" + params.toString() : ""),
      { scroll: false },
    );
  };

  const handleReset = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");

    router.replace("/catalog", { scroll: false });
  };

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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <FaRegMap className={css.locationIcon} />
        </label>
      </fieldset>

      <h2 className={css.filterTitle}>Filters</h2>

      <fieldset className={css.fieldsReset}>
        <legend className={css.legend}>Camper form</legend>
        {filtersData.forms.map((formOption) => (
          <label className={css.label} key={formOption}>
            <input
              className={css.radio}
              type="radio"
              name="form"
              value={formOption}
              checked={form === formOption}
              onChange={() => setForm(formOption)}
            />
            <span className={css.radio__custom}></span>
            {normalizeNameFilters(formOption)}
          </label>
        ))}
      </fieldset>

      <fieldset className={css.fieldsReset}>
        <legend className={css.legend}>Engine</legend>
        {filtersData.engines.map((engineOption) => (
          <label className={css.label} key={engineOption}>
            <input
              className={css.radio}
              type="radio"
              name="engine"
              value={engineOption}
              checked={engine === engineOption}
              onChange={() => setEngine(engineOption)}
            />
            <span className={css.radio__custom}></span>
            {normalizeNameFilters(engineOption)}
          </label>
        ))}
      </fieldset>

      <fieldset className={`${css.fieldsReset} ${css.lastField}`}>
        <legend className={css.legend}>Transmission</legend>
        {filtersData.transmissions.map((transmissionOption) => (
          <label className={css.label} key={transmissionOption}>
            <input
              className={css.radio}
              type="radio"
              name="transmission"
              value={transmissionOption}
              checked={transmission === transmissionOption}
              onChange={() => setTransmission(transmissionOption)}
            />
            <span className={css.radio__custom}></span>
            {normalizeNameFilters(transmissionOption)}
          </label>
        ))}
      </fieldset>

      <Button type="submit" class={css.searchBtn} text="Search" />

      <Button
        onClick={handleReset}
        type="button"
        class={css.clearBtn}
        text="Clear filters"
        icon={<IoCloseOutline className={css.clearIcon} />}
      />
    </form>
  );
}

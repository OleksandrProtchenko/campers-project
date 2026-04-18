"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button/Button";
import css from "./Filters.module.css";
import { FaRegMap } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

import { GetCampersByFiltersResponse } from "@/api/campersApi";
import normalizeNameFilters from "@/utils/normalizeNameFilters";

interface FiltersProps {
  filtersData: GetCampersByFiltersResponse;
}

interface FiltersFormProps {
  filtersData: GetCampersByFiltersResponse;
  initialLocation: string;
  initialForm: string;
  initialEngine: string;
  initialTransmission: string;
}

export default function Filters({ filtersData }: FiltersProps) {
  const searchParams = useSearchParams();

  const location = searchParams.get("location") ?? "";
  const form = searchParams.get("form") ?? "";
  const engine = searchParams.get("engine") ?? "";
  const transmission = searchParams.get("transmission") ?? "";

  const paramsKey = [location, form, engine, transmission].join("|");

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

function FiltersForm({
  filtersData,
  initialLocation,
  initialForm,
  initialEngine,
  initialTransmission,
}: FiltersFormProps) {
  const router = useRouter();

  const [locationValue, setLocationValue] = useState(initialLocation);
  const [formValue, setFormValue] = useState(initialForm);
  const [engineValue, setEngineValue] = useState(initialEngine);
  const [transmissionValue, setTransmissionValue] =
    useState(initialTransmission);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams();
    const location = locationValue.trim();

    if (location) params.set("location", location);
    if (formValue) params.set("form", formValue);
    if (engineValue) params.set("engine", engineValue);
    if (transmissionValue) params.set("transmission", transmissionValue);

    router.push(
      "/catalog" + (params.toString() ? "?" + params.toString() : ""),
    );
  };

  const handleReset = () => {
    setLocationValue("");
    setFormValue("");
    setEngineValue("");
    setTransmissionValue("");
    router.push("/catalog");
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
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            autoComplete="off"
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
              checked={formValue === formOption}
              onChange={() => setFormValue(formOption)}
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
              checked={engineValue === engineOption}
              onChange={() => setEngineValue(engineOption)}
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
              checked={transmissionValue === transmissionOption}
              onChange={() => setTransmissionValue(transmissionOption)}
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

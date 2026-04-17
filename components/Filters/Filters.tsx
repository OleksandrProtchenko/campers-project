"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import css from "./Filters.module.css";
import { FaRegMap } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

export default function Filters() {
  const router = useRouter();
  const handleSubmit = (formData: FormData) => {
    const { location, form, engine, transmission } = Object.fromEntries(
      formData.entries(),
    );

    const searchParams = new URLSearchParams();
    if (location) searchParams.set("location", location.toString());
    if (form) searchParams.set("form", form.toString());
    if (engine) searchParams.set("engine", engine.toString());
    if (transmission) searchParams.set("transmission", transmission.toString());

    router.push(`/catalog?${searchParams.toString()}`);
  };
  const handleReset = () => {
    router.push("/catalog");
  };
  return (
    <form action={handleSubmit} className={css.form}>
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
          />
          <FaRegMap className={css.locationIcon} />
        </label>
      </fieldset>

      <h2 className={css.filterTitle}>Filters</h2>

      <fieldset className={css.fieldsReset}>
        <legend className={css.legend}>Camper form</legend>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            value="alcove"
          />
          <span className={css.radio__custom}></span>
          Alcove
        </label>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            value="panel_van"
          />
          <span className={css.radio__custom}></span>
          Panel Van
        </label>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            value="integrated"
          />
          <span className={css.radio__custom}></span>
          Integrated
        </label>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="form"
            value="semi_integrated"
          />
          <span className={css.radio__custom}></span>
          Semi Integrated
        </label>
      </fieldset>

      <fieldset className={css.fieldsReset}>
        <legend className={css.legend}>Engine</legend>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            value="diesel"
          />
          <span className={css.radio__custom}></span>
          Diesel
        </label>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            value="petrol"
          />
          <span className={css.radio__custom}></span>
          Petrol
        </label>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            value="hybrid"
          />
          <span className={css.radio__custom}></span>
          Hybrid
        </label>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="engine"
            value="electric"
          />
          <span className={css.radio__custom}></span>
          Electric
        </label>
      </fieldset>

      <fieldset className={`${css.fieldsReset} ${css.lastField}`}>
        <legend className={css.legend}>Transmission</legend>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="transmission"
            value="automatic"
          />
          <span className={css.radio__custom}></span>
          Automatic
        </label>
        <label className={css.label}>
          <input
            className={css.radio}
            type="radio"
            name="transmission"
            value="manual"
          />
          <span className={css.radio__custom}></span>
          Manual
        </label>
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

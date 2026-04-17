import { GiCarWheel } from "react-icons/gi";
import css from "./NotFound.module.css";
import Link from "next/link";
import Button from "../Button/Button";

export default function NotFound() {
  return (
    <main className={css.wrapper}>
      <div className={css.content}>
        <p className={css.code}>
          4<GiCarWheel className={css.iconWheel} />4
        </p>
        <h1 className={css.title}>Page not found . . .</h1>
        <p className={css.text}>Looks like this route went off the map.</p>

        <div className={css.camperWrapper}>
          <div className={css.camper}></div>
          <div className={css.road} />
        </div>

        <Link href="/" className={css.link}>
          <Button text="Go back home" type="button" />
        </Link>
      </div>
    </main>
  );
}

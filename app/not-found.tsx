import Link from "next/link";
import css from "./not-found.module.css";
import Loader from "@/components/Loader/Loader";

export default function NotFound() {
  return (
    <main className={css.wrapper}>
      <div className={css.content}>
        <p className={css.code}>404</p>
        <h1 className={css.title}>Page not found</h1>
        <p className={css.text}>Looks like this route went off the map.</p>

        <div className={css.camperWrapper}>
          <div className={css.camper}>
            <Loader />
          </div>
          <div className={css.road} />
        </div>

        <Link href="/" className={css.link}>
          Go back home
        </Link>
      </div>
    </main>
  );
}

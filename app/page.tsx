import Link from "next/link";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.homePage}>
      <div className={css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.subtitle}>
          You can find everything you want in our catalog
        </h2>
        <Link href="/catalog">
          <button className={css.btnHome} type="button">
            View Now
          </button>
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <div className={css.camper}>
        <Image
          src="/camper.jpg"
          alt="camper"
          className={css.image}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

import css from "./CatalogList.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";
import { getCampers } from "@/api/campers";
import Button from "../Button/Button";

export default async function CatalogList() {
  const { campers: campersList } = await getCampers();

  return (
    <>
      <ul className={css.catalogList}>
        {campersList.map((camper) => (
          <CatalogItem key={camper.id} camper={camper} />
        ))}
      </ul>
      <Button type="button" text="Load More" class={css.loadMoreBtn} />
    </>
  );
}

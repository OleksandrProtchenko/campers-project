import css from "./CatalogList.module.css";
import CatalogItem from "../CatalogItem/CatalogItem";

export default function CatalogList() {
  return (
    <ul className={css.catalogList}>
      <CatalogItem />
      <CatalogItem />
      <CatalogItem />
    </ul>
  );
}

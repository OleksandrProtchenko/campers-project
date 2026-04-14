import Aside from "@/components/Aside/Aside";
import CatalogList from "@/components/CatalogList/CatalogList";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <main className={css.main}>
      <Aside />
      <CatalogList />
    </main>
  );
}

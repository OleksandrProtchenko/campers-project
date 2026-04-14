import Aside from "@/components/Aside/Aside";
import CatalogList from "@/components/CatalogList/CatalogList";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div className={css.catalog}>
      <Aside />
      <main className={css.main}>
        <CatalogList />
      </main>
    </div>
  );
}

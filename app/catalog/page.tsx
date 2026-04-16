import CatalogList from "@/components/CatalogList/CatalogList";
import css from "./Catalog.module.css";
import Filters from "@/components/Filters/Filters";

export default function Catalog() {
  return (
    <div className={css.catalog}>
      <aside>
        <Filters />
      </aside>
      <main className={css.main}>
        <CatalogList />
      </main>
    </div>
  );
}

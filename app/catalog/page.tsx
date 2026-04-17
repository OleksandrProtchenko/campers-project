import CatalogList from "@/components/CatalogList/CatalogList";
import css from "./Catalog.module.css";
import Filters from "@/components/Filters/Filters";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";
import { getCampersFilters } from "@/api/campersApi";

export default async function Catalog() {
  const initialFilters = await getCampersFilters();
  return (
    <div className={css.catalog}>
      <aside>
        <Suspense fallback={<Loader />}>
          <Filters initialFilters={initialFilters} />
        </Suspense>
      </aside>
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <CatalogList />
        </Suspense>
      </main>
    </div>
  );
}

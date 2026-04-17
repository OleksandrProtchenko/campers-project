import { Engines, Forms, Transmissions } from "@/api/campersApi";

export default function normalizeFilters(searchParams: URLSearchParams) {
  const location = searchParams.get("location") || undefined;
  const form = (searchParams.get("form") as Forms) || undefined;
  const engine = (searchParams.get("engine") as Engines) || undefined;
  const transmission =
    (searchParams.get("transmission") as Transmissions) || undefined;

  return { location, form, engine, transmission };
}

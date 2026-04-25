import { partners } from "@/lib/site";
import { redirect } from "next/navigation";

export default function Page() {
  const firstSlug = Object.values(partners)[0].slug;
  redirect(`/produkty-sluzby/${firstSlug}`);
}

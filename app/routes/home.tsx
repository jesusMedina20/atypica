import type { Route } from "./+types/home";
import HomePage from "~/home/page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ATYPICA® — Estudio de Branding" },
    { name: "description", content: "Estudio de branding con criterio. Estrategia, identidad y dirección de arte para marcas que quieren ser inconfundibles. No es para todos." },
  ];
}

export default function Home() {
  return <HomePage />;
}

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ChampionshipCard } from "@/components/championships/ChampionshipCard";

const championships = [
  {
    id: "1",
    slug: "campenato-brasileiro-seried-2026",
    name: "CBF divulga classificação geral do Brasileiro da Série D, com Guaporé em 19ª e Gazin Porto Velho em 22º",
    image: "/images/championships/campeonato1.jpg",
    location: "Rolim de Moura - RO",
    startDate: "23 Set 2026",
    teams: 2,
    modality: "Futebol",
  },
  {
    id: "2",
    slug: "liga-volei-norte",
    name: "Liga Norte de Vôlei",
    image: "/images/championships/campeonato2.jpg",
    location: "Porto Velho - RO",
    startDate: "22 Ago 2026",
    teams: 16,
    modality: "Vôlei",
  },
  {
    id: "3",
    slug: "regional-basquete",
    name: "Regional Norte de Basquete",
    image: "/images/championships/campeonato3.jpg",
    location: "Ji-Paraná - RO",
    startDate: "05 Set 2026",
    teams: 12,
    modality: "Basquete",
  },
];

export function FeaturedChampionshipsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <SectionTitle
          title="Campeonatos em Destaque"
          subtitle="Acompanhe as principais competições esportivas da Região Norte."
          action={
            <Link href="/campeonatos">
              <Button variant="outline">
                Ver Todos
              </Button>
            </Link>
          }
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {championships.map((championship) => (
            <ChampionshipCard
              key={championship.id}
              {...championship}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
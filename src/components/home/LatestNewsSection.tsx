import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { NewsCard } from "@/components/news/NewsCard";

const latestNews = [
  {
    id: "1",
    slug: "campeonato-rondonia-2026",
    title: "Campeonato Rondoniense 2026 inicia com recorde de equipes",
    excerpt:
      "Competição reúne clubes de diversas cidades e promete ser a maior edição da história.",
    image: "/images/news/noticia1.jpg",
    category: "Futebol",
    author: "Redação Esporte do Norte",
    publishedAt: "24 Jul 2026",
  },
  {
    id: "2",
    slug: "nova-arena-esportiva",
    title: "Nova arena esportiva será inaugurada em Rondônia",
    excerpt:
      "Espaço contará com estrutura moderna para receber competições regionais e nacionais.",
    image: "/images/news/noticia2.jpg",
    category: "Infraestrutura",
    author: "Equipe EN",
    publishedAt: "23 Jul 2026",
  },
  {
    id: "3",
    slug: "torneio-volei-escolar",
    title: "Torneio escolar de vôlei movimenta centenas de atletas",
    excerpt:
      "Evento reúne escolas públicas e particulares em uma grande celebração do esporte.",
    image: "/images/news/noticia3.jpg",
    category: "Vôlei",
    author: "Redação",
    publishedAt: "22 Jul 2026",
  },
];

export function LatestNewsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Últimas Notícias"
          subtitle="Acompanhe tudo o que acontece no esporte."
          action={
            <Link href="/noticias">
              <Button variant="outline">
                Ver Todas
              </Button>
            </Link>
          }
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {latestNews.map((news) => (
            <NewsCard
              key={news.id}
              {...news}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
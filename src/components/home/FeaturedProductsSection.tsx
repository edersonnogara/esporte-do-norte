import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProductCard } from "@/components/products/ProductCard";

const featuredProducts = [
  {
    id: "1",
    slug: "chuteira-nike-mercurial",
    name: "Chuteira Nike Mercurial Vapor 16",
    brand: "Nike",
    image: "/images/products/chuteira.jpg",
    price: 799.90,
    oldPrice: 999.90,
    rating: 5,
  },
  {
    id: "2",
    slug: "bola-penalty-s11",
    name: "Bola Penalty S11 Campo Oficial",
    brand: "Penalty",
    image: "/images/products/bola.jpg",
    price: 179.90,
    oldPrice: 229.90,
    rating: 5,
  },
  {
    id: "3",
    slug: "camisa-flamengo-2026",
    name: "Camisa Oficial Flamengo 2026",
    brand: "Adidas",
    image: "/images/products/camisa.jpg",
    price: 349.90,
    oldPrice: 429.90,
    rating: 5,
  },
  {
    id: "4",
    slug: "luva-goleiro-profissional",
    name: "Luva de Goleiro Profissional",
    brand: "Poker",
    image: "/images/products/luva.jpg",
    price: 199.90,
    oldPrice: 249.90,
    rating: 4,
  },
];

export function FeaturedProductsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>

        <SectionTitle
          title="Produtos em Destaque"
          subtitle="Confira os produtos mais procurados pelos atletas."
          action={
            <Link href="/loja">
              <Button variant="outline">
                Ver Todos
              </Button>
            </Link>
          }
        />

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
import Link from "next/link";
import { ArrowRight, ShoppingCart, Trophy, Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-linear-to-r from-slate-900 via-blue-900 to-slate-950 text-white">
      <Container>
        <div className="grid min-h-162.5 items-center gap-16 py-20 lg:grid-cols-2">

          {/* Texto */}

          <div>

            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
              Portal • Marketplace • Campeonatos
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
              O maior portal esportivo da Região Norte
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Notícias, campeonatos, resultados, marketplace de produtos
              esportivos e uma plataforma completa para organizar
              competições.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/loja">
                <Button size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Comprar Agora
                </Button>
              </Link>

              <Link href="/campeonatos">
                <Button variant="outline" size="lg">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Ver Campeonatos
                </Button>
              </Link>

            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>
                <h2 className="text-4xl font-bold">100+</h2>
                <p className="mt-2 text-slate-400">
                  Campeonatos
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">10k+</h2>
                <p className="mt-2 text-slate-400">
                  Produtos
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">500+</h2>
                <p className="mt-2 text-slate-400">
                  Notícias
                </p>
              </div>

            </div>

          </div>

          {/* Card destaque */}

          <div className="flex justify-center">

            <div className="w-full max-w-lg rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur">

              <div className="mb-8 flex items-center gap-4">

                <div className="rounded-xl bg-blue-600 p-4">
                  <Trophy className="h-8 w-8" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Plataforma de Campeonatos
                  </h3>

                  <p className="text-slate-300">
                    Organize competições online.
                  </p>
                </div>

              </div>

              <div className="space-y-5">

                <div className="rounded-xl bg-white/10 p-4">
                  ⚽ Geração automática de tabelas
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  🏆 Classificação em tempo real
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  📊 Estatísticas completas
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  📰 Notícias do campeonato
                </div>

              </div>

              <Link
                href="/organizadores"
                className="mt-8 inline-flex w-full"
              >
                <Button className="w-full">
                  <Newspaper className="mr-2 h-4 w-4" />
                  Conhecer Plataforma
                </Button>
              </Link>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
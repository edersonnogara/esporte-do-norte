import { MainLayout } from "@/components/layout/MainLayout";

import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { LatestNewsSection } from "@/components/home/LatestNewsSection";
import { FeaturedChampionshipsSection } from "@/components/home/FeaturedChampionshipsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <MainLayout>

      {/* <HeroSection /> - Divulgação do sistema de campeonatos*/}

      <LatestNewsSection />

      <HeroSection />

      <CategoriesSection />

      {/* Banner Publicitário */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-linear-to-r from-blue-700 to-blue-500 p-16 text-center text-white">

          <h2 className="text-5xl font-black">
            Equipe sua paixão pelo esporte
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
            Encontre equipamentos, uniformes, acessórios e tudo que você
            precisa para praticar seu esporte favorito.
          </p>

        </div>
      </section>

      {/* <FeaturedChampionshipsSection /> - Campeonatos em destaque*/}

      {/* <FeaturedProductsSection /> - Venda de produtos esportivos*/}



      <NewsletterSection />

    </MainLayout>
  );
}
import { MainLayout } from "@/components/layout/MainLayout";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";

export default function loja() {
  return (
    <MainLayout>

        <FeaturedProductsSection />

           {/* Banner Publicitário */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-linear-to-r from-blue-700 to-blue-500 p-16 text-center text-white">

          <h2 className="text-5xl font-black">
            Pagina em construção!
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
            Encontre equipamentos, uniformes, acessórios e tudo que você
            precisa para praticar seu esporte favorito.
          </p>

        </div>
      </section>

     



      

    </MainLayout>
  );
}
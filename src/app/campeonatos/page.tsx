"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { FeaturedChampionshipsSection } from "@/components/home/FeaturedChampionshipsSection";
import { useState } from "react";
import Link from "next/link";

export default function campeonatos() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function closeMobileMenu() {
        setMobileMenuOpen(false);
    }


    return (
        <MainLayout>

            <FeaturedChampionshipsSection />

            {/* Banner Publicitário */}
            <section className="bg-slate-900 py-20">
                <div className="mx-auto max-w-7xl rounded-3xl bg-linear-to-r from-blue-700 to-blue-500 p-16 text-center text-white">

                    <Link
                        href="/loja"
                        onClick={closeMobileMenu}
                        
                    >

                        <h2 className="text-5xl  font-black">
                            Encontre AQUI! - Acesse a loja
                            <p className="mx-auto mt-1 max-w-5xl text-xl text-blue-100">
                                Equipamentos, Uniformes, Acessórios e tudo que você
                                precisa para praticar seu esporte favorito.
                            </p>
                        </h2>
                        

                    </Link>

                </div>
            </section>







        </MainLayout>
    );
}
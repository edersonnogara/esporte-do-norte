import Link from "next/link";
import {
  Trophy,
  Volleyball,
  Dumbbell,
  Bike,
  PersonStanding,
  Goal,
  Shirt,
  Medal,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/common/SectionTitle";

const categories = [
  {
    title: "Futebol",
    icon: Goal,
    href: "/categoria/futebol",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Vôlei",
    icon: Volleyball,
    href: "/categoria/volei",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Basquete",
    icon: Trophy,
    href: "/categoria/basquete",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Academia",
    icon: Dumbbell,
    href: "/categoria/academia",
    color: "bg-slate-100 text-slate-700",
  },
  {
    title: "Corrida",
    icon: PersonStanding,
    href: "/categoria/corrida",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Ciclismo",
    icon: Bike,
    href: "/categoria/ciclismo",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Uniformes",
    icon: Shirt,
    href: "/categoria/uniformes",
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Premiações",
    icon: Medal,
    href: "/categoria/premiacoes",
    color: "bg-amber-100 text-amber-700",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <Container>

        <SectionTitle
          title="Categorias"
          subtitle="Encontre rapidamente o esporte que procura."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 ${category.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  Confira os melhores produtos desta categoria.
                </p>
              </Link>
            );
          })}

        </div>

      </Container>
    </section>
  );
}
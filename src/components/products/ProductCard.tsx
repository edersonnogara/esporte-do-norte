import Image from "next/image";
import Link from "next/link";

import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating?: number;
}

export function ProductCard({
  slug,
  name,
  brand,
  image,
  price,
  oldPrice,
  rating = 5,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Imagem */}

      <Link href={`/produto/${slug}`}>

        <div className="relative aspect-square overflow-hidden bg-slate-100">

          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <button
            className="absolute right-3 top-3 rounded-full bg-white p-2 shadow"
          >
            <Heart className="h-5 w-5" />
          </button>

        </div>

      </Link>

      {/* Conteúdo */}

      <div className="space-y-4 p-5">

        <span className="text-sm text-slate-500">
          {brand}
        </span>

        <Link href={`/produto/${slug}`}>

          <h3 className="line-clamp-2 text-lg font-bold text-slate-800 hover:text-blue-600">
            {name}
          </h3>

        </Link>

        <div className="flex">

          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}

        </div>

        {oldPrice && (
          <p className="text-sm text-slate-400 line-through">
            R$ {oldPrice.toFixed(2)}
          </p>
        )}

        <h2 className="text-3xl font-black text-blue-700">
          R$ {price.toFixed(2)}
        </h2>

        <Button className="w-full">

          <ShoppingCart className="mr-2 h-4 w-4" />

          Comprar

        </Button>

      </div>

    </div>
  );
}
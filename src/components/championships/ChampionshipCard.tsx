import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  Users,
  Trophy,
} from "lucide-react";

export interface ChampionshipCardProps {
  id: string;
  slug: string;
  name: string;
  image: string;
  location: string;
  startDate: string;
  teams: number;
  modality: string;
}

export function ChampionshipCard({
  slug,
  name,
  image,
  location,
  startDate,
  teams,
  modality,
}: ChampionshipCardProps) {
  return (
    <Link href={`/campeonatos/${slug}`}>

      <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="relative aspect-video overflow-hidden">

          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            {modality}
          </span>

        </div>

        <div className="space-y-4 p-6">

          <h3 className="line-clamp-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600">
            {name}
          </h3>

          <div className="space-y-3 text-sm text-slate-600">

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" />
              {location}
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-blue-600" />
              {startDate}
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              {teams} equipes
            </div>

          </div>

          <div className="border-t pt-4">

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">

              <Trophy className="h-5 w-5" />

              Ver Campeonato

            </button>

          </div>

        </div>

      </article>

    </Link>
  );
}
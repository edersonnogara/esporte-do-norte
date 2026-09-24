import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export interface NewsCardProps {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
}

export function NewsCard({
  slug,
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <Link href={`/noticias/${slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-6">

        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          {category}
        </span>

        <Link href={`/noticias/${slug}`}>
          <h3 className="line-clamp-2 text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
            {title}
          </h3>
        </Link>

        <p className="line-clamp-3 text-slate-600">
          {excerpt}
        </p>

        <div className="flex items-center justify-between border-t pt-4 text-sm text-slate-500">

          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {author}
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {publishedAt}
          </div>

        </div>

      </div>

    </article>
  );
}
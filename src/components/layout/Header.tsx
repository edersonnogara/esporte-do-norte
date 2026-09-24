"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Loja",
    href: "/loja",
  },
  {
    label: "Campeonatos",
    href: "/campeonatos",
  },
  {
    label: "Notícias",
    href: "/noticias",
  },
  {
    label: "Resultados",
    href: "/resultados",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/bandeiraRO.png"
            alt="Esporte do Norte"
            width={240}
            height={80}
            className="h-14 w-auto object-contain sm:h-16"
            priority
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* AÇÕES DESKTOP */}
        <div className="hidden items-center gap-2 lg:flex">

          <button
            type="button"
            className="rounded-full p-2 transition hover:bg-slate-100"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5 text-slate-700" />
          </button>

          <Link
            href="/loja"
            className="rounded-full p-2 transition hover:bg-slate-100"
            aria-label="Carrinho"
          >
            <ShoppingCart className="h-5 w-5 text-slate-700" />
          </Link>

          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            Entrar
          </Button>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7 text-slate-800" />
          ) : (
            <Menu className="h-7 w-7 text-slate-800" />
          )}
        </button>
      </div>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white shadow-lg lg:hidden">

          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            {/* LINKS */}
            <div className="flex flex-col">

              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition-colors hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}

            </div>

            {/* AÇÕES MOBILE */}
            <div className="mt-4 grid grid-cols-2 gap-3">

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Search className="h-4 w-4" />
                Buscar
              </button>

              <Link
                href="/loja"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <ShoppingCart className="h-4 w-4" />
                Loja
              </Link>

            </div>

            {/* LOGIN */}
            <div className="mt-3">
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <User className="h-4 w-4" />
                Entrar
              </Link>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
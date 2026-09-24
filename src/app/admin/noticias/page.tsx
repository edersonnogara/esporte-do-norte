
"use client";

import { useState } from "react";

export default function NoticiasAdminPage() {
  const [form, setForm] = useState({
    id: "1",
    slug: "",
    title: "",
    excerpt: "",
    image: "",
    category: "Futebol",
    author: "Redação Esporte do Norte",
    publishedAt: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Nova notícia:", form);

    alert("Notícia cadastrada com sucesso!");

    setForm({
      id: "1",
      slug: "",
      title: "",
      excerpt: "",
      image: "",
      category: "Futebol",
      author: "Redação Esporte do Norte",
      publishedAt: "",
    });
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Cadastrar Notícia
          </h1>

          <p className="mt-2 text-slate-600">
            Cadastre uma nova notícia para o Esporte do Norte.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">

            {/* ID */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                ID
              </label>

              <input
                type="text"
                name="id"
                value={form.id}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Slug
              </label>

              <input
                type="text"
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="campeonato-rondonia-2026"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Título */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Título
              </label>

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Campeonato Rondoniense 2026 inicia..."
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Resumo */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Resumo
              </label>

              <textarea
                name="excerpt"
                value={form.excerpt}
                onChange={handleChange}
                placeholder="Digite um resumo da notícia..."
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Imagem */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Imagem
              </label>

              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="/images/news/noticia1.jpg"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <p className="mt-2 text-xs text-slate-500">
                Exemplo: /images/news/noticia1.jpg
              </p>
            </div>

            {/* Categoria */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Categoria
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
              >
                <option value="Futebol">Futebol</option>
                <option value="Vôlei">Vôlei</option>
                <option value="Basquete">Basquete</option>
                <option value="Futsal">Futsal</option>
                <option value="Handebol">Handebol</option>
                <option value="Atletismo">Atletismo</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            {/* Autor */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Autor
              </label>

              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Data */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Data de publicação
              </label>

              <input
                type="text"
                name="publishedAt"
                value={form.publishedAt}
                onChange={handleChange}
                placeholder="24 Jul 2026"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3 border-t border-slate-200 pt-6">
            <button
              type="button"
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Cadastrar Notícia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


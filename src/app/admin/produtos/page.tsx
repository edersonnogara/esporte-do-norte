
"use client";

import { useState } from "react";

export default function ProdutosAdminPage() {
  const [form, setForm] = useState({
    id: "1",
    slug: "",
    name: "",
    brand: "",
    image: "",
    price: "",
    oldPrice: "",
    rating: "0",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const product = {
      id: form.id,
      slug: form.slug,
      name: form.name,
      brand: form.brand,
      image: form.image,
      price: Number(form.price),
      oldPrice: form.oldPrice
        ? Number(form.oldPrice)
        : undefined,
      rating: Number(form.rating),
    };

    console.log("Novo produto:", product);

    alert("Produto cadastrado com sucesso!");

    setForm({
      id: "1",
      slug: "",
      name: "",
      brand: "",
      image: "",
      price: "",
      oldPrice: "",
      rating: "0",
    });
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Cadastrar Produto
          </h1>

          <p className="mt-2 text-slate-600">
            Cadastre produtos que serão vendidos na loja
            do Esporte do Norte.
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
                placeholder="luva-goleiro-profissional"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Nome */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Nome do produto
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Luva de Goleiro Profissional"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Marca */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Marca
              </label>

              <input
                type="text"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                placeholder="Poker"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Imagem */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Imagem
              </label>

              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="/images/products/luva.jpg"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Preço */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Preço atual
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  R$
                </span>

                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="199.90"
                  step="0.01"
                  min="0"
                  required
                  className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Preço antigo */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Preço anterior
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  R$
                </span>

                <input
                  type="number"
                  name="oldPrice"
                  value={form.oldPrice}
                  onChange={handleChange}
                  placeholder="249.90"
                  step="0.01"
                  min="0"
                  className="w-full rounded-lg border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Avaliação */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Avaliação
              </label>

              <input
                type="number"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                min="0"
                max="5"
                step="1"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <p className="mt-2 text-xs text-slate-500">
                Informe uma avaliação entre 0 e 5.
              </p>
            </div>
          </div>

          {/* Preview */}
          {form.name && (
            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h2 className="mb-4 font-semibold text-slate-900">
                Pré-visualização
              </h2>

              <div className="flex items-center gap-4">
                {form.image && (
                  <img
                    src={form.image}
                    alt={form.name}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                )}

                <div>
                  <h3 className="font-bold text-slate-900">
                    {form.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {form.brand}
                  </p>

                  <p className="mt-1 font-bold text-blue-600">
                    R$ {Number(form.price || 0).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )}

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
              Cadastrar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

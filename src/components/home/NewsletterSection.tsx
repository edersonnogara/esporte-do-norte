"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(email);

    alert("Em breve sua inscrição será salva!");

    setEmail("");
  }

  return (
    <section className="bg-blue-700 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-white/20 p-5">
              <Mail className="h-10 w-10" />
            </div>
          </div>

          <h2 className="text-4xl font-black">
            Receba novidades do esporte
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Promoções, campeonatos, notícias e lançamentos diretamente
            no seu e-mail.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 md:flex-row"
          >
            <Input
              type="email"
              placeholder="Digite seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-white text-black"
            />

            <Button
              type="submit"
              size="lg"
              className="h-14 px-8"
            >
              <Send className="mr-2 h-5 w-5" />
              Inscrever-se
            </Button>

          </form>

        </div>
      </Container>
    </section>
  );
}
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  CreditCard,
  ShieldCheck,
  Truck,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t bg-slate-950 text-slate-300">
      {/* Topo */}
      <div className="border-b border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">

          <div className="flex items-center gap-4">
            <Truck className="h-10 w-10 text-blue-500" />

            <div>
              <h4 className="font-semibold text-white">
                Entregamos para todo Brasil
              </h4>

              <p className="text-sm text-slate-400">
                Compra segura e envio rápido.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-green-500" />

            <div>
              <h4 className="font-semibold text-white">
                Compra 100% Segura
              </h4>

              <p className="text-sm text-slate-400">
                Seus dados protegidos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CreditCard className="h-10 w-10 text-yellow-400" />

            <div>
              <h4 className="font-semibold text-white">
                Parcelamento
              </h4>

              <p className="text-sm text-slate-400">
                Em até 12x nos cartões.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Conteúdo */}
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Empresa */}
          <div className="lg:col-span-2">

            <h2 className="mb-4 text-3xl font-black text-white">
              ESPORTE DO NORTE
            </h2>

            <p className="leading-7 text-slate-400">
              O maior portal esportivo da Região Norte.
              Notícias, campeonatos, marketplace de produtos esportivos
              e plataforma profissional para organização de competições.
            </p>

            <div className="mt-8 flex gap-3">

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-red-600"
              >
                <FaYoutube size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-sky-600"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-green-600"
              >
                <FaWhatsapp size={18} />
              </Link>

            </div>

          </div>

          {/* Institucional */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Institucional
            </h3>

            <ul className="space-y-3">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/loja">Loja</Link></li>

              <li><Link href="/noticias">Notícias</Link></li>

              <li><Link href="/campeonatos">Campeonatos</Link></li>

              <li><Link href="/sobre">Sobre Nós</Link></li>

              <li><Link href="/contato">Contato</Link></li>

            </ul>

          </div>

          {/* Categorias */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Categorias
            </h3>

            <ul className="space-y-3">

              <li><Link href="/categoria/futebol">Futebol</Link></li>

              <li><Link href="/categoria/volei">Vôlei</Link></li>

              <li><Link href="/categoria/basquete">Basquete</Link></li>

              <li><Link href="/categoria/corrida">Corrida</Link></li>

              <li><Link href="/categoria/academia">Academia</Link></li>

              <li><Link href="/categoria/esportes">Todos os Esportes</Link></li>

            </ul>

          </div>

          {/* Contato */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Atendimento
            </h3>

            <div className="space-y-5 text-sm">

              <div className="flex gap-3">

                <Phone className="mt-1 h-5 w-5 text-blue-400" />

                <div>

                  <strong className="block text-white">
                    Telefone
                  </strong>

                  (69) 99999-9999

                </div>

              </div>

              <div className="flex gap-3">

                <Mail className="mt-1 h-5 w-5 text-blue-400" />

                <div>

                  <strong className="block text-white">
                    E-mail
                  </strong>

                  contato@esportedonorte.com.br

                </div>

              </div>

              <div className="flex gap-3">

                <MapPin className="mt-1 h-5 w-5 text-blue-400" />

                <div>

                  <strong className="block text-white">
                    Endereço
                  </strong>

                  Rolim de Moura - RO

                </div>

              </div>

              <div className="flex gap-3">

                <Clock3 className="mt-1 h-5 w-5 text-blue-400" />

                <div>

                  <strong className="block text-white">
                    Atendimento
                  </strong>

                  Segunda a Sexta
                  <br />

                  08:00 às 18:00

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Rodapé */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">

          <span>
            © {year} Esporte do Norte.
            Todos os direitos reservados.
          </span>

          <div className="flex gap-6">

            <Link href="/privacidade">
              Política de Privacidade
            </Link>

            <Link href="/termos">
              Termos de Uso
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
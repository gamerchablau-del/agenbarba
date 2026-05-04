"use client"

import { useRouter } from "next/navigation"
import { CalendarDays, Scissors, Clock } from "lucide-react"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className={`text-5xl ${bebas.className} tracking-widest uppercase`}>
          Agen<span className="text-orange-500">Barba</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-md">
          Organize sua barbearia, controle seus horários e nunca mais perca clientes.
        </p>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-6 bg-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Começar agora 🚀
        </button>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-16 bg-zinc-900/50">
        <h2 className={`text-3xl text-center mb-10 ${bebas.className}`}>
          Por que usar?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <CalendarDays className="text-orange-500 mb-3" />
            <h3 className="font-semibold mb-2">Agenda fácil</h3>
            <p className="text-gray-400 text-sm">
              Organize todos seus horários de forma simples e rápida.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <Clock className="text-orange-500 mb-3" />
            <h3 className="font-semibold mb-2">Sem atrasos</h3>
            <p className="text-gray-400 text-sm">
              Tenha controle total dos seus atendimentos no dia.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <Scissors className="text-orange-500 mb-3" />
            <h3 className="font-semibold mb-2">Foco no cliente</h3>
            <p className="text-gray-400 text-sm">
              Menos bagunça, mais tempo pra fazer cortes de qualidade.
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h2 className={`text-3xl ${bebas.className}`}>
          Comece a organizar sua barbearia hoje
        </h2>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-6 bg-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Acessar sistema
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm pb-6">
        © 2026 AgenBarba
      </footer>

    </div>
  )
}
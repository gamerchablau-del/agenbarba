"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CalendarDays, Users, Crown, DollarSign, Clock, Scissors, BarChart3 } from "lucide-react"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function Dashboard() {
  const router = useRouter()

  // 🔒 PROTEÇÃO DE LOGIN
  useEffect(() => {
    const logado = localStorage.getItem("logado")

    if (!logado) {
      router.push("/")
    }
  }, [router])

  return (
    <div className="min-h-screen bg-black text-white p-4">

      {/* TOPO */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className={`text-3xl ${bebas.className} tracking-widest uppercase`}>
            Agen<span className="text-orange-500">Barba</span>
          </h1>
          <p className="text-gray-400 text-sm">Sua agenda, sempre cheia.</p>
        </div>

        <div className="text-xl">🔔</div>
      </div>

      {/* PERFIL */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/fotocadeira.jpg"
          className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Olá, Barbeiro 👋</h2>
          <p className="text-gray-400 text-sm">Hoje é um ótimo dia 💈</p>
        </div>
      </div>
      
      {/* RESUMO */}
      <div className="mb-8">
        <div className="bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-800 p-3">

          <div className="flex items-center justify-between pb-2 border-b border-zinc-800 mb-3">
            <h3 className="text-sm font-semibold">Resumo do dia</h3>
            <button
              onClick={() => router.push("/agenda")}
              className="text-orange-500 text-xs hover:underline"
            >
              Ver agenda →
            </button>
          </div>

          <div className="grid grid-cols-4 divide-x divide-zinc-800">

            <div className="flex flex-col items-center text-center px-1">
              <div className="w-9 h-9 mb-1 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <CalendarDays className="text-orange-500 w-4 h-4" />
              </div>
              <p className="font-bold text-sm">0</p>
              <p className="text-[8px] text-gray-400">Agendados</p>
            </div>

            <div className="flex flex-col items-center text-center px-1">
              <div className="w-9 h-9 mb-1 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Users className="text-orange-500 w-4 h-4" />
              </div>
              <p className="font-bold text-sm">0</p>
              <p className="text-[8px] text-gray-400">Atendidos</p>
            </div>

            <div className="flex flex-col items-center text-center px-1">
              <div className="w-9 h-9 mb-1 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <DollarSign className="text-orange-500 w-4 h-4" />
              </div>
              <p className="font-bold text-sm">0</p>
              <p className="text-[8px] text-gray-400">Faturamento</p>
            </div>

            <div className="flex flex-col items-center text-center px-1">
              <div className="w-9 h-9 mb-1 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Clock className="text-orange-500 w-4 h-4" />
              </div>
              <p className="font-bold text-sm">0</p>
              <p className="text-[8px] text-gray-400">Pendentes</p>
            </div>

          </div>
        </div>
      </div>

      {/* ACESSOS RÁPIDOS */}
      <div className="mt-6 mb-6">
        <h3 className="text-lg font-semibold mb-3">Acessos rápidos</h3>

        <div className="grid grid-cols-3 gap-2">

          {/* 🔥 BOTÃO FUNCIONANDO */}
          <div
            onClick={() => router.push("/novo-agendamento")}
            className="bg-zinc-900/70 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 flex flex-col gap-1 active:scale-95 transition cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <CalendarDays className="text-orange-500 w-5 h-5" />
            </div>
            <p className="font-semibold text-sm">Nova Agenda</p>
            <p className="text-[10px] text-gray-400">Criar</p>
          </div>

          <div
            onClick={() => router.push("/clientes")}
            className="bg-zinc-900/70 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 flex flex-col gap-1 active:scale-95 transition cursor-pointer"
>
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <Users className="text-orange-500 w-5 h-5" />
            </div>
            <p className="font-semibold text-sm">Clientes</p>
            <p className="text-[10px] text-gray-400">Gerenciar</p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 flex flex-col gap-1">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <Scissors className="text-orange-500 w-5 h-5" />
            </div>
            <p className="font-semibold text-sm">Serviços</p>
            <p className="text-[10px] text-gray-400">Editar</p>
          </div>

          <div
  onClick={() => router.push("/relatorios")}
  className="bg-zinc-900/70 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 flex flex-col gap-1 active:scale-95 transition cursor-pointer"
>
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <BarChart3 className="text-orange-500 w-5 h-5" />
            </div>
            <p className="font-semibold text-sm">Relatórios</p>
            <p className="text-[10px] text-gray-400">Ver</p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 flex flex-col gap-1">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <DollarSign className="text-orange-500 w-5 h-5" />
            </div>
            <p className="font-semibold text-sm">Promoções</p>
            <p className="text-[10px] text-gray-400">Ofertas</p>
          </div>

          <div className="bg-zinc-900/70 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 flex flex-col gap-1">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <CalendarDays className="text-orange-500 w-5 h-5" />
            </div>
            <p className="font-semibold text-sm">Catálogo</p>
            <p className="text-[10px] text-gray-400">Serviços</p>
          </div>

        </div>
      </div>

      {/* FIDELIDADE */}
      <div className="mt-4 mb-6">
        <div className="bg-gradient-to-r from-zinc-900/90 to-orange-900/20 border border-orange-500/20 rounded-xl p-3 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Crown className="w-4 h-4 text-orange-400" />
            </div>

            <div>
              <p className="text-sm font-semibold text-orange-200">
                Programa de Fidelidade
              </p>
              <p className="text-[11px] text-gray-300">
                0 clientes estão próximos de um bônus 🎯
              </p>
            </div>
          </div>

          <div className="bg-orange-500 text-black px-3 py-1 rounded-lg text-xs font-semibold">
            Ver
          </div>

        </div>
      </div>

      {/* PRÓXIMO AGENDAMENTO */}
      <div className="bg-zinc-900/70 backdrop-blur-md p-4 rounded-2xl border border-zinc-800">

        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">Próximo agendamento</h3>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="/fotocadeira.jpg"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex-1">
            <p className="font-semibold">Nenhum agendamento</p>
            <p className="text-sm text-gray-400">Sem dados ainda</p>
            <p className="text-xs text-gray-500">--:--</p>
          </div>

          <button className="bg-orange-500 text-black px-3 py-2 rounded-lg text-sm">
            Ver
          </button>
        </div>

      </div>

    </div>
  )
}
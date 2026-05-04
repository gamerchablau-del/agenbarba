"use client"

import { useRouter } from "next/navigation"
import { Plus } from "lucide-react"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function AgendaPage() {

  const router = useRouter()

  const hoje = new Date()

  const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long"
  })

  // 🔥 LISTA DE AGENDAMENTOS (depois vem do banco)
  const agendamentos = [
    {
      hora: "09:00",
      nome: "Kayky Silva",
      servico: "Corte + Barba"
    },
    {
      hora: "11:00",
      nome: "Vinicius Polita",
      servico: "Corte"
    },
    {
      hora: "14:00",
      nome: "Rian Carlos",
      servico: "Corte"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white p-4">

      {/* TOPO */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className={`text-2xl ${bebas.className} tracking-widest uppercase`}>
            Agenda
          </h1>
          <p className="text-gray-400 text-sm capitalize">
            Hoje, {dataFormatada}
          </p>
        </div>

        {/* 🔥 BOTÃO FUNCIONANDO */}
        <button
          onClick={() => router.push("/novo-agendamento")}
          className="bg-orange-500 p-2 rounded-lg active:scale-95 transition"
        >
          <Plus className="text-black w-5 h-5" />
        </button>
      </div>

      {/* LISTA */}
      {agendamentos.length > 0 ? (
        <div className="flex flex-col gap-6">

          {agendamentos.map((item, index) => (
            <div key={index} className="flex gap-3">

              {/* HORA */}
              <div className="w-16 text-right">
                <p className="text-sm text-gray-400">{item.hora}</p>
              </div>

              {/* LINHA */}
              <div className="w-px bg-zinc-700 relative">
                <div className="w-2 h-2 bg-orange-500 rounded-full absolute -left-[3px] top-1"></div>
              </div>

              {/* CARD */}
              <div className="flex-1 bg-zinc-900/70 backdrop-blur-md p-3 rounded-xl border border-zinc-800">
                <p className="font-semibold">{item.nome}</p>
                <p className="text-sm text-gray-400">{item.servico}</p>
              </div>

            </div>
          ))}

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
          <p className="text-lg">Nenhum agendamento hoje</p>
          <p className="text-sm">Clique no + para adicionar</p>
        </div>
      )}

    </div>
  )
}
"use client"

import { ArrowLeft, DollarSign, Users, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function RelatoriosPage() {
  const router = useRouter()

  const hoje = new Date()

  const dataFormatada = hoje.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  // 🔥 DADOS MOCKADOS
  const faturamento = 320
  const atendimentos = 7

  const servicos = [
    { nome: "Corte", valor: 150 },
    { nome: "Barba", valor: 90 },
    { nome: "Sobrancelha", valor: 40 },
    { nome: "Corte + Barba", valor: 40 },
  ]

  const evolucao = [
    { dia: "3d", valor: 200 },
    { dia: "2d", valor: 260 },
    { dia: "Ontem", valor: 300 },
    { dia: "Hoje", valor: faturamento },
  ]

  const maxServico = Math.max(...servicos.map(s => s.valor))
  const maxEvolucao = Math.max(...evolucao.map(e => e.valor))

  return (
    <div className="min-h-screen bg-black text-white p-4">

      {/* TOPO */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.back()}>
          <ArrowLeft />
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <BarChart3 className="text-orange-500 w-5 h-5" />
            <h1 className={`text-xl ${bebas.className} tracking-widest`}>
              RELATÓRIO DO DIA
            </h1>
          </div>

          <p className="text-gray-400 text-sm capitalize">
            {dataFormatada}
          </p>
        </div>

        <div className="w-6" />
      </div>

      {/* 🔥 CONTAINER DOS CARDS */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-3 mb-6">
        <div className="grid grid-cols-2 gap-3">

          <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
            <DollarSign className="text-orange-500 mb-2" />
            <p className="text-xs text-gray-400">Faturamento total</p>
            <p className="text-xl font-bold">R$ {faturamento}</p>
          </div>

          <div className="bg-black/40 p-4 rounded-xl border border-zinc-800">
            <Users className="text-orange-500 mb-2" />
            <p className="text-xs text-gray-400">Total de atendimentos</p>
            <p className="text-xl font-bold">{atendimentos}</p>
          </div>

        </div>
      </div>

      {/* FATURAMENTO POR SERVIÇO */}
      <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 mb-6">
        <p className="text-sm text-orange-500 mb-3">
          Faturamento por serviços
        </p>

        <div className="flex flex-col gap-3">
          {servicos.map((s, i) => {
            const porcentagem = Math.round((s.valor / faturamento) * 100)

            return (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{s.nome}</span>
                  <span className="text-gray-400">
                    R$ {s.valor} • {porcentagem}%
                  </span>
                </div>

                <div className="w-full h-2 bg-zinc-800 rounded-full">
                  <div
                    className="h-2 bg-orange-500 rounded-full"
                    style={{
                      width: `${(s.valor / maxServico) * 100}%`
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 🔥 EVOLUÇÃO (100% FUNCIONAL) */}
      <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
        <p className="text-sm text-orange-500 mb-3">
          Evolução do faturamento
        </p>

        <div className="flex items-end justify-between h-40">

          {evolucao.map((e, i) => {
            // 🔥 ALTURA EM PIXEL (NUNCA SOME)
            const altura = (e.valor / maxEvolucao) * 120

            return (
              <div key={i} className="flex flex-col items-center gap-1">

                <div
                  className="w-8 bg-orange-500 rounded-t"
                  style={{
                    height: `${altura}px`
                  }}
                />

                <p className="text-[10px] text-gray-400">
                  {e.dia}
                </p>

                <p className="text-[10px] text-gray-500">
                  R$ {e.valor}
                </p>

              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}
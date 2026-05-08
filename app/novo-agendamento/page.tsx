"use client"

import { useState } from "react"
import {
  ArrowLeft,
  User,
  Scissors,
  CalendarDays,
  Clock,
} from "lucide-react"

import {
  useRouter,
  useSearchParams,
} from "next/navigation"

import { Bebas_Neue } from "next/font/google"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export default function NovoAgendamento() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // 🔥 CLIENTE RECEBIDO DA URL
  const clienteNome = searchParams.get("nome")
  const clienteFoto = searchParams.get("foto")

  const [servicoSelecionado, setServicoSelecionado] =
    useState("Corte")

  const [horarioSelecionado, setHorarioSelecionado] =
    useState("10:00")

  const [dataSelecionada, setDataSelecionada] =
    useState(0)

  const [dataCustom, setDataCustom] =
    useState<Date | null>(null)

  const [abrirCalendario, setAbrirCalendario] =
    useState(false)

  const hoje = new Date()

  // 🔥 GERAR DIAS (SEM DOMINGO)
  const dias = []
  let i = 0

  while (dias.length < 7) {
    const data = new Date()

    data.setDate(hoje.getDate() + i)

    if (data.getDay() !== 0) {
      dias.push({
        dataCompleta: data,
        diaSemana: data.toLocaleDateString(
          "pt-BR",
          {
            weekday: "short",
          }
        ),
        diaNumero: data.getDate(),
        mes: data.toLocaleDateString(
          "pt-BR",
          {
            month: "short",
          }
        ),
      })
    }

    i++
  }

  // 🔥 HORÁRIOS
  const horarios = Array.from(
    { length: 11 },
    (_, i) => {
      const hora = 8 + i

      return `${hora
        .toString()
        .padStart(2, "0")}:00`
    }
  )

  const servicos = [
    {
      nome: "Corte",
      preco: "R$ 50",
    },
    {
      nome: "Barba",
      preco: "R$ 30",
    },
    {
      nome: "Corte + Barba",
      preco: "R$ 70",
    },
    {
      nome: "Sobrancelha",
      preco: "R$ 20",
    },
  ]

  const dataFinal =
    dataCustom ||
    dias[dataSelecionada].dataCompleta

  const dataFormatada =
    dataFinal.toLocaleDateString(
      "pt-BR",
      {
        day: "numeric",
        month: "short",
      }
    )

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-10">

      {/* TOPO */}
      <div className="flex items-center justify-between mb-6">

        <button
          onClick={() => router.back()}
        >
          <ArrowLeft className="text-white w-6 h-6" />
        </button>

        <h1
          className={`text-xl ${bebas.className} tracking-widest`}
        >
          NOVO AGENDAMENTO
        </h1>

        <CalendarDays className="text-orange-500" />

      </div>

      {/* CLIENTE */}
      <div className="mb-6">

        <p className="text-sm text-orange-500 mb-2">
          1. CLIENTE
        </p>

        <button
          onClick={() =>
            router.push("/clientes")
          }
          className="w-full bg-zinc-900 p-4 rounded-xl border border-zinc-800 active:scale-[0.98] transition"
        >

          {clienteNome ? (
            <div className="flex items-center gap-3">

              <img
                src={clienteFoto || ""}
                className="w-14 h-14 rounded-2xl object-cover"
              />

              <div className="text-left">

                <p className="font-semibold">
                  {clienteNome}
                </p>

                <p className="text-xs text-gray-400">
                  Cliente selecionado
                </p>

              </div>

            </div>
          ) : (
            <div className="flex items-center gap-3">

              <User className="text-orange-500" />

              <div className="text-left">

                <p>Cliente</p>

                <p className="text-xs text-gray-400">
                  Nome e número
                </p>

              </div>

            </div>
          )}

        </button>

      </div>

      {/* SERVIÇOS */}
      <div className="mb-6">

        <p className="text-sm text-orange-500 mb-2">
          2. SERVIÇO
        </p>

        <div className="flex gap-3 overflow-x-auto pb-2">

          {servicos.map((servico) => (
            <div
              key={servico.nome}
              onClick={() =>
                setServicoSelecionado(
                  servico.nome
                )
              }
              className={`min-w-[130px] p-3 rounded-xl border cursor-pointer transition
              ${
                servicoSelecionado ===
                servico.nome
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-zinc-800 bg-zinc-900"
              }
            `}
            >

              <Scissors className="mb-2 text-orange-500" />

              <p className="font-semibold text-sm">
                {servico.nome}
              </p>

              <p className="text-xs text-gray-400">
                {servico.preco}
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* DATA */}
      <div className="mb-6">

        <p className="text-sm text-orange-500 mb-2">
          3. DATA
        </p>

        <div className="flex gap-2 overflow-x-auto pb-2">

          {dias.map((dia, index) => (
            <div
              key={index}
              onClick={() => {
                setDataSelecionada(index)
                setDataCustom(null)
              }}
              className={`min-w-[70px] text-center p-3 rounded-xl border cursor-pointer
              ${
                dataCustom === null &&
                dataSelecionada === index
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-zinc-900 border-zinc-800"
              }
            `}
            >

              <p className="text-xs capitalize">
                {dia.diaSemana}
              </p>

              <p className="font-bold">
                {dia.diaNumero}
              </p>

              <p className="text-[10px]">
                {dia.mes}
              </p>

            </div>
          ))}

          {/* MAIS */}
          <div
            onClick={() =>
              setAbrirCalendario(true)
            }
            className="min-w-[70px] flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-800 bg-zinc-900 cursor-pointer"
          >

            <CalendarDays className="text-orange-500 mb-1" />

            <span className="text-xs">
              Mais
            </span>

          </div>

        </div>

      </div>

      {/* MODAL CALENDÁRIO */}
      {abrirCalendario && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">

            <input
              type="date"
              className="bg-black text-white p-2 rounded"
              onChange={(e) => {
                if (!e.target.value)
                  return

                const novaData =
                  new Date(
                    e.target.value
                  )

                if (
                  novaData.getDay() === 0
                ) {
                  alert(
                    "Domingo não disponível"
                  )

                  return
                }

                setDataCustom(novaData)

                setAbrirCalendario(false)
              }}
            />

            <button
              onClick={() =>
                setAbrirCalendario(false)
              }
              className="mt-4 w-full bg-orange-500 text-black py-2 rounded"
            >
              Fechar
            </button>

          </div>

        </div>
      )}

      {/* HORÁRIOS */}
      <div className="mb-6">

        <p className="text-sm text-orange-500 mb-2">
          4. HORÁRIO
        </p>

        <div className="flex gap-2 overflow-x-auto pb-2">

          {horarios.map((hora) => (
            <button
              key={hora}
              onClick={() =>
                setHorarioSelecionado(hora)
              }
              className={`min-w-[80px] p-3 rounded-lg border transition
              ${
                horarioSelecionado ===
                hora
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-zinc-900 border-zinc-800"
              }
            `}
            >
              {hora}
            </button>
          ))}

        </div>

      </div>

      {/* RESUMO */}
      <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 mb-6">

        <p className="text-sm text-orange-500 mb-2">
          Resumo
        </p>

        <div className="flex flex-col gap-2 text-sm text-gray-300">

          <div className="flex items-center gap-2">
            <User size={16} />

            Cliente:{" "}

            {clienteNome || "-"}
          </div>

          <div className="flex items-center gap-2">
            <Scissors size={16} />
            {servicoSelecionado}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {dataFormatada}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {horarioSelecionado}
          </div>

        </div>

      </div>

      {/* BOTÃO */}
      <button className="w-full bg-orange-500 text-black py-4 rounded-xl font-semibold active:scale-95 transition">

        CONFIRMAR AGENDAMENTO

      </button>

    </div>
  )
}
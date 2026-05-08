"use client"

import {
  ArrowLeft,
  Users,
  Search,
  Filter,
  Phone,
  CalendarDays,
  Crown,
  Pencil,
  ChevronRight,
  Plus,
  Scissors,
} from "lucide-react"

import { useRouter } from "next/navigation"
import { Bebas_Neue } from "next/font/google"

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
})

export default function ClientesPage() {
  const router = useRouter()

  const clientes = [
    {
      nome: "Vinicius Polita",
      telefone: "(11) 99999-9999",
      ultimo: "10/05/2026",
      foto: "/vini.png",
      vip: true,
    },
    {
      nome: "Kayky Smex",
      telefone: "(11) 98888-8888",
      ultimo: "08/05/2026",
      foto: "/smex.png",
      vip: true,
    },
    {
      nome: "Matheus Reinoso",
      telefone: "(11) 97777-7777",
      ultimo: "05/05/2026",
      foto: "/mat.jpg",
      vip: true,
    },
    {
      nome: "Lucas Alves",
      telefone: "(11) 96666-6666",
      ultimo: "01/05/2026",
      foto: "/cliente2.jpg",
    },
    {
      nome: "Gabriel Lima",
      telefone: "(11) 95555-5555",
      ultimo: "28/04/2026",
      foto: "/cliente3.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-4 pb-10">

      {/* TOPO */}
      <div className="flex items-center justify-between mb-6">

        <button onClick={() => router.back()}>
          <ArrowLeft className="text-white w-6 h-6" />
        </button>

        <div className="flex items-center gap-2">

          <Scissors className="text-orange-500 w-6 h-6" />

          <div>
            <h1
              className={`text-2xl ${bebas.className} tracking-wider`}
            >
              CLIENTES
            </h1>

            <p className="text-gray-400 text-xs">
              Gerencie seus clientes cadastrados
            </p>
          </div>

        </div>

        <button
          className="w-11 h-11 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center"
        >
          <Plus className="text-orange-400 w-5 h-5" />
        </button>

      </div>

      {/* CARD RESUMO */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-4 mb-5 backdrop-blur-md">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

              <Users className="text-orange-500 w-7 h-7" />

            </div>

            <div>

              <p className="text-gray-400 text-sm">
                Total de clientes
              </p>

              <h2 className="text-3xl font-bold">
                {clientes.length}
              </h2>

            </div>

          </div>

          <div className="text-right border-l border-zinc-800 pl-4">

            <p className="text-green-400 font-semibold">
              ↑ 12%
            </p>

            <p className="text-gray-500 text-xs">
              vs mês passado
            </p>

          </div>

        </div>

      </div>

      {/* BUSCA */}
      <div className="flex gap-3 mb-5">

        <div className="flex-1 bg-zinc-900/70 border border-zinc-800 rounded-2xl px-4 h-14 flex items-center gap-3">

          <Search className="text-gray-500 w-5 h-5" />

          <input
            type="text"
            placeholder="Buscar cliente..."
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
          />

        </div>

        <button className="w-14 h-14 rounded-2xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-center">

          <Filter className="text-gray-400 w-5 h-5" />

        </button>

      </div>

      {/* LISTA */}
      <div className="flex flex-col gap-4">

        {clientes.map((cliente, index) => (
          <div
            key={index}
            onClick={() =>
              router.push(
                `/novo-agendamento?nome=${encodeURIComponent(
                  cliente.nome
                )}&foto=${encodeURIComponent(cliente.foto)}`
              )
            }
            className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-3 backdrop-blur-md active:scale-[0.98] transition cursor-pointer"
          >

            <div className="flex items-center gap-3">

              {/* FOTO */}
              <img
                src={cliente.foto}
                alt={cliente.nome}
                className="w-16 h-16 rounded-2xl object-cover"
              />

              {/* INFOS */}
              <div className="flex-1">

                <div className="flex items-center gap-2 mb-1">

                  <h3 className="font-semibold text-lg">
                    {cliente.nome}
                  </h3>

                  {cliente.vip && (
                    <div className="bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded-full flex items-center gap-1">

                      <Crown className="w-3 h-3 text-orange-400" />

                      <span className="text-[10px] text-orange-300">
                        VIP
                      </span>

                    </div>
                  )}

                </div>

                <div className="flex items-center gap-2 text-gray-400 text-sm">

                  <Phone className="w-4 h-4" />

                  <p>{cliente.telefone}</p>

                </div>

                <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">

                  <CalendarDays className="w-4 h-4" />

                  <p>
                    Último atendimento: {cliente.ultimo}
                  </p>

                </div>

              </div>

              {/* BOTÕES */}
              <div className="flex items-center gap-2">

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center"
                >

                  <Pencil className="text-orange-400 w-5 h-5" />

                </button>

                <ChevronRight className="text-gray-500 w-5 h-5" />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
} 
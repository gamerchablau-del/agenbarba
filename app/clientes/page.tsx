"use client"

import {
  ArrowLeft,
  Search,
  Filter,
  Crown,
  Phone,
  Calendar,
  Pencil,
  ChevronRight,
  Users,
  Plus,
} from "lucide-react"

import Image from "next/image"
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
      ultimo: "10/05/2024",
      vip: true,
      foto: "/vini.png",
    },
    {
      nome: "Kayky Smex",
      telefone: "(11) 98888-8888",
      ultimo: "08/05/2024",
      vip: true,
      foto: "/smex.png",
    },
    {
      nome: "Carlos Ferreira",
      telefone: "(11) 97777-7777",
      ultimo: "05/05/2024",
      vip: false,
      foto: "/fotocadeira.jpg",
    },
    {
      nome: "Lucas Alves",
      telefone: "(11) 96666-6666",
      ultimo: "01/05/2024",
      vip: false,
      foto: "/fotocadeira.jpg",
    },
    {
      nome: "Gabriel Lima",
      telefone: "(11) 95555-5555",
      ultimo: "28/04/2024",
      vip: false,
      foto: "/fotocadeira.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-4">

      {/* TOPO */}
      <div className="flex items-center justify-between mb-6">

        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-orange-500" />
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <Users className="text-orange-500 w-5 h-5" />

            <h1
              className={`text-2xl tracking-widest ${bebas.className}`}
            >
              CLIENTES
            </h1>
          </div>

          <p className="text-gray-400 text-sm">
            Gerencie seus clientes cadastrados
          </p>
        </div>

        <button
          className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center"
        >
          <Plus className="w-5 h-5 text-orange-400" />
        </button>
      </div>

      {/* RESUMO */}
      <div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-4 mb-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Users className="text-orange-500 w-7 h-7" />
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Total de clientes
              </p>

              <h2 className="text-3xl font-bold">
                128
              </h2>
            </div>

          </div>

          <div className="text-right">
            <p className="text-green-400 text-lg font-semibold">
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

        <div className="flex-1 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 flex items-center gap-3">

          <Search className="text-gray-500 w-5 h-5" />

          <input
            type="text"
            placeholder="Buscar cliente..."
            className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
          />

        </div>

        <button className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <Filter className="text-gray-400 w-5 h-5" />
        </button>

      </div>

      {/* CLIENTES */}
      <div className="flex flex-col gap-4">

        {clientes.map((cliente, index) => (
          <div
            key={index}
            className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-4 flex items-center justify-between"
          >

            <div className="flex items-center gap-4">

              {/* FOTO */}
              <div className="relative">

                <Image
                  src={cliente.foto}
                  alt={cliente.nome}
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] rounded-2xl object-cover"
                />

                {cliente.vip && (
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center border-2 border-black">
                    <Crown className="w-4 h-4 text-black" />
                  </div>
                )}

              </div>

              {/* INFO */}
              <div>

                <h2 className="font-semibold text-lg">
                  {cliente.nome}
                </h2>

                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <Phone className="w-4 h-4" />
                  <span>{cliente.telefone}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Último atendimento: {cliente.ultimo}
                  </span>
                </div>

              </div>

            </div>

            {/* AÇÕES */}
            <div className="flex items-center gap-3">

              <button className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <Pencil className="w-5 h-5 text-orange-400" />
              </button>

              <ChevronRight className="text-gray-500 w-5 h-5" />

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}
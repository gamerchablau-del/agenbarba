"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function NovoAgendamento() {
  const router = useRouter()

  const [nome, setNome] = useState("")
  const [servico, setServico] = useState("")
  const [hora, setHora] = useState("")

  function salvarAgendamento() {
    if (!nome || !servico || !hora) {
      alert("Preenche tudo aí 😅")
      return
    }

    const novo = { nome, servico, hora }

    const antigos = JSON.parse(localStorage.getItem("agendamentos") || "[]")

    localStorage.setItem("agendamentos", JSON.stringify([...antigos, novo]))

    router.push("/agenda")
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">

      <h1 className={`text-2xl ${bebas.className} mb-6`}>
        Novo Agendamento
      </h1>

      <div className="flex flex-col gap-4">

        <input
          placeholder="Nome do cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-3 rounded-lg bg-zinc-900 border border-zinc-700"
        />

        <input
          placeholder="Serviço"
          value={servico}
          onChange={(e) => setServico(e.target.value)}
          className="p-3 rounded-lg bg-zinc-900 border border-zinc-700"
        />

        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="p-3 rounded-lg bg-zinc-900 border border-zinc-700"
        />

        <button
          onClick={salvarAgendamento}
          className="bg-orange-500 text-black p-3 rounded-lg font-semibold"
        >
          Salvar
        </button>

      </div>

    </div>
  )
}
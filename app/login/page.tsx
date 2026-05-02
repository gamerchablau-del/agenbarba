"use client"
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center">

      {/* IMAGEM DE FUNDO */}
      <img
        src="/cadeirabarb.jpg"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* overlay escuro (mais leve) */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center">

        {/* LOGO */}
        <h1 className={`text-5xl md:text-7xl ${bebas.className} tracking-widest uppercase drop-shadow-lg mb-2`}>
          Agen<span className="text-orange-500">Barba</span>
        </h1>
        
        {/* FRASE */}
        <p className="text-gray-300 mt-1 mb-6 text-sm md:text-base uppercase tracking-[0.2em] text-center">
          SUA AGENDA, SEMPRE CHEIA
        </p>

        {/* CARD LOGIN (glass iPhone) */}
        <div className="w-full max-w-xs md:max-w-sm 
        bg-white/0 backdrop-blur-md 
        p-6 rounded-3xl 
        border border-white/20 
        shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] 
        relative overflow-hidden">

          {/* brilho */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/5 to-transparent pointer-events-none"></div>

          <h2 className="text-xl font-semibold mb-4 text-white relative z-10">
            Bem-vindo!
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg bg-black/60 border border-white/10 text-white relative z-10"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full mb-6 p-3 rounded-lg bg-black/60 border border-white/10 text-white relative z-10"
          />
          <div className="text-right mb-4 relative z-10">
  <a href="#" className="text-xs text-gray-400 hover:text-orange-400">
    Esqueceu sua senha?
  </a>
</div>

          <button className="w-full bg-orange-500 text-black py-3 rounded-lg font-semibold hover:opacity-90 relative z-10">
            Entrar
          </button>
        </div>
        <p className="text-gray-300 mt-6 text-sm">
  Novo por aqui?{" "}
  <a href="#" className="text-orange-400 hover:underline">
    Criar conta
  </a>
</p>
      </div>
    </div>
  );
}
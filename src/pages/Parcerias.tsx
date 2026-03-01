import React from 'react';

export const Parcerias = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Projetos Missionários</h1>
      <p className="text-slate-600 mb-12 text-lg">
        O Clarim da Verdade apoia e desenvolve projetos focados na proclamação final. Conheça como você pode se envolver.
      </p>

      <div className="grid gap-8">
        <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-500">Projeto Evangelho Eterno</h2>
          <p className="text-slate-300 mb-6">Focado na tradução e distribuição de materiais proféticos para as províncias de Angola.</p>
          <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-sm uppercase">Saber Mais</button>
        </div>

        <div className="p-8 border-2 border-slate-100 rounded-[2.5rem]">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Rede de Obreiros Digitais</h2>
          <p className="text-slate-500 mb-6">União de criadores de conteúdo IA para inundar as redes sociais com a mensagem do advento.</p>
          <button className="border-2 border-slate-900 px-6 py-3 rounded-xl font-black text-sm uppercase">Candidatar-se</button>
        </div>
      </div>
    </div>
  );
};


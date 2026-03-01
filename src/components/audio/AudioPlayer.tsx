import React from 'react';

const sermoes = [
  { id: 1, titulo: "O Fechamento da Porta da Graça", duracao: "45:20", url: "#" },
  { id: 2, titulo: "As Sete Pragas e o Povo de Deus", duracao: "38:15", url: "#" },
  { id: 3, titulo: "A Justificação pela Fé no Santuário", duracao: "52:10", url: "#" }
];

export const AudioSermoes = () => {
  return (
    <div className="bg-slate-900 rounded-[2rem] p-8 text-white my-10 shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-amber-500 p-2 rounded-lg text-slate-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </div>
        <h2 className="text-xl font-black uppercase tracking-tighter">Mensagens em Áudio</h2>
      </div>

      <div className="space-y-4">
        {sermoes.map(s => (
          <div key={s.id} className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition border border-slate-700 group">
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base group-hover:text-amber-500 transition">{s.titulo}</span>
              <span className="text-[10px] text-slate-400 font-mono">{s.duracao}</span>
            </div>
            <button className="bg-amber-500 text-slate-900 p-2 rounded-full font-black text-xs hover:scale-110 transition">
              ▶ OUVIR
            </button>
          </div>
        ))}
      </div>
      
      <p className="text-[10px] text-slate-500 text-center mt-6 italic">Ide por todo o mundo e pregai o evangelho.</p>
    </div>
  );
};


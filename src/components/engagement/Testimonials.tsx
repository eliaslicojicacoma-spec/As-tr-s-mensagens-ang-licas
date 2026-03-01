import React from 'react';

const depoimentos = [
  { id: 1, nome: "Irmão Manuel", local: "Luanda", texto: "Os estudos sobre o santuário abriram meus olhos para a intercessão de Cristo." },
  { id: 2, nome: "Irmã Maria", local: "Huambo", texto: "Finalmente um material profundo e fiel às profecias de Daniel." }
];

export const Testimonials = () => {
  return (
    <div className="py-12 bg-amber-50 rounded-[3rem] px-6 my-10">
      <h2 className="text-2xl font-black text-center text-slate-900 mb-10 uppercase tracking-tighter">Vidas Transformadas</h2>
      <div className="grid gap-6">
        {depoimentos.map(d => (
          <div key={d.id} className="bg-white p-6 rounded-2xl shadow-sm italic text-slate-700 relative">
            <span className="text-4xl text-amber-200 absolute top-2 left-4 font-serif">"</span>
            <p className="relative z-10 mb-4">{d.texto}</p>
            <div className="text-right">
              <span className="font-bold text-slate-900 text-sm">— {d.nome}, </span>
              <span className="text-amber-600 text-xs font-bold">{d.local}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


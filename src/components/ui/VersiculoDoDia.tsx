import React from 'react';

export const VersiculoDoDia = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-2xl my-10">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-1 w-8 bg-amber-500 rounded-full"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Versículo do Dia</span>
      </div>
      <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6">
        "E este evangelho do reino será pregado em todo o mundo, em testemunho a todas as nações, e então virá o fim."
      </p>
      <div className="flex justify-between items-end">
        <span className="text-sm font-bold text-slate-400">Mateus 24:14</span>
        <button className="text-[10px] bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-full transition uppercase font-black">
          Partilhar
        </button>
      </div>
    </div>
  );
};


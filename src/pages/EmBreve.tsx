import React from 'react';

export const EmBreve = ({ tema }: { tema: string }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-6">⏳</div>
      <h2 className="text-2xl font-black text-slate-900 mb-2">Em Preparação</h2>
      <p className="text-slate-500 max-w-xs leading-relaxed">
        O estudo sobre <span className="text-amber-600 font-bold">{tema}</span> está sendo revisado e será publicado em breve.
      </p>
      <button className="mt-8 text-sm font-bold text-slate-400 underline decoration-amber-500 decoration-2">
        Avisar-me quando estiver pronto
      </button>
    </div>
  );
};


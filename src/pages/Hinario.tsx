import React, { useState } from 'react';

export const Hinario = () => {
  const [busca, setBusca] = useState('');

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 mb-2">Hinário Adventista</h1>
          <p className="text-slate-600 italic leading-relaxed">
            "Louvai ao Senhor, porque é bom cantar louvores ao nosso Deus." (Salmo 147:1)
          </p>
        </header>

        {/* Barra de Busca Simples */}
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Buscar hino por número ou título..."
            className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-amber-500 outline-none transition shadow-sm"
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <p className="text-center text-slate-400 py-10">
            {busca ? `Resultados para "${busca}" aparecerão aqui...` : "Selecione um hino para começar a adoração."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <a href="https://hinarioadventista.com.br" target="_blank" className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-amber-50 transition">
                <span className="font-bold text-slate-700">Acessar Hinário Completo Online</span>
                <span className="text-amber-600">🎶</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};


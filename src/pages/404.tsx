import React from 'react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-black text-slate-200">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 -mt-8 mb-4">Página não encontrada</h2>
      <p className="text-slate-500 mb-8 max-w-sm">O link pode ter sido movido ou a mensagem ainda não foi publicada.</p>
      <a href="/" className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold">Voltar ao Início</a>
    </div>
  );
};


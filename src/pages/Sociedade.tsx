import React from 'react';
import { feSociedadeContent } from '../content/faith/sociedade';

export const Sociedade = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">
            {feSociedadeContent.title}
          </h1>
          <p className="text-xl text-amber-600 font-medium italic">
            {feSociedadeContent.subtitle}
          </p>
        </header>

        <section className="prose prose-slate max-w-none mb-16">
          <p className="text-lg leading-relaxed text-slate-700">
            {feSociedadeContent.intro}
          </p>
        </section>

        <div className="grid gap-8">
          {feSociedadeContent.principios.map((p, i) => (
            <div key={i} className="border-l-4 border-slate-900 pl-6 py-2 bg-slate-50 rounded-r-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{p.titulo}</h3>
              <p className="text-slate-600">{p.descricao}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 p-8 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-6 underline decoration-amber-500">Pares de Estudo</h3>
          <ul className="space-y-4">
            {feSociedadeContent.mensagensChave.map((m, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">•</span>
                <span className="text-slate-300">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


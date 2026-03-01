import React from 'react';

const estudos = [
  { titulo: "As Profecias de Daniel", link: "https://novotempo.com/bibliafacil-daniel" },
  { titulo: "O Apocalipse Revelado", link: "https://novotempo.com/bibliafacil-apocalipse" },
  { titulo: "O Santuário Celestial", link: "https://adv.st/esperanca" }
];

export const EstudosProfeticos = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Estudos Proféticos</h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Explore as verdades bíblicas para o tempo do fim através destes guias detalhados.
        </p>
        
        <div className="grid gap-4">
          {estudos.map((estudo, index) => (
            <a 
              key={index} 
              href={estudo.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-amber-50 hover:border-amber-200 transition group"
            >
              <span className="font-bold text-slate-800 group-hover:text-amber-700">{estudo.titulo}</span>
              <span className="text-amber-600 font-black">LER →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

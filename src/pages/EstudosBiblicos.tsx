import React from 'react';

const recursos = [
  { nome: "Ouvindo a Voz de Deus", link: "https://biblia.com.br/estudos-biblicos" },
  { nome: "Bíblia Fácil Apocalipse", link: "https://novotempo.com/bibliafacil-apocalipse" },
  { nome: "Bíblia Fácil Daniel", link: "https://novotempo.com/bibliafacil-daniel" },
  { nome: "Verdade de Esperança (Chatbot)", link: "https://adv.st/esperanca" },
  { nome: "Escritos de Ellen G. White (EGW Writings)", link: "https://egwwritings.org" },
  { nome: "Hinário Adventista Online", link: "https://hinarioadventista.com.br" },
  { nome: "Feliz7Play (Streaming)", link: "https://feliz7play.com" }
];

export const EstudosBiblicos = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center">
          <span className="bg-amber-500 text-white p-2 rounded mr-3 text-lg">📖</span>
          Biblioteca Missionária
        </h2>

        <div className="grid gap-4">
          {recursos.map((item, index) => (
            <a 
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center bg-white p-5 rounded-xl border border-gray-200 hover:border-amber-400 shadow-sm transition active:scale-95"
            >
              <span className="font-semibold text-slate-700">{item.nome}</span>
              <span className="text-amber-600 font-bold">Acessar →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


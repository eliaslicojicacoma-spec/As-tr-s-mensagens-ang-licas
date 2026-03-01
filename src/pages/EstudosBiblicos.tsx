import React from 'react';

const categoriasEstudo = [
  {
    setor: "Profecias e Bíblia",
    links: [
      { nome: "Ouvindo a Voz de Deus", url: "https://biblia.com.br/estudos-biblicos" },
      { nome: "Bíblia Fácil Daniel", url: "https://novotempo.com/bibliafacil-daniel" },
      { nome: "Bíblia Fácil Apocalipse", url: "https://novotempo.com/bibliafacil-apocalipse" }
    ]
  },
  {
    setor: "Saúde e Sociedade",
    links: [
      { nome: "Quero Vida e Saúde", url: "https://querovidaesaude.com" },
      { nome: "ADRA Angola", url: "https://adra.org.br" }
    ]
  },
  {
    setor: "Família e Juventude",
    links: [
      { nome: "Entre Família", url: "https://estudos.adventistas.org" },
      { nome: "Conexão 2.0", url: "https://conexao20.adventistas.org" }
    ]
  }
];

export const EstudosBiblicos = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 mb-10 border-b-8 border-amber-500 inline-block">Centro de Estudos</h1>
        
        <div className="space-y-12">
          {categoriasEstudo.map((cat, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-slate-900 rounded-full"></span>
                {cat.setor}
              </h2>
              <div className="grid gap-4">
                {cat.links.map((link, j) => (
                  <a key={j} href={link.url} target="_blank" className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl hover:bg-slate-100 transition border border-slate-100">
                    <span className="font-semibold text-slate-700">{link.nome}</span>
                    <span className="text-amber-600 font-bold text-sm">Acessar →</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

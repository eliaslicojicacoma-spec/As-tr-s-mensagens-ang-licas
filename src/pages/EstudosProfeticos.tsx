import React from 'react';

const estudos = [
  {
    titulo: "Bíblia Fácil Daniel",
    descricao: "Um mergulho nas profecias que revelam o destino das nações.",
    link: "https://novotempo.com/bibliafacil-daniel",
    tag: "Daniel"
  },
  {
    titulo: "Bíblia Fácil Apocalipse",
    descricao: "A revelação de Jesus Cristo para o tempo do fim.",
    link: "https://novotempo.com/bibliafacil-apocalipse",
    tag: "Apocalipse"
  },
  {
    titulo: "O Grande Conflito",
    descricao: "A história do conflito milenar entre o bem e o mal.",
    link: "https://egwwritings.org/book/b1633",
    tag: "E.G. White"
  },
  {
    titulo: "Eventos Finais",
    descricao: "O que a Bíblia e a profecia dizem sobre o que está por vir.",
    link: "https://egwwritings.org/book/b1604",
    tag: "E.G. White"
  }
];

export const EstudosProfeticos = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho */}
        <header className="mb-10 text-center">
          <span className="text-amber-600 font-black uppercase tracking-[0.2em] text-xs">
            Escola Bíblica Online
          </span>
          <h1 className="text-3xl font-black text-slate-900 mt-2 mb-4">
            Estudos de Daniel e Apocalipse
          </h1>
          <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
            Materiais selecionados para o seu crescimento espiritual e compreensão das profecias bíblicas.
          </p>
        </header>

        {/* Grade de Estudos */}
        <div className="grid gap-4 md:grid-cols-2">
          {estudos.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-amber-500 transition-all duration-300">
              <div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md uppercase">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {item.descricao}
                </p>
              </div>
              
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-sm active:scale-95 transition-transform"
              >
                Começar Estudo Agora
              </a>
            </div>
          ))}
        </div>

        {/* CTA para o Chatbot de Esperança */}
        <div className="mt-12 bg-amber-500 rounded-3xl p-8 text-white text-center shadow-xl shadow-amber-200">
          <h3 className="text-xl font-bold mb-2">Deseja um guia pessoal?</h3>
          <p className="mb-6 opacity-90">Receba estudos


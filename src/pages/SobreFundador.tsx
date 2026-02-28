import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const SobreFundador = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2 underline decoration-amber-500">
          O Clarim da Verdade
        </h1>
        <p className="text-gray-500 uppercase tracking-widest text-sm">Voz Global da Fé</p>
      </header>

      <section className="prose prose-slate max-w-none">
        <p className="text-lg leading-relaxed">
          Bem-vindo ao <strong>Clarim da Verdade</strong>, um portal dedicado à proclamação do 
          Evangelho Eterno e à preparação de um povo para o breve retorno de nosso Senhor Jesus Cristo.
        </p>

        <h3 className="text-xl font-bold mt-8 border-l-4 border-amber-600 pl-4">Nossa Missão</h3>
        <p>
          Nossa missão é compartilhar a esperança do advento através de conteúdos teológicos profundos, 
          estudos bíblicos acessíveis e reflexões sobre o impacto da fé cristã na sociedade moderna. 
          Acreditamos que a verdade bíblica deve ser vivida em cada aspecto do cotidiano.
        </p>

        <h3 className="text-xl font-bold mt-8 border-l-4 border-amber-600 pl-4">O Fundador</h3>
        <p>
          O projeto é idealizado e gerido por <strong>Elias Licoji Cacoma</strong>. 
          Dedicando talentos na área de tecnologia e comunicação para expandir a mensagem adventista, 
          Elias busca conectar pessoas ao redor do mundo através da verdade que liberta.
        </p>

        <blockquote className="italic border-t border-b border-gray-100 py-6 my-8 text-center text-slate-700">
          "E este evangelho do reino será pregado em todo o mundo, em testemunho a todas as nações, 
          e então virá o fim." <br/> <span className="font-bold text-slate-900">(Mateus 24:14)</span>
        </blockquote>
      </section>
    </div>
  );
};


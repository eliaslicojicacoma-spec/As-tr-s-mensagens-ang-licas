import React from 'react';

export const MissaoVisaoValores = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-10 text-center">Identidade Institucional</h1>
      
      <div className="grid gap-12">
        <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h2 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-2">Nossa Missão</h2>
          <p className="text-xl font-bold text-slate-800 leading-snug">
            Proclamar o Evangelho Eterno e as Três Mensagens Angélicas a cada nação, tribo, língua e povo, preparando-os para o breve retorno de Cristo.
          </p>
        </section>

        <section className="px-4">
          <h2 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-4">Nossa Visão</h2>
          <p className="text-slate-700">
            Ser a principal atalaia digital em língua portuguesa, reconhecida pela fidelidade bíblica e pelo uso de tecnologias modernas para a salvação de almas.
          </p>
        </section>

        <section className="px-4">
          <h2 className="text-amber-600 font-black uppercase tracking-widest text-sm mb-4">Nossos Valores</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
            <li className="flex gap-2"><strong>1. Fidelidade:</strong> Sola Scriptura.</li>
            <li className="flex gap-2"><strong>2. Excelência:</strong> Fazer o melhor para Deus.</li>
            <li className="flex gap-2"><strong>3. Transparência:</strong> Honestidade em cada ação.</li>
            <li className="flex gap-2"><strong>4. Serviço:</strong> Amor ao próximo.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};


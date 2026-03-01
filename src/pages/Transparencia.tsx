import React from 'react';

export const Transparencia = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-8 underline decoration-amber-500">Transparência e Conduta</h1>
      
      <div className="space-y-10 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Integridade Ministerial</h2>
          <p>
            O portal Clarim da Verdade é um projeto independente de apoio à igreja. 
            Seguimos rigorosamente os manuais da Igreja Adventista do Sétimo Dia e o Espírito de Profecia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">Gestão de Recursos</h2>
          <p>
            As doações são geridas pelo fundador Elias Licoji Cacoma e aplicadas exclusivamente em:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Hospedagem de servidores e domínio.</li>
            <li>Tráfego de dados para distribuição de livros gratuitos.</li>
            <li>Manutenção das ferramentas de evangelismo digital.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};


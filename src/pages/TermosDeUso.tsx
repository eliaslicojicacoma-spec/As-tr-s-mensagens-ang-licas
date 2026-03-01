import React from 'react';

export const TermosDeUso = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black mb-8">Termos de Uso</h1>
      <div className="prose prose-slate">
        <p>Ao acessar o portal <strong>As Três Mensagens Angélicas</strong>, você concorda com:</p>
        <h3 className="font-bold mt-6">1. Licença de Conteúdo</h3>
        <p>O conteúdo é para uso pessoal e missionário. A reprodução em massa para fins comerciais é estritamente proibida.</p>
        <h3 className="font-bold mt-6">2. Isenção de Responsabilidade</h3>
        <p>Embora busquemos a máxima precisão, o conteúdo é de natureza teológica e informativa.</p>
        <h3 className="font-bold mt-6">3. Doações</h3>
        <p>Doações feitas via PIX ou PayPal não são reembolsáveis e não conferem direitos de propriedade sobre o portal.</p>
      </div>
    </div>
  );
};


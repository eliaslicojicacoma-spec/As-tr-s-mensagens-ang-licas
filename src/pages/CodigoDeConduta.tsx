import React from 'react';

export const CodigoDeConduta = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 max-w-4xl mx-auto text-slate-800">
      <h1 className="text-3xl font-black mb-8 border-b-4 border-slate-900 pb-2">Código de Conduta</h1>
      <div className="space-y-6">
        <p>Este código rege o comportamento de colaboradores e usuários nas plataformas do Clarim da Verdade:</p>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Respeito Mútuo:</strong> Não toleramos discursos de ódio, ofensas ou desrespeito às autoridades eclesiásticas ou civis.</li>
          <li><strong>Veracidade:</strong> Todo conteúdo deve ser fundamentado na Bíblia e no Espírito de Profecia.</li>
          <li><strong>Não Partidarismo:</strong> O portal não se envolve em políticas partidárias, focando exclusivamente no Reino de Deus.</li>
          <li><strong>Moderação:</strong> Reservamo-nos o direito de remover comentários que firam a ética cristã.</li>
        </ul>
      </div>
    </div>
  );
};


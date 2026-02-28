import React from 'react';

export const PoliticaPrivacidade = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 max-w-4xl mx-auto text-slate-800">
      <h1 className="text-3xl font-black mb-8 border-b-4 border-amber-500 pb-2">
        Políticas de Privacidade e Termos de Uso
      </h1>
      
      <section className="space-y-8 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">1. Introdução</h2>
          <p>
            O portal <strong>As Três Mensagens Angélicas (Clarim da Verdade)</strong>, idealizado por Elias Licoji Cacoma, 
            está comprometido com a proteção de sua privacidade. Esta página descreve como tratamos informações e os termos 
            que regem o uso deste site missionário.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">2. Coleta de Dados e Cookies</h2>
          <p>
            Utilizamos o <strong>Google AdSense</strong> para exibir anúncios. O Google utiliza cookies (como o cookie DART) 
            para exibir anúncios baseados em suas visitas a este e outros sites na internet. Você pode optar por 
            desativar o uso do cookie DART visitando a Política de Privacidade da rede de conteúdo e anúncios do Google.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">3. Uso de Informações de Terceiros</h2>
          <p>
            Este site contém links para sites externos (Novo Tempo, EGW Writings, CPB). Não nos responsabilizamos 
            pelas políticas de privacidade ou conteúdo desses sites. Recomendamos a leitura das políticas de cada um 
            ao acessá-los.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">4. Termos de Uso do Conteúdo</h2>
          <p>
            Todo o conteúdo bíblico e teológico aqui presente tem como objetivo a evangelização. É permitida a 
            partilha de links e citações, desde que mantida a integridade da mensagem e citada a fonte original. 
            É proibido o uso deste material para fins comerciais sem autorização prévia.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3 text-slate-900">5. Doações e Apoio</h2>
          <p>
            As doações realizadas via PIX ou PayPal são voluntárias e destinadas à manutenção técnica e expansão 
            do ministério digital. Não realizamos venda de orações ou milagres; seguimos o princípio bíblico 
            de sustento da obra evangélica.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm italic">
          <p>
            Ao utilizar este site, você concorda com estes termos. Reservamo-nos o direito de atualizar estas 
            políticas a qualquer momento para refletir mudanças tecnológicas ou legais.
          </p>
          <p className="mt-4 font-bold">Última atualização: 1 de Março de 2026.</p>
        </div>
      </section>
    </div>
  );
};


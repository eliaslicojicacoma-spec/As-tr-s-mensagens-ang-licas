import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

export const Apoie = () => {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 3000);
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho de Fé */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
            Sustente esta Obra
          </h1>
          <p className="text-slate-600 italic">
            "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, 
            pois Deus ama quem dá com alegria." (2 Coríntios 9:7)
          </p>
        </div>

        {/* Card de Transparência */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10 text-sm text-amber-900 leading-relaxed">
          <p className="font-bold mb-1 italic">Nota de Transparência:</p>
          As doações recebidas são destinadas à manutenção deste portal, 
          custos de servidores, produção de materiais de estudo bíblico 
          e expansão da mensagem das Três Mensagens Angélicas.
        </div>

        {/* Métodos de Doação */}
        <div className="grid gap-6">
          
          {/* PIX - Brasil */}
          <div className="border-2 border-slate-100 p-6 rounded-2xl bg-white shadow-sm hover:border-teal-500 transition">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Chave PIX
              </span>
              <button 
                onClick={() => copyToClipboard(siteConfig.monetization.pix, 'pix')}
                className="text-teal-600 font-bold text-sm"
              >
                {copied === 'pix' ? '✅ Copiado!' : 'Copiar Chave'}
              </button>
            </div>
            <p className="text-lg font-mono text-slate-800 break-all bg-slate-50 p-3 rounded-lg border border-dashed border-slate-300">
              {siteConfig.monetization.pix}
            </p>
          </div>

          {/* PayPal - Internacional */}
          <div className="border-2 border-slate-100 p-6 rounded-2xl bg-white shadow-sm hover:border-blue-500 transition">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                PayPal
              </span>
              <button 
                onClick={() => copyToClipboard(siteConfig.monetization.paypal, 'pp')}
                className="text-blue-600 font-bold text-sm"
              >
                {copied === 'pp' ? '✅ Copiado!' : 'Copiar E-mail'}
              </button>
            </div>
            <p className="text-lg font-mono text-slate-800 break-all bg-slate-50 p-3 rounded-lg border border-dashed border-slate-300">
              {siteConfig.monetization.paypal}
            </p>
          </div>

        </div>

        {/* Outras Formas (IBAN Angola) */}
        <div className="mt-10 pt-10 border-t border-slate-100 text-center">
          <h3 className="text-slate-800 font-bold mb-4">Dúvidas ou outras formas de apoio?</h3>
          <p className="text-slate-500 text-sm mb-6">
            Se você está em Angola ou prefere fazer uma transferência via IBAN, entre em contacto direto.
          </p>
          <a 
            href="https://wa.me/244922159048" 
            className="inline-block bg-slate-900 text-white font-bold px-8 py-3 rounded-full hover:bg-slate-800 transition shadow-lg"
          >
            Falar com o Fundador
          </a>
        </div>
      </div>
    </div>
  );
};


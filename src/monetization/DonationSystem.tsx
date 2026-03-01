import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const DonationSystem = () => {
  return (
    <div className="bg-white border-2 border-slate-100 rounded-3xl overflow-hidden shadow-xl">
      <div className="bg-slate-900 p-6 text-center text-white">
        <h3 className="text-xl font-bold">Ofertas para o Ministério</h3>
        <p className="text-sm text-slate-400">Sustentando a pregação das Três Mensagens</p>
      </div>
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <span className="font-bold text-slate-700">PIX (Brasil)</span>
          <span className="text-sm font-mono bg-slate-100 p-1 rounded">{siteConfig.monetization.pix}</span>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <span className="font-bold text-slate-700">PayPal (Global)</span>
          <span className="text-sm font-mono bg-slate-100 p-1 rounded">{siteConfig.monetization.paypal}</span>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl">
          <span className="block font-bold text-amber-800 text-xs uppercase mb-2">IBAN (Angola / Banco Bradesco)</span>
          <p className="text-sm font-mono text-slate-700">AO06 0000 0000 0000 0000 0000 0</p>
          <p className="text-[10px] text-amber-700 mt-1">* Insira o seu IBAN real aqui no arquivo.</p>
        </div>
      </div>
    </div>
  );
};


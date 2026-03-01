import React from 'react';

export const AmazonAffiliate = ({ productLink, title }: { productLink: string, title: string }) => {
  return (
    <div className="bg-white border border-slate-200 p-4 rounded-2xl flex items-center gap-4 hover:border-amber-500 transition">
      <div className="bg-slate-100 h-16 w-16 rounded-lg flex items-center justify-center text-2xl">📚</div>
      <div className="flex-grow">
        <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        <p className="text-[10px] text-slate-500 italic">Recomendado pelo Clarim da Verdade</p>
      </div>
      <a href={productLink} target="_blank" className="bg-amber-500 text-white text-xs font-black px-4 py-2 rounded-lg">
        VER NA AMAZON
      </a>
    </div>
  );
};


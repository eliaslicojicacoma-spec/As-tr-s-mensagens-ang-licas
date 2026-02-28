import React from 'react';

interface ArticleProps {
  article: {
    titulo: string;
    resumo: string;
    data: string;
    categoria: string;
    slug: string;
  }
}

export const BlogCard = ({ article }: ArticleProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition">
      <div className="p-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-1 rounded">
          {article.categoria}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2 leading-tight">
          {article.titulo}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4">
          {article.resumo}
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
          <span className="text-xs text-slate-400 font-medium">{article.data}</span>
          <a href={`/artigo/${article.slug}`} className="text-sm font-bold text-slate-900 hover:text-amber-600">
            Ler Mais →
          </a>
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { BlogCard } from '../components/blog/BlogCard';
import artigosData from '../data/artigos.json';

export const Blog = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Artigos e Reflexões</h1>
          <p className="text-slate-600">Análises bíblicas sobre fé, profecia e o impacto cristão na sociedade.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artigosData.map((artigo) => (
            <BlogCard key={artigo.id} article={artigo} />
          ))}
        </div>
      </div>
    </div>
  );
};


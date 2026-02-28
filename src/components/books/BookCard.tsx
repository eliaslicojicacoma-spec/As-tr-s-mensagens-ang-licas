import React from 'react';

interface BookProps {
  book: {
    titulo: string;
    autor: string;
    capa: string;
    descricao: string;
    link: string;
  }
}

export const BookCard = ({ book }: BookProps) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
      <img 
        src={book.capa} 
        alt={book.titulo} 
        className="w-32 h-48 object-cover rounded shadow-md mb-4 bg-slate-200"
        onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x220?text=Livro'; }}
      />
      <h4 className="font-bold text-slate-900 leading-tight mb-1">{book.titulo}</h4>
      <p className="text-[10px] text-slate-400 uppercase font-bold mb-2">{book.autor}</p>
      <p className="text-xs text-slate-500 line-clamp-2 mb-4">{book.descricao}</p>
      <a 
        href={book.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-auto w-full bg-slate-100 text-slate-900 text-xs font-black py-2 rounded hover:bg-amber-500 hover:text-white transition"
      >
        LER AGORA
      </a>
    </div>
  );
};


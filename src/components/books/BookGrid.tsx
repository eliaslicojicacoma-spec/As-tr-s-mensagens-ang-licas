import React from 'react';
import { BookCard } from './BookCard';
import livrosData from '../../data/livros.json';

export const BookGrid = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8 px-4">
        <h2 className="text-2xl font-black text-slate-900 border-l-4 border-amber-500 pl-4 uppercase">
          Biblioteca Digital
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {livrosData.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};


import React from 'react';

export const Breadcrumb = ({ items }: { items: { label: string, link?: string }[] }) => {
  return (
    <nav className="flex text-xs text-slate-400 mb-6 uppercase tracking-widest font-bold overflow-x-auto whitespace-nowrap">
      <ol className="flex items-center gap-2">
        <li><a href="/" className="hover:text-amber-600">Início</a></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span>/</span>
            {item.link ? (
              <a href={item.link} className="hover:text-amber-600">{item.label}</a>
            ) : (
              <span className="text-slate-600">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};


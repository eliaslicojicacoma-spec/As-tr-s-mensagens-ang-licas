import React, { useState } from 'react';

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative max-w-2xl mx-auto my-8 px-4">
      <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input 
        type="search" 
        placeholder="O que você deseja estudar hoje?" 
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-50 transition text-slate-700 font-medium"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-4 z-50">
          <p className="text-xs text-slate-400 mb-2">Resultados para: <span className="font-bold text-slate-900">{query}</span></p>
          <div className="text-sm text-slate-600">Pressione Enter para pesquisar em todo o portal...</div>
        </div>
      )}
    </div>
  );
};


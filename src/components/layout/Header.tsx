import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-black text-lg tracking-tighter leading-none">CLARIM DA VERDADE</span>
          <span className="text-[10px] text-amber-500 font-bold tracking-[0.2em]">AS TRÊS MENSAGENS</span>
        </div>

        {/* Menu Telemóvel */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Links (Escondidos no telemóvel se o menu estiver fechado) */}
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent p-6 md:p-0 gap-6 border-t border-slate-800 md:border-none`}>
          <a href="/" className="hover:text-amber-500 font-medium">Início</a>
          <a href="/estudos" className="hover:text-amber-500 font-medium">Estudos</a>
          <a href="/sobre" className="hover:text-amber-500 font-medium">O Fundador</a>
          <a href="/apoie" className="bg-amber-600 px-4 py-2 rounded-lg font-bold hover:bg-amber-500 transition text-center">Apoiar</a>
        </nav>
      </div>
    </header>
  );
};


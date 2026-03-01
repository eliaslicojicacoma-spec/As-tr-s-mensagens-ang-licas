import React from 'react';

export const MobileMenu = ({ isOpen, onClose, onNavigate }: any) => {
  if (!isOpen) return null;

  const links = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'estudos', label: 'Estudos Bíblicos', icon: '📖' },
    { id: 'sobre', label: 'O Fundador', icon: '👤' },
    { id: 'apoie', label: 'Apoiar Obra', icon: '🤝' },
  ];

  return (
    <div className="fixed inset-0 z-[60] bg-slate-900/95 backdrop-blur-sm p-8 flex flex-col">
      <button onClick={onClose} className="self-end text-white text-3xl mb-10">✕</button>
      
      <nav className="flex flex-col gap-6">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => { onNavigate(link.id); onClose(); }}
            className="flex items-center gap-4 text-white text-2xl font-bold border-b border-slate-800 pb-4 text-left"
          >
            <span className="text-amber-500">{link.icon}</span>
            {link.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto text-center text-slate-500 text-xs">
        Clarim da Verdade - Angola
      </div>
    </div>
  );
};


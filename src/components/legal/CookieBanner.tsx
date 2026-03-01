import React, { useState, useEffect } from 'react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setIsVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 z-[100] flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800">
      <p className="text-xs text-slate-300 text-center md:text-left">
        Este portal utiliza cookies para melhorar sua experiência, em conformidade com nossa Política de Privacidade.
      </p>
      <button 
        onClick={accept}
        className="bg-amber-500 text-slate-900 px-6 py-2 rounded-lg font-bold text-xs uppercase hover:bg-amber-400 transition whitespace-nowrap"
      >
        Aceitar e Continuar
      </button>
    </div>
  );
};


import React, { useState, useEffect } from 'react';

export const OfflineAlert = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleStatus = () => setIsOffline(!navigator.onLine);
    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);
    return () => {
      window.removeEventListener('online', handleStatus);
      window.removeEventListener('offline', handleStatus);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="bg-amber-600 text-white text-[10px] font-black py-1 px-4 text-center uppercase tracking-tighter sticky top-0 z-[100] animate-pulse">
      Modo de Leitura Offline Ativo — A navegar sem internet
    </div>
  );
};


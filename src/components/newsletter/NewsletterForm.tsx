import React, { useState } from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obreiro, o e-mail ${email} foi registrado para os estudos!`);
    setEmail('');
  };

  return (
    <div className="bg-amber-600 p-8 rounded-3xl text-white my-12 shadow-xl">
      <div className="md:flex items-center justify-between gap-8">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-black mb-2">Estudos Bíblicos por E-mail</h3>
          <p className="opacity-90">Inscreva-se para receber séries sobre Daniel e Apocalipse.</p>
        </div>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:max-w-md">
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="flex-grow p-4 rounded-xl text-slate-900 outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="bg-slate-900 hover:bg-slate-800 px-8 py-4 rounded-xl font-bold transition">
            INSCREVER
          </button>
        </form>
      </div>
    </div>
  );
};


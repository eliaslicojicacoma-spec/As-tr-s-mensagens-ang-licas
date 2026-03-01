import React from 'react';

export const Contacto = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 mb-4 uppercase">Contacto Direto</h1>
      <p className="text-slate-500 mb-10 font-medium">Use este canal para convites, parcerias ou pedidos específicos de oração.</p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Seu Nome" className="p-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:border-amber-500" />
          <input type="email" placeholder="Seu E-mail" className="p-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:border-amber-500" />
        </div>
        <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:border-amber-500">
          <option>Assunto: Pedido de Oração</option>
          <option>Assunto: Dúvida Bíblica</option>
          <option>Assunto: Convite para Palestra</option>
          <option>Assunto: Outro</option>
        </select>
        <textarea placeholder="Sua Mensagem" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 outline-none focus:border-amber-500 h-40"></textarea>
        <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-slate-800 transition">ENVIAR MENSAGEM</button>
      </form>
    </div>
  );
};


import React, { useState } from 'react';

export const CommentSection = () => {
  const [comentario, setComentario] = useState('');

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 my-10">
      <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
        <span className="text-amber-500">💬</span> Espaço de Diálogo
      </h3>
      
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <textarea 
          placeholder="Deixe sua dúvida ou testemunho sobre este estudo..." 
          className="w-full p-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-amber-500 outline-none transition h-32 text-slate-700"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <p className="text-[10px] text-slate-400 max-w-[200px]">Seu comentário passará por moderação antes de ser publicado.</p>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold active:scale-95 transition">
            Enviar Comentário
          </button>
        </div>
      </form>
    </div>
  );
};


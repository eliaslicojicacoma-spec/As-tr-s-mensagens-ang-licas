import React from 'react';

const midias = [
  { id: 1, tipo: 'imagem', titulo: "A Volta de Jesus - IA", url: "/images/ia/volta-jesus.jpg" },
  { id: 2, tipo: 'video', titulo: "As Três Mensagens em 60s", url: "https://youtube.com/..." },
  { id: 3, tipo: 'imagem', titulo: "O Santuário Celestial", url: "/images/ia/santuario.jpg" }
];

export const MediaLibrary = () => {
  return (
    <div className="py-12 px-4 bg-white rounded-[3rem] my-10 border border-slate-100 shadow-sm">
      <h2 className="text-2xl font-black text-slate-900 mb-8 px-4 flex items-center gap-2">
        <span className="text-amber-500">🎬</span> Galeria Inspiracional
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {midias.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-video">
            <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold italic">
              {item.tipo === 'video' ? '▶ VÍDEO' : '🖼️ IMAGEM'}
            </div>
            {/* O conteúdo real aparecerá aqui após o upload das imagens */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 text-white">
              <span className="text-xs font-bold uppercase tracking-tighter">{item.titulo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


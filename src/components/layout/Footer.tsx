import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-800 pb-10">
          
          {/* Coluna 1: Missão */}
          <div>
            <h3 className="text-amber-500 font-bold text-lg mb-4 uppercase tracking-widest">
              Clarim da Verdade
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Proclamando o Evangelho Eterno de Mateus 24:14 direto da Huíla, Angola, para o mundo. 
              Preparando um povo para o breve retorno de Cristo.
            </p>
          </div>

          {/* Coluna 2: Redes Sociais Rápidas */}
          <div>
            <h3 className="text-white font-bold mb-4">Conecte-se Conosco</h3>
            <div className="flex flex-wrap gap-3">
              <a href={siteConfig.social.youtube} target="_blank" className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition">
                📺 <span className="sr-only">YouTube</span>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-3 rounded-full">
                📸 <span className="sr-only">Instagram</span>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" className="bg-blue-600 p-3 rounded-full">
                👥 <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div>
            <h3 className="text-white font-bold mb-4">Fale com o Obreiro</h3>
            <a 
              href="https://wa.me/244922159048" 
              target="_blank" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition w-full justify-center"
            >
              <span>💬 WhatsApp Direto</span>
            </a>
            <p className="text-slate-500 text-xs mt-3 text-center">
              Dúvidas, pedidos de oração ou estudos bíblicos.
            </p>
          </div>
        </div>

        {/* Direitos e Legal */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>© {currentYear} As Três Mensagens Angélicas. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center gap-4 text-xs">
            <a href="/privacidade" className="hover:text-amber-500">Privacidade</a>
            <span>•</span>
            <a href="/termos" className="hover:text-amber-500">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


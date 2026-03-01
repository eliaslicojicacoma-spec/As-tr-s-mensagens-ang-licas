import React, { useState } from 'react';
import { siteConfig } from './config/siteConfig';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/legal/CookieBanner';
import { SobreFundador } from './pages/SobreFundador';
import { EstudosProfeticos } from './pages/EstudosProfeticos';
import { Apoie } from './pages/Apoie';
import { PoliticaPrivacidade } from './pages/PoliticaPrivacidade';
import { VersiculoDoDia } from './components/ui/VersiculoDoDia';

export default function App() {
  // Estado para navegar entre as páginas de forma simples sem erro de rota
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'sobre': return <SobreFundador />;
      case 'estudos': return <EstudosProfeticos />;
      case 'apoie': return <Apoie />;
      case 'privacidade': return <PoliticaPrivacidade />;
      default: return (
        <div className="max-w-4xl mx-auto px-4 py-10">
          <VersiculoDoDia />
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center my-8">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Bem-vindo ao Clarim da Verdade</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Um portal dedicado à proclamação das Três Mensagens Angélicas e ao preparo do povo de Deus.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button onClick={() => setCurrentPage('estudos')} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition">Estudos Bíblicos</button>
              <button onClick={() => setCurrentPage('sobre')} className="bg-amber-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition">Nossa Missão</button>
            </div>
          </section>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-slate-900 font-sans">
      {/* Passamos a função de mudar página para o Header */}
      <Header onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      <CookieBanner />

      {/* Botão Flutuante de WhatsApp Atualizado */}
      <a 
        href={siteConfig.contact.waLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-40 active:scale-90 transition"
      >
        💬
      </a>
    </div>
  );
}


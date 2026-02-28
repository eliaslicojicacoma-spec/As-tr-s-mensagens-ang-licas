import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const DonationBox = () => {
  return (
    <div className="bg-slate-50 border-2 border-amber-100 p-6 rounded-2xl my-8">
      <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center underline decoration-amber-500">
        Apoie este Ministério
      </h3>
      <p className="text-gray-600 text-center mb-6">
        Sua oferta ajuda a manter o Clarim da Verdade no ar e a alcançar mais almas.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* PIX */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <span className="font-bold text-teal-600">PIX</span>
          <p className="text-sm break-all font-mono mt-1">{siteConfig.monetization.pix}</p>
        </div>
        
        {/* PayPal */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <span className="font-bold text-blue-600">PayPal</span>
          <p className="text-sm break-all font-mono mt-1">{siteConfig.monetization.paypal}</p>
        </div>
      </div>
    </div>
  );
};


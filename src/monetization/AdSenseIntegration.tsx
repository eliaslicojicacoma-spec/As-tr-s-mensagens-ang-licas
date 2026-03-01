import React, { useEffect } from 'react';

export const AdSenseIntegration = ({ slot }: { slot: string }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className="my-8 flex justify-center bg-slate-50 p-2 rounded-lg border border-dashed border-slate-200">
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-0000000000000000" // Substituir pelo seu ID depois
           data-ad-slot={slot}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};


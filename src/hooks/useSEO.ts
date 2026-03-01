import { useEffect } from 'react';

export const useSEO = (title: string, description?: string) => {
  useEffect(() => {
    document.title = `${title} | Clarim da Verdade`;
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
};


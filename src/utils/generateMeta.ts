export const generateMeta = (title: string, description: string, image?: string) => {
  return {
    title: `${title} | Clarim da Verdade`,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image || '/images/og/og-default.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
};


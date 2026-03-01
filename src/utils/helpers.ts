// Formata data para o padrão: 01 de Março de 2026
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

// Cria o link amigável (Slug) para os artigos
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Substitui espaços por -
    .replace(/[^\w-]+/g, '')  // Remove caracteres especiais
    .replace(/--+/g, '-');    // Remove hífens duplos
};


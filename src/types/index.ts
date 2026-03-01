export interface Book {
  id: string;
  titulo: string;
  autor: string;
  capa: string;
  descricao: string;
  link: string;
  categoria: string;
}

export interface Article {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  data: string;
  categoria: string;
  autor: string;
  imagem: string;
}

export interface SiteMessage {
  id: string;
  texto: string;
  referencia: string;
  contexto: string;
}


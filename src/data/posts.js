/* Imagens do Unsplash (cinema/terror) — uso com opacidade baixa no layout */
const IMG = {
  cinema: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
  film: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800',
  screen: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800',
  dark: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed3843f?w=800',
  popcorn: 'https://images.unsplash.com/photo-1574267432644-f610f1a6eb4d?w=800',
};

export const posts = [
  {
    id: '1',
    slug: 'por-que-assistimos-terror-se-temos-medo',
    title: 'Por que assistimos terror se temos medo?',
    excerpt: 'A ciência (e a experiência de quem dorme com a luz acesa) explicam o paradoxo de quem ama um bom susto.',
    category: 'Reflexão',
    date: '2025-03-14',
    readTime: '5 min',
    image: IMG.cinema,
    featured: true,
  },
  {
    id: '2',
    slug: 'filmes-de-terror-para-iniciantes',
    title: '5 filmes de terror para quem está começando (e tem medo)',
    excerpt: 'Sustos na medida certa: títulos que entregam atmosfera sem te fazer dormir de luz acesa por uma semana.',
    category: 'Listas',
    date: '2025-03-10',
    readTime: '8 min',
    image: IMG.screen,
    featured: true,
  },
  {
    id: '3',
    slug: 'rituais-para-assistir-terror-sozinho',
    title: 'Rituais para assistir terror sozinho sem virar estatística',
    excerpt: 'Luz acesa? Coberta? Horário certo? O guia definitivo de quem não quer passar vergonha no cinema.',
    category: 'Dicas',
    date: '2025-03-05',
    readTime: '6 min',
    image: IMG.popcorn,
    featured: false,
  },
  {
    id: '4',
    slug: 'hereditary-por-que-choramos-e-gritamos',
    title: 'Hereditary: por que choramos e gritamos ao mesmo tempo',
    excerpt: 'Um filme que machuca o coração e os nervos. Para quem aguentou até o fim: parabéns.',
    category: 'Resenhas',
    date: '2025-02-28',
    readTime: '7 min',
    image: IMG.dark,
    featured: false,
  },
  {
    id: '5',
    slug: 'terror-psychological-vs-gore',
    title: 'Terror psicológico vs. gore: qual lado você está?',
    excerpt: 'Não é vergonha preferir a tensão à carnificina. Aqui, os dois lados são válidos (e assustadores).',
    category: 'Reflexão',
    date: '2025-02-20',
    readTime: '5 min',
    image: IMG.film,
    featured: false,
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedPosts() {
  return posts.filter((p) => p.featured);
}

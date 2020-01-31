export const initialProducts = [
  {
    id: 1,
    image: [
      'https://drive.google.com/uc?id=1KCNmEzKv1kz17mdiazMlysLZ7_pCZDvy',
      'https://drive.google.com/uc?id=1UO4pFBwTeZwsPmB36oAT35fQKhf_o6hR',
      'https://drive.google.com/uc?id=1Lr-9DM0xD7m6xL5DTo7PilYfjUA5EluJ',
    ],
    name: 'Coca-Cola 2L',
    brand: 'Coca-Cola',
    description:
      'Coca-Cola é um refrigerante carbonado vendido em lojas, restaurantes, mercados e máquinas de venda automática em todo o mundo. Ele é produzido pela The Coca-Cola Company, sediada em Atlanta, Estados Unidos, e é muitas vezes referido apenas como Coca-Cola.',
    categoryId: 1,
    price: 6.99,
    discount: 10,
    stars: 5,
    ratings: [
      {name: 'José Ferreira', comment: 'Produto excelente', rate: 5},
      {name: 'Alberto Rodrigues', comment: 'Gostei muito', rate: 5},
    ],
  },
  {
    id: 2,
    image: ['https://drive.google.com/uc?id=1ocnbfccPiuqhqtpDIBNkFX-zOpqDKaeJ'],
    name: 'Dolly Guaraná 2L',
    brand: 'Dolly',
    description:
      'Dolly é uma empresa brasileira e uma marca popular de bebidas. Foi originalmente fundada em 1987 pelo empresário Laerte Codonho, tendo sua principal sede na cidade de Diadema, localizada em São Paulo.',
    categoryId: 1,
    price: 4.99,
    discount: 5,
    stars: 4,
    ratings: [],
  },
  {
    id: 3,
    image: ['https://drive.google.com/uc?id=1br2eNAYE9pL5aRR6cEvERLNifKa9ZQJl'],
    name: 'Max Cola 2L',
    brand: 'Max',
    description:
      'Com sabores inovadores e formulação exclusiva, a MAX WILHELM leva muito mais alegria às festas, as refeições com a família e a todos os momentos que precisar matar a sede.',
    categoryId: 1,
    price: 3.99,
    discount: 15,
    stars: 5,
    ratings: [],
  },
  {
    id: 4,
    image: ['https://drive.google.com/uc?id=18NX4XaqxcGsKaTytXAs7JQxvngMCQxnD'],
    name: 'Piraquê Chocolate',
    brand: 'Piraquê',
    description:
      'Farinha de trigo rica com ferro e ácido fólico, açúcar, gordura vegetal interesterificada, cacau em pó, leite em pó, açúcar invertido, malte, maltodextrina, amido de milho, sal, fermentos químicos: bicarbonato de sódio e fosfato monocálcico, emulsificantes: estearoil-2-lactil lactato de cálcio e lecitina de soja, acidulante: ácido cítrico e aromatizantes.',
    categoryId: 2,
    price: 4.99,
    discount: 10,
    ratings: [],
    stars: 5,
  },
  {
    id: 5,
    image: ['https://drive.google.com/uc?id=1VK8itJEVnvdORWykR12bNnrWjgPyJf57'],
    name: 'Omo Multiacao',
    brand: 'Omo',
    description:
      'Omo Multiação Remove as manchas mais difíceis* de primeira. Com o detergente em pó Omo Multiação você tem roupas limpas sem precisar esfregar.',
    categoryId: 3,
    price: 11.9,
    discount: 20,
    stars: 5,
    ratings: [],
  },
];

export const initialCategories = [
  {
    id: 1,
    name: 'Refrigerantes',
  },
  {
    id: 2,
    name: 'Biscoitos',
  },
  {
    id: 3,
    name: 'Limpeza',
  },
];

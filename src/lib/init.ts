import { ColumnType } from '@/shared/types';

export const initialColumns: ColumnType[] = [
  {
    id: 'column-1',
    title: 'Необработанные',
    items: [
      {
        id: '1',
        imageUrl:
          'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
        productId: '101',
        title: 'Продукт №1',
        description: 'Описание продукта №1',
        category: 'beauty',
        price: 9.99,
        rating: 4.94,
        points: 200,
      },
      {
        id: '2',
        imageUrl:
          'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png',
        productId: '102',
        title: 'Продукт №2',
        description: 'Описание продукта №2',
        category: 'beauty',
        price: 19.99,
        rating: 3.28,
        points: 150,
      },
      {
        id: '3',
        imageUrl:
          'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png',
        productId: '103',
        title: 'Продукт №3',
        description: 'Описание продукта №3',
        category: 'beauty',
        price: 14.99,
        rating: 3.82,
        points: 100,
      },
    ],
  },
  {
    id: 'column-2',
    title: 'В работе',
    items: [
      {
        id: '4',
        imageUrl:
          'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png',
        productId: '104',
        title: 'Продукт №4',
        description: 'Описание продукта №4',
        category: 'beauty',
        price: 12.99,
        rating: 2.51,
        points: 250,
      },
    ],
  },
  {
    id: 'column-3',
    title: 'Завершенные',
    items: [
      {
        id: '5',
        imageUrl:
          'https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png',
        productId: '105',
        title: 'Продукт №5',
        description: 'Описание продукта №5',
        category: 'fragrances',
        price: 49.99,
        rating: 4.85,
        points: 300,
      },
    ],
  },
];

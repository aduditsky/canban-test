export interface ThemeType {
  colors: {
    primary: string;
    background: string;
    text: string;
    cardBackground: string;
  };
}

export interface ItemType {
  id?: string;
  imageUrl: string;
  productId: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  points: number;
}

export interface ColumnType {
  id: string;
  title: string;
  items: ItemType[];
}

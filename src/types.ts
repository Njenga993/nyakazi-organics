// src/types.ts

export interface Product {
  id: number;
  name: string;
  localName: string;
  image: string;
  price50: number;
  price100: number;
  description: string;
  healthBenefits: string[];
  nutritionalInfo: Record<string, string>;
  origin: string;
  inStock: number;
  rating: number;
  reviews: number;
}

export interface CartItem {
  id: number;
  name: string;
  localName: string;
  image: string;
  price: number;
  quantity: number;
  selectedWeight: '50g' | '100g';
}

export interface CartContextType {
  cartItems: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number, selectedWeight: string) => void;
  updateQuantity: (id: number, selectedWeight: string, quantity: number) => void;
  clearCart: () => void;
}

export interface NutritionalHighlight {
  nutrient: string;
  value: string;
  percentage?: number;
}

export interface HealthBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface Review {
  id: number;
  productId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface ProductFilter {
  category?: string;
  priceRange?: [number, number];
  inStock?: boolean;
  rating?: number;
  origin?: string;
}

export interface WishlistItem {
  id: number;
  name: string;
  localName: string;
  image: string;
  price50: number;
  price100: number;
  dateAdded: string;
}
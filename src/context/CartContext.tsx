'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, selectedWeight: string) => void;
  updateQuantity: (id: number, selectedWeight: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.selectedWeight === item.selectedWeight);
      if (existing) {
        return prev.map(i =>
          i.id === item.id && i.selectedWeight === item.selectedWeight
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number, selectedWeight: string) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.selectedWeight === selectedWeight)));
  };

  const updateQuantity = (id: number, selectedWeight: string, quantity: number) => {
    setCartItems(prev => prev.map(i =>
      i.id === id && i.selectedWeight === selectedWeight ? { ...i, quantity } : i
    ));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

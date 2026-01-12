'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '@/types';

// Bundle type for cart items
interface BundleItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  products: string[];
  savings: number;
}

interface CartContextType {
  cartItems: CartItem[];
  bundleItems: BundleItem[];
  addToCart: (item: CartItem) => void;
  addBundleToCart: (bundle: BundleItem) => void;
  removeFromCart: (id: number, selectedWeight: string) => void;
  removeBundleFromCart: (id: string) => void;
  updateQuantity: (id: number, selectedWeight: string, quantity: number) => void;
  updateBundleQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [bundleItems, setBundleItems] = useState<BundleItem[]>([]);

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

  const addBundleToCart = (bundle: BundleItem) => {
    setBundleItems(prev => {
      const existing = prev.find(b => b.id === bundle.id);
      if (existing) {
        return prev.map(b =>
          b.id === bundle.id ? { ...b, quantity: b.quantity + bundle.quantity } : b
        );
      }
      return [...prev, bundle];
    });
  };

  const removeFromCart = (id: number, selectedWeight: string) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.selectedWeight === selectedWeight)));
  };

  const removeBundleFromCart = (id: string) => {
    setBundleItems(prev => prev.filter(b => b.id !== id));
  };

  const updateQuantity = (id: number, selectedWeight: string, quantity: number) => {
    setCartItems(prev => prev.map(i =>
      i.id === id && i.selectedWeight === selectedWeight ? { ...i, quantity } : i
    ));
  };

  const updateBundleQuantity = (id: string, quantity: number) => {
    setBundleItems(prev => prev.map(b => b.id === id ? { ...b, quantity } : b));
  };

  const clearCart = () => {
    setCartItems([]);
    setBundleItems([]);
  };

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0) + 
                   bundleItems.reduce((sum, b) => sum + b.quantity, 0);

  const totalPrice = cartItems.reduce((sum, i) => sum + (i.price * i.quantity), 0) + 
                    bundleItems.reduce((sum, b) => sum + (b.price * b.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      bundleItems,
      addToCart, 
      addBundleToCart,
      removeFromCart, 
      removeBundleFromCart,
      updateQuantity, 
      updateBundleQuantity,
      clearCart, 
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
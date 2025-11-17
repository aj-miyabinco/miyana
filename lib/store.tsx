'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Product } from '../types/catalog';

type CartItem = { product: Product; quantity: number };

type CartContextType = {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (slug: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'miyana-cart-state';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const persisted = localStorage.getItem(STORAGE_KEY);
    if (persisted) {
      const parsed = JSON.parse(persisted) as { cart: CartItem[]; wishlist: Product[] };
      setCart(parsed.cart || []);
      setWishlist(parsed.wishlist || []);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, wishlist }));
  }, [cart, wishlist]);

  const value = useMemo(() => {
    const addToCart = (product: Product, quantity = 1) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.product.slug === product.slug);
        if (existing) {
          return prev.map((item) =>
            item.product.slug === product.slug ? { ...item, quantity: item.quantity + quantity } : item
          );
        }
        return [...prev, { product, quantity }];
      });
    };

    const removeFromCart = (slug: string) => setCart((prev) => prev.filter((item) => item.product.slug !== slug));

    const addToWishlist = (product: Product) => {
      setWishlist((prev) => {
        if (prev.some((item) => item.slug === product.slug)) return prev;
        return [...prev, product];
      });
    };

    const removeFromWishlist = (slug: string) => setWishlist((prev) => prev.filter((item) => item.slug !== slug));

    const clear = () => {
      setCart([]);
      setWishlist([]);
    };

    return { cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist, clear };
  }, [cart, wishlist]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

import type { CartItem, Product, WeightOption } from "@/types";
import type React from "react";
import { createContext, useCallback, useContext, useReducer } from "react";

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD"; product: Product; weight: WeightOption; quantity: number }
  | { type: "REMOVE"; productId: string; weight: string }
  | { type: "UPDATE"; productId: string; weight: string; quantity: number }
  | { type: "CLEAR" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.findIndex(
        (i) =>
          i.product.id === action.product.id &&
          i.selectedWeight.weight === action.weight.weight,
      );
      if (existing >= 0) {
        const items = [...state.items];
        items[existing] = {
          ...items[existing],
          quantity: items[existing].quantity + action.quantity,
        };
        return { items };
      }
      return {
        items: [
          ...state.items,
          {
            product: action.product,
            quantity: action.quantity,
            selectedWeight: action.weight,
          },
        ],
      };
    }
    case "REMOVE":
      return {
        items: state.items.filter(
          (i) =>
            !(
              i.product.id === action.productId &&
              i.selectedWeight.weight === action.weight
            ),
        ),
      };
    case "UPDATE": {
      if (action.quantity <= 0) {
        return {
          items: state.items.filter(
            (i) =>
              !(
                i.product.id === action.productId &&
                i.selectedWeight.weight === action.weight
              ),
          ),
        };
      }
      return {
        items: state.items.map((i) =>
          i.product.id === action.productId &&
          i.selectedWeight.weight === action.weight
            ? { ...i, quantity: action.quantity }
            : i,
        ),
      };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextValue {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (
    product: Product,
    weight: WeightOption,
    quantity?: number,
  ) => void;
  removeFromCart: (productId: string, weight: string) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = useCallback(
    (product: Product, weight: WeightOption, quantity = 1) => {
      dispatch({ type: "ADD", product, weight, quantity });
    },
    [],
  );

  const removeFromCart = useCallback((productId: string, weight: string) => {
    dispatch({ type: "REMOVE", productId, weight });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, weight: string, quantity: number) => {
      dispatch({ type: "UPDATE", productId, weight, quantity });
    },
    [],
  );

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = state.items.reduce(
    (sum, i) => sum + i.selectedWeight.price * i.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

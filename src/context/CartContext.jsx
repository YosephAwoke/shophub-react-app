import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {

    const existingItem = prevCart.find((item) => item.id === product);
    if (existingItem) {
      const currentQuantity = existingItem.quantity;
      const updatedCartItems = prevCart.map((item) =>
        item.id === product
          ? { id: product, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems( [...prevCart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

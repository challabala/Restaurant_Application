import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Retrieving cart from local storage on initial load
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Saving cart to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((i) => i._id === item._id);
      if (existingItemIndex !== -1) {
        // Updating quantity
        toast.info(`${item.itemname}  already in your cart`)
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      // Adding new item
      //alert(`${item.itemname} added to cart`);
      toast.success(`${item.itemname} added to cart`);
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id, item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem._id !== id)
    );
    toast.warning(`${item.itemname} removed from cart`);
  };
  

  const changeQuantity = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + amount } : item
      ).filter(item => item.quantity > 0); 
      return updatedCart;
    });
  };

  return (
  <div>
     <ToastContainer  position="top-center" autoClose={2000} />
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>
      {children}
    </CartContext.Provider>
  </div>
   
  );
};

export const useCart = () => useContext(CartContext);

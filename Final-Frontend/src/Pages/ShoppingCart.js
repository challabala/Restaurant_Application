import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import "../Css/shoppingcart.css";
import Navbar from "../Components/Navbar";

const ShoppingCart = () => {
  const { cart, removeFromCart, changeQuantity } = useCart();

  const handleQuantityChange = (id, amount) => {
    const item = cart.find(item => item._id === id);
    if (item) {
      if (amount > 0 || item.quantity > 1) {
        changeQuantity(id, amount);
      }
    }
  };

  // Calculate subtotal for all items in the cart
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className='container'>
        {cart.length === 0 ? (
          <div className="cart-container">
            <img 
              src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg" 
              alt="Empty Cart" 
            />
            <h2>Your Cart is <span>Empty!</span></h2>
            <p>If You are Hungry then EAT😉</p>
            <Link to="/fooddetails" className="btn-cart">Order Now</Link>
          </div>
        ) : (
          <>
            <h4>Total Bill</h4>
            {cart.map((item) => (
              <div key={item._id} className='box5'>
                <div className='cartimage-container'>
                  <img className='cart-image' src={item.image} alt={item.itemname} />
                </div>
                <div className='item-details'>
                  <div className='item-name1'>{item.itemname}</div>
                  <div className='item-controls'>
                    <button className="cart-buttons" onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                    <span className='cart-quantity'>{item.quantity}</span>
                    <button className="cart-buttons" onClick={() => handleQuantityChange(item._id, 1)}>+</button>
                  </div>
                  <div className='item-price'>₹{item.price * item.quantity}</div>
                  <button className='cart-buttons remove-button' onClick={() => removeFromCart(item._id,item)}>Remove</button>
                </div>
              </div>
            ))}
            <h5 className='sub-total mt-3'>Sub Total: ₹{subtotal}</h5>
            <Link 
              to="/payment"
              state={{ subtotal }} // Pass subtotal as state
            >
              <button className='sub-total-btn'>Place Order</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;

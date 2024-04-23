import React, { useState } from 'react';
import CartItem from './CartItem';
import data from '../data/data.json';

const Cart = ({cart, setCart}) => {
  const [cartItems, setCartItems] = useState(data);

  const handleDeleteItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleOpenModal = () => {
    setCart(true);
  };

  const handleCloseModal = () => {
    setCart(false);
  };

  return (<>
      <div className="cart">
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} onDelete={handleDeleteItem} />
      ))}
      <div className='close_cart'onClick={handleCloseModal}>X</div>
    </div>
  </>

  );
};

export default Cart;

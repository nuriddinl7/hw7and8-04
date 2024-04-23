import React from 'react';

const CartItem = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className='Cardcard'>
      <img width={200} src={item.image} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div>
        <b>{item.price}</b>
        <span>{item.additionalInfo}</span>
      </div>
      <button type="button" onClick={handleDelete}>delete to cart</button>
    </div>
  );
};

export default CartItem;

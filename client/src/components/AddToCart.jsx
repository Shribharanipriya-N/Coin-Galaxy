import React, { useState } from 'react';
import '../index.css';

const AddToCart = ({ coindata, id }) => {
  const [quantity, setQuantity] = useState(1);

 
  const selectedItem = coindata.find(item => item.id === parseInt(id));

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value)); 
  };

  const parseAmount = (amountString) => {
    return parseInt(amountString.replace(/\D/g, ''));
  };

  const totalAmount = selectedItem ? parseAmount(selectedItem.amount) * quantity : 0;

  return (
    <>
      <h1 style={{padding:'20px',textAlign:'center'}}>Cart Items</h1>
      <div className="cartdiv">
        <div className='cartcard'>
          {selectedItem && (
            <>
              <img className="cart-img" src={selectedItem.image} alt={selectedItem.title} />
              <div className='cartitems'>
                <div className='left-cart'>
                  <h2><b>{selectedItem.title}</b></h2>
                  <p><b>Amount:</b> ${parseAmount(selectedItem.amount)}</p>
                </div>
                <div className='rightcart'>
                  <div style={{ display: 'flex' }}>
                    <b>Quantity:</b>
                    <select style={{ width: '40px' }} value={quantity} onChange={handleQuantityChange}>
                      {[...Array(10)].map((_, index) => (
                        <option key={index} value={index + 1}>{index + 1}</option>
                      ))}
                    </select>
                  </div>
                  <p><b>Total Amount:</b> ${totalAmount}</p>
                  <button style={{ backgroundColor: '#DAA520', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Pay Now</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddToCart;

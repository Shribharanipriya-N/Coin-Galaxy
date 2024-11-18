import React from 'react';

const Home = ({ coindata, selectedCoinType,setcartitem }) => {

  const handleAddToCart = (id) => {
    setcartitem(id);
    window.alert("Item Added to Cart.")
  };



  const filteredCoins = selectedCoinType ? coindata.filter(coin => coin.category === selectedCoinType) : coindata;

  return (
    <>
      <div className='homerender'>
        {Array.isArray(filteredCoins) && filteredCoins.map((item, index) => (
          <div className='container' key={item.id}>
            <div className='cards'>
              <div className='image'>
                <img className='coinimg' src={item.image} alt='image' />
              </div>
              <span style={{ fontSize: "large", paddingLeft: '10px' }}><b>{item.title}</b></span>
              <div className='details'>
                <div className='left'>
                  <span><b>Amount :</b> {item.amount}</span>
                  <span><b>Rating :</b> {item.rating}</span>
                  <span><b>Availability :</b> {item.availability}</span>
                </div>
                <div className='right'>
                  <button style={{ backgroundColor: '#dfc647', color: 'black', border: '2px', borderRadius: '15px', width: '75px',marginRight:'10px' }} onClick={() => handleAddToCart(item.id)} >Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

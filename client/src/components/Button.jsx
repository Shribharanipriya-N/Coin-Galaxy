import React from 'react';
import '../index.css'

const Button = (props) => {
  const {setSelectedCoinType}=props;
  
  return (
    <div className='cointypebuttons' style={{fontFamily:'Times New Roman'}} >
      <button className='coinicon' style={{background:'rgb(222, 210, 150)'}} onClick={() => {setSelectedCoinType("ancientcoins")}}>Ancient Coins</button>
      <button className='coinicon'style={{background:'#A9A9A9'}} onClick={() => setSelectedCoinType("britishcoins")}>British Coins</button>
      <button className='coinicon'style={{background:'rgb(222, 210, 150)'}} onClick={() => setSelectedCoinType("indiancoins")}>Indian Coins</button>
      <button className='coinicon' style={{background:'#A9A9A9'}}onClick={() => setSelectedCoinType("islamiccoins")}>Islamic Coins</button>
    </div>
  );
};

export default Button;
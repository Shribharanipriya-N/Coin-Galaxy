import React, { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Button from './components/Button.jsx'
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import AddToCart from './components/AddToCart.jsx';

const App = () => {
  const [list,setlist]=useState([]);
  const [selectedCoinType, setSelectedCoinType] = useState();
  const [cartitem,setcartitem]=useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APIURL}/get-coins`).then((res) => res.json())
    .then((json) => {
        if(selectedCoinType){
          const filteredCoins=json.filter((coin)=> coin.category === selectedCoinType);
          setlist(filteredCoins);
        }
        else{
        setlist(json);
        }

      }).catch((err) => { 
        console.log(err);
      })
  },[selectedCoinType])
  console.log(selectedCoinType)
  console.log(cartitem)
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<>
          <Button setSelectedCoinType={setSelectedCoinType} />
          <Home coindata={list} setcartitem={setcartitem}/>
        </>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<AddToCart coindata={list} id={cartitem} />} />

      </Routes>
    </>
  )
}

export default App
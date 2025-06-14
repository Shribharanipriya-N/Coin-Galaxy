import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Button from "./components/Button.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import AddToCart from "./components/AddToCart.jsx";
import SignUp from "./components/SignUp.jsx";
import LandingLayout from "./components/LandingLayout.jsx";

const App = () => {
  const [list, setList] = useState([]);
  const [selectedCoinType, setSelectedCoinType] = useState();
  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APIURL}/get-coins`)
      .then((res) => res.json())
      .then((json) => {
        if (selectedCoinType) {
          const filteredCoins = json.filter(
            (coin) => coin.category === selectedCoinType
          );
          setList(filteredCoins);
        } else {
          setList(json);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCoinType]);

  return (
    <div className="bg-background">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home coindata={list} setcartitem={setCartItem} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<AddToCart coindata={list} id={cartItem} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<LandingLayout />} />
      </Routes>
    </div>
  );
};

export default App;

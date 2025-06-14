import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import galaxyLogo from "../assets/landingimage.png";

const LandingLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex h-screen bg-background text-foreground font-sans flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2 flex flex-col justify-center md:ml-20 px-6 md:px-0">
        <div className="flex justify-center items-end flex-1">
          <img
            src={galaxyLogo}
            alt="Coin Galaxy"
            className="w-72 sm:w-80 md:w-[350px] drop-shadow-[0_10px_20px_rgba(227,194,10,0.25)]"
          />
        </div>
        <div className="flex flex-col justify-start items-center flex-1 space-y-4 mt-6 md:mt-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center leading-snug px-2">
            <span className="text-secondary-dark">Welcome to Coin Galaxy</span>
          </h1>
          <p className="text-base sm:text-lg text-secondary max-w-md text-center px-4">
            Step into Coin Galaxy., Where every coin whispers a tale of empires
            past. Explore history, one artifact at a time.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center md:mr-20 px-6 md:px-0 mt-10 md:mt-0">
        {isLogin ? (
          <Login onToggle={toggleAuth} />
        ) : (
          <SignUp onToggle={toggleAuth} />
        )}
      </div>
    </div>
  );
};

export default LandingLayout;

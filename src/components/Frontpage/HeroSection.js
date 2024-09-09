
import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../../assets/bg.png";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-center h-auto pt-10 flex "
    >
      <div className="h-screen py-20 w-2/5">
        <h1 className="text-8xl md:text-8xl font-bold text-left ml-10 mt-[-4px] ">
          Frea<span className="text-rose-950">Link</span>
        </h1>
        <h3 className="text-3xl mt-4 md:text-3xl font-semibold ml-12 text-left">
          We provide <span className="text-slate-600"> freelancers </span>
          <span className="text-slate-600"> exiciting opportunities</span> for a better tomorrow!
        </h3>

        <div className="dive flex">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-violet-800 to-fuchsia-800 hover:scale-110 font-medium rounded-full text-xl px-5 py-2.5 mt-6 ml-12 transition-all duration-1000 ease-in-out"
          >
            Get Started!
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
    
 
 

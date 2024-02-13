import React from "react";
import { ReactTyped } from "react-typed";
import bg from "../assets/bgimg.jpg";

function Hero() {
  return (
    <div className="w-full h-full opacity-70">
      <img
        className="w-full h-screen top-0 left-0 object-cover"
        src={bg}
        alt=""
      />
    </div>
  );
}

export default Hero;

/*
  <div>
      <div className=' font-bold md:text-7xl sm:text-6xl text-xl text-center'>
        <ReactTyped strings={['Dance is the hidden language of the soul.', 'Dancing is like dreaming with your feet.', 'Dance is the joy of movement and the heart of life.', "Dance first. Think later. It's the natural order.", "Life is short and there will always be dirty dishes, so let's dance."]} typeSpeed={30} backSpeed={20} loop />
      </div>
    </div>
*/

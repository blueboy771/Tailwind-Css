import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div>
      <div className=' font-bold md:text-7xl sm:text-6xl text-xl text-center'>
        <ReactTyped strings={['Dance is the hidden language of the soul.', 'Dancing is like dreaming with your feet.', 'Dance is the joy of movement and the heart of life.', "Dance first. Think later. It's the natural order.", "Life is short and there will always be dirty dishes, so let's dance."]} typeSpeed={30} backSpeed={20} loop />
      </div>
    </div>
  )
}

export default Hero

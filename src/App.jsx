import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import React from 'react'

const App = () => {
  return (
    <main>
        < Navbar />
        <Hero />
        <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Cocktails from './Components/Cocktails.jsx'
import About from './Components/About.jsx'
import React from 'react'

const App = () => {
  return (
    <main>
        < Navbar />
        <Hero />
        <Cocktails />
        <About />
        
    </main>
  )
}

export default App
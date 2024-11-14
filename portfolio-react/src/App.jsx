import React from 'react'
import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';
import About from './components/About/About';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

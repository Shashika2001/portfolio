import React from 'react'
import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

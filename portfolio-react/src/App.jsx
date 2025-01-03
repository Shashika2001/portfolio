import React from 'react'
import Navbar from './components/Navbar/Navbar';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Recents from './components/Recents/Recents';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Recents/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

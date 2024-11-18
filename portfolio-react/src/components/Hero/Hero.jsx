import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
export default function Hero() {
  return (
    
      <div id='home' className="hero">
        <img src={profile_img}/>

        <h1><span>I am Shashika Ekanayaka.</span>I am a computer science 
            undergraduate in UCSC
        </h1>
            <p>I am a experinced web developer and
                 I'm interseted in AI and ML
            </p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>

      </div>
    
  )
}

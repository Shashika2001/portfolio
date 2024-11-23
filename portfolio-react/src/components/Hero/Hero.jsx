import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Hero() {
  return (
    
      <div id='home' className="hero">
        <img src={profile}/>

        <h1><span>I am Shashika Ekanayaka.</span>I am a computer science 
            undergraduate in UCSC
        </h1>
            <p>I am a experinced web developer and
                 I'm interseted in AI and ML
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink classID='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>

      </div>
    
  )
}

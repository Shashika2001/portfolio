import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.svg'

export default function About() {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />

        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced Frontend Developer with over a decade of professional experienced</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTLM & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"700%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"600%"}}/></div>
                    <div className="about-skill"><p>Next js</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
        
        <hr/>
         
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
             
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
        
      
    </div>
  )
}

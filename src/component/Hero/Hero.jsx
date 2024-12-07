import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>i'm tsion,</span>frontend developer,based in ethiopia</h1>
      <p1>I'm a frontend developer from....,10 years of experience</p1>
      <div className="hero-action">
        <div onClick={() => handleScroll("contact")} className="hero-connect">Connect With Me</div> 
          <div className="hero-resume">My resume</div> 
      </div> 
    </div>
  )
}

export default Hero





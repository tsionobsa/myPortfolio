import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => { 
  return (
    <div id='about'className='about'>
     <div className="about-title">
      <h1>About me</h1>
      <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>i'm experienced frontend developer with ove a decade professional</p>
            <p>my passion for frontend development is not only reflecting.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p></div> <hr Style={{width: "70%"}}/>
            <div className="about-skill"><p>REACT JS</p> </div> <hr style={{width: "125%"}} />
            <div className="about-skill"><p>JAVASCRIPT</p> </div><hr  style={{width: "80%"}} />
            <div className="about-skill"><p>NEXT JS</p></div> <hr style={{width: "60%"}} />
          </div>
        </div>
        </div> 
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>3+</h1>
            <p>YEAR OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
          <hr />
        </div>
    </div>
   
  )
}

export default About

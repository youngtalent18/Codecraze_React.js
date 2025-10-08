import React from 'react'
import { Link } from 'react-scroll'
import "./Intro.css"
import Me from "../../assets/bg.jpg"

const Intro = () => {
  return (
    <div id="intro" className="intro">
      <div className="introCont">
        <span className="title">Hello,</span>
        <span className='introS' >I'm <span className="introText">Stephen</span> <br />Software Engineer</span>
        <p className='desci'>I am very passionate about going into Web and App development alongside AI</p>
        <button className="butn" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:"smooth"});
                    }}>Hire Me</button>
      </div>

      <img className="profc" src={Me} alt="profile" />
    </div>
  );
}

export default Intro

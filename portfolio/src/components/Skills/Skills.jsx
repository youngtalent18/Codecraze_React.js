import React from 'react'
import './skills.css'
import UI from '../../assets/UIDesign.png'
import WEB from '../../assets/Web.png'

const Skills = () => {
  return (
    <section className="skills">
        <span className="job">What I Do</span>
        <span className="desc">Passionately turns my ideas into codes, creating everytime to evolve everywhere.</span>
        <div className="skillbars">
            <div className="skillbar">
                <img className="img" src={UI} alt="UI" />
                <div className="skilltext">
                    <h3>UI/UX Designer</h3>
                    <p>UI/UX designer passionate about crafting intuitive, engaging, and user-focused digital experiences.</p>
                </div>
            </div>
            <div  className="skillbar1">
                <img className="img" src={WEB} alt="Web" />
                <div className="skilltext">
                    <h3>Web Developer</h3>
                    <p>I create modern websites tailored to customers choices.</p>
                </div>
            </div>
            <div className="skillbar2">
                <img className="img" src={WEB} alt="App" />
                <div className="skilltext">
                    <h3>App Designer</h3>
                    <p>I design real time app for smart devices</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills

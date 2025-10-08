import React from 'react'
import './skills.css'
import UI from '../../assets/UIDesign.png'
import WEB from '../../assets/Web.png'

const Skills = () => {
  return (
    <section className="skills">
        <span className="job">What I Do</span>
        <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptate amet facere cum dolorem odio. Autem placeat fugiat minus porro.</span>
        <div className="skillbars">
            <div className="skillbar">
                <img className="img" src={UI} alt="UI" />
                <div className="skilltext">
                    <h3>UI/UX Designer</h3>
                    <p>This is just a demo, adipisicing elit. Quibusdam earum amet voluptates? Praesentium, at?</p>
                </div>
            </div>
            <div  className="skillbar1">
                <img className="img" src={WEB} alt="Web" />
                <div className="skilltext">
                    <h3>Web Developer</h3>
                    <p>This is just a demo, Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</p>
                </div>
            </div>
            <div className="skillbar2">
                <img className="img" src={WEB} alt="App" />
                <div className="skilltext">
                    <h3>App Designer</h3>
                    <p>This is just a demo, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, possimus.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills
import React from 'react'
import './work.css'
import Porfolio1 from '../../assets/portfolio-1.png'
import Porfolio2 from '../../assets/portfolio-2.png'
import Porfolio3 from '../../assets/portfolio-3.png'
import Porfolio4 from '../../assets/portfolio-4.png'
import Porfolio5 from '../../assets/portfolio-5.png'
import Porfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section className="work">
        <span className="Portf">My Portfolio</span>
        <span className="PDesc">A sleek, interactive React portfolio designed to reflect creativity and functionality. It highlights my development skills, hands-on projects, and technical growth — built with attention to design, performance, and modern web standards.
        </span>
        <div className="works">
          <img src={Porfolio1} alt="portfolio" />
          <img src={Porfolio2} alt="portfolio" />
          <img src={Porfolio3} alt="portfolio" />
          <img src={Porfolio4} alt="portfolio" />
          <img src={Porfolio5} alt="portfolio" />
          <img src={Porfolio6} alt="portfolio" />
        </div>
        <button type='button' className="view" onClick={() => {document.getElementById('contact').scrollIntoView({behaviour: "smooth"});}}>Contact Me</button>
    </section>
  );
}

export default Works

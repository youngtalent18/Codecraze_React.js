import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/logo.jpg';
import menu from '../../assets/menu.png';


const Navbar = () => {

  const [showMenu, setShowMenu] = React.useState(false);

  
    return (
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="nav-links">
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="navlinkmenu">Home</Link>
          <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="navlinkmenu">About</Link>
          <Link activeClass="active" to='works' spy={true} smooth={true} offset={-255} duration={500} className="navlinkmenu">Portfolio</Link>
          <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-120} duration={500} className="navlinkmenu">Clients</Link>
        </div>
        <button className="btn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:"smooth"});
          }}>Contact Me
        </button>
        <img className='menu' src={menu} alt="" onClick={()=>setShowMenu(!showMenu)} />
        <div className="mobile-menu" style={{display: showMenu? "flex": "none"}}>
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="linkmenu" onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="linkmenu" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass="active" to='works' spy={true} smooth={true} offset={-255} duration={500} className="linkmenu" onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass="active" to='clients' spy={true} smooth={true} offset={-120} duration={500} className="linkmenu" onClick={()=>setShowMenu(false)}>Clients</Link>
          <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-120} duration={500} className="linkmenu" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
    );
}

export default Navbar
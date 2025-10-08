import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './clients.css'
import Walmat from '../../assets/walmart.png'
import Microsoft from '../../assets/microsoft.png'
import Adobe from '../../assets/adobe.png'
import Facebook from '../../assets/facebook.png'
import facebook from '../../assets/facebook1.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';

const Clients = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_n7o1ltm', 'template_56n7r4h', form.current, {
            publicKey: 'j4ngV6Kni98vsbQg2',
        })
        .then(() => {
            console.log('SUCCESS!');
            toast.success(' Message sent successfully!', {
                position: 'top-center',
                duration: 4000,
            });
            e.target.reset();
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <div className='clients'>
        <Toaster />
        <div className="client">
            <span className='clientT'>My Clients</span>
            <span className="Descl">This companies listed below are companies I am looking forward to working for. And many more other tech companies</span>
            <div className="images">
                <img className='image' src={Adobe} alt="adobe" />
                <img className='image' src={Walmat} alt="walmat" />
                <img className='image' src={Microsoft} alt="microsoft" />
                <img className='image' src={Facebook} alt="facebook" />
            </div>
        </div>
        <div id="contact" className="contact">
            <span className="cont1">Contact Me</span>
            <span className="cDesc1">Feel free to reach out to me for job opportunities or collaboration</span>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Your Name' name="your_name"/>
                <input type="email" placeholder='Your Email' name="your_email"/>
                <textarea name="message" rows={6} placeholder='Message' id=""></textarea>
                <button type="submit" className="cbtn" >Submit</button> 
            </form>
        </div>
        <div className="links">
            <img className="link" src={facebook} alt="" />
            <img className="link" src={youtube} alt="" />
            <img className="link" src={instagram} alt="" />
        </div>  
    </div>
  )
}

export default Clients

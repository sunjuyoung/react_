import React, { useState,useEffect } from 'react'
import UserLogo from '../public/img/mj.jpg';
import NeflixLogo from '../public/img/netlogo.png';
import './Nav.css';


const Nav = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY > 50){
            setShow(true);
        }else{
            setShow(false);
        }
      });
    
      return () => {
        window.removeEventListener("scroll",()=>{});
      }
    }, [])
    

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img 
            alt='Netflix '
            src={NeflixLogo}
            className='nav__logo'
            onClick={()=> window.location.reload()}
        />
        <img 
            alt='User logo'
            src={UserLogo}
            className='nav__avatar'
        />
    </nav>
  )
}

export default Nav
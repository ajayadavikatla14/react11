import React, { useState } from 'react';
import { FaTwitter ,FaFacebookF, FaInstagram  ,FaBars } from 'react-icons/fa';
import './style.css'

const Main = () => {
    const [show,setShow]=useState();
  return (
    <>
        <div className="total">
            <div className="navbar"> 
            <button className='nav_btn' onClick={()=>setShow(!show)} ><FaBars className={`${show ? 'nav rotate' :'nav'}`} 
            /></button>
             </div>
            <div className="heading">
                <h2>Queen Consolidated</h2>
            </div>
            
                <div className={`${show ? 'link_total show_links' : 'link_total' }`}>
                <ul className='nav-bars' type='none'>
                    <li className='links'>
                        <a href="abc.com">Home</a>
                    </li>
                    <li className='links'>
                        <a href="abc.com">Contact</a>
                    </li>
                    <li className='links'>
                        <a href="abc.com">Infrastructure</a>
                    </li>
                    <li className='links'>
                        <a href="abc.com">About Us</a>
                    </li>
                </ul>
                </div>

            

            <div className="fa_symbols">
                <button className="fb"><FaFacebookF  className='fa'  /></button>
                <button className="fb"><FaInstagram  className='fa' /></button>
                <button className="fb"><FaTwitter  className='fa' /></button>
            </div>
        </div>
    </>
  )
}

export default Main
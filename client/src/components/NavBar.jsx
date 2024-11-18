import React from 'react';
import { Link } from "react-router-dom";
import '../index.css';

const NavBar = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <header>
    <img style={{width:'50px',height:'50px',borderRadius:'25px',marginLeft:'10px'}} src="https://i.postimg.cc/PJVd5wv6/Screenshot-2024-03-14-001742.png" alt='logo'/>
    <ul id="items">
        <li ><Link to='/' className='navlink'>Home</Link></li>
        <li ><Link to='/about' className='navlink'>About</Link></li>
        <li ><Link to='/contact' className='navlink'>Contact</Link></li>
        <li ><Link to='/cart' className='navlink'>Cart</Link></li>
    </ul>
    </header>
    
    </div>
  )
}

export default NavBar
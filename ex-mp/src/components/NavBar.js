import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar= () =>{
    return (
    <div className='navbar'>
 
        <Link className='nav-link' to="/about">Acerca de</Link>

        <Link className='nav-link' to="/events">Eventos</Link>

        <Link className='nav-link' to="/products">Productos</Link>

        <Link className='nav-link' to="/contactus">Contacto</Link>

    </div>
    );
  }
  export default NavBar;
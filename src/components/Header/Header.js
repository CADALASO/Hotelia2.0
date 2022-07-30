import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/css/Header.css'
import Logo from '../../assets/img/LOGO.png';

function Header() {
    return (
        <div>
            <nav className='navbar-inicio'>
                <input type='checkbox' id='check' />
                <label htmlFor='check' className='checkbtn'>
                    <i className="fa-solid fa-bars"></i>
                </label>

                <div className='enlace'>
                    <img src={Logo} alt='logo' className='logo'/>
                    
                </div>

                <div className='button-reserva'>
                    <Link to=''><button>RESERVA</button></Link>
                </div>

                <ul className='navbar-ul'>
                    <li><Link to="/Hotelia/" className=' link'>Inicio</Link></li>
                    <li><Link to="" className=' link'>Habitaciones</Link></li>
                    <li><a href='#acerca-de-nosotros' className=' link'>Acerca de nosotros</a></li>
                    <li><Link to="/Hotelia/login" className=' link login'>Registrarse / Iniciar sesión</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
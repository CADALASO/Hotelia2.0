import React from 'react'
import User_NavBar from '../components/Dashboards/User_NavBar'
import photo_User from '../assets/img/perfilUSER.png';
import '../assets/css/Dashboard_User.css';
import { Link } from 'react-router-dom';
import dark_door from '../assets/img/iconos/dark-door.svg';
import imagotype_dark from '../assets/img/imagotype-dark.png';
import Footer from '../components/INICIO/Footer';


function User_Dashboard() {
    return (
        <div>
            <div className='background'>
                <User_NavBar />
                <div className='group-header-user'>
                    <div className='imagotype'>
                        <img src={imagotype_dark} alt="imagotype" className='imagotype-dark' />
                    </div>
                    <div className='btn-salir-dashboard'>
                        <Link to="/"><img src={dark_door} alt="door" /> Salir</Link>
                    </div>
                </div>
                <div className='group-welcome'>
                    <h3 className='welcome-title'>Bienvenido, Usuario</h3>
                    <img src={photo_User} alt="photo User" className='photo-Dashboard' />
                </div>
                <div className='group-menu-user'>
                    <div>
                        <Link to="/" className="group-item"><i class="fa-solid fa-magnifying-glass"></i> HABITACIONES</Link>
                    </div>
                    <div className='border'>
                        <Link to="/" className="group-item"><i class="fa-solid fa-calendar-check"></i> MIS RESERVAS</Link>
                    </div>
                    <div>
                        <Link to="/" className="group-item"><i class="fa-solid fa-user-pen"></i> PERFIL</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default User_Dashboard;
import React from 'react'
import UserNavBar from '../components/Dashboards/UserNavBar'
import photoUser from '../assets/img/perfilUSER.png';
import '../assets/css/DashboardUser.css';
import { Link } from 'react-router-dom';
import darkDoor from '../assets/img/iconos/dark-door.svg';
import imagotypeDark from '../assets/img/imagotype-dark.png';
import Footer from '../components/INICIO/Footer';


function UserDashboard() {
    return (
        <div>
            <div className='background'>
                <div className='ocultar'>
                    <UserNavBar />
                </div>
                <div className='group-header-user'>
                    <div className='imagotype'>
                        <img src={imagotypeDark} alt="imagotype" className='imagotype-dark' />
                    </div>
                    <div className='btn-salir-dashboard-user'>
                        <Link to="/Hotelia/Login"><img src={darkDoor} alt="door" /> Salir</Link>
                    </div>
                </div>

                <div className='group-welcome'>
                    <h3 className='welcome-title'>Bienvenido, Usuario</h3>
                    <img src={photoUser} alt="photoUser" className='photo-Dashboard' />
                </div>

                <div className='group-menu-user'>
                    <div>
                        <Link to="/Hotelia/User/list-habitaciones" className="group-item"><i class="fa-solid fa-magnifying-glass"></i> HABITACIONES</Link>
                    </div>
                    <div className='border'>
                        <Link to="/Hotelia/User/Reservas" className="group-item"><i class="fa-solid fa-calendar-check"></i> MIS RESERVAS</Link>
                    </div>
                    <div>
                        <Link to="/Hotelia/User/Perfil" className="group-item"><i class="fa-solid fa-user-pen"></i>MI PERFIL</Link>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default UserDashboard;
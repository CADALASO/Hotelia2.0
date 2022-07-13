import React from 'react'
import photo_Admin from '../assets/img/perfilADMIN.png';
import '../assets/css/Dashboard_Admin.css';
import { Link } from 'react-router-dom';
import door from '../assets/img/iconos/Door.svg';
import imagotype from '../assets/img/imagotype.png';
import Footer from '../components/INICIO/Footer'

function Admin_Dashboard() {
  return (
    <div>
    <div className='background-admin'>
      <div className='group-header'>
        <div className='imagotype'>
          <img src={imagotype} alt="imagotype" />
        </div>
        <div className='btn-salir-dashboard-admin'>
          <Link to="/"><img src={door} alt="door" /> Salir</Link>
        </div>
      </div>
      <div className='group-welcome-admin'>
        <h3 className='welcome-title-admin'>Bienvenido, Administrador</h3>
        <img src={photo_Admin} alt="photo Admin" className='photo-Dashboard-admin' />
      </div>
      <div className='group-menu-admin'>
        <div>
          <Link to="/" className="group-item-admin"><i class="fa-solid fa-bed"></i> HABITACIONES</Link>
        </div>
        <div className='border-admin'>
          <Link to="/" className="group-item-admin"><i class="fa-solid fa-circle-plus"></i> CREAR HABITACIÓN</Link>
        </div>
        <div>
          <Link to="/" className="group-item-admin"><i class="fa-solid fa-user-pen"></i> PERFIL</Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Admin_Dashboard;
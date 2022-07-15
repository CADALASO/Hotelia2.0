import React from 'react'
import photoAdmin from '../assets/img/perfilADMIN.png';
import '../assets/css/DashboardAdmin.css';
import { Link } from 'react-router-dom';
import door from '../assets/img/iconos/Door.svg';
import imagotype from '../assets/img/imagotype.png';
import Footer from '../components/INICIO/Footer'

function AdminDashboard() {
  return (
    <div>
    <div className='background-admin'>
      <div className='group-header'>
        <div className='imagotype'>
          <img src={imagotype} alt="imagotype" />
        </div>
        <div className='btn-salir-dashboard-admin'>
          <Link to="/Hotelia/Login"><img src={door} alt="door" /> Salir</Link>
        </div>
      </div>
      <div className='group-welcome-admin'>
        <h3 className='welcome-title-admin'>Bienvenido, Administrador</h3>
        <img src={photoAdmin} alt="photoAdmin" className='photo-Dashboard-admin' />
      </div>
      <div className='group-menu-admin'>
        <div>
          <Link to="/Hotelia/Admin/list-habitaciones" className="group-item-admin"><i class="fa-solid fa-bed"></i> HABITACIONES</Link>
        </div>
        <div className='border-admin'>
          <Link to="/Hotelia/Admin/form-habitaciones" className="group-item-admin"><i class="fa-solid fa-circle-plus"></i> CREAR HABITACIÓN</Link>
        </div>
        <div>
          <Link to="/Hotelia/Admin/Perfil" className="group-item-admin"><i class="fa-solid fa-user-pen"></i>MI PERFIL</Link>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AdminDashboard;
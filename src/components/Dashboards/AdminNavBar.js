
import React from 'react';
import '../../assets/css/AdminNavBar.css';
import { Link } from 'react-router-dom';
import isotype from '../../assets/img/white-isotype.png';
import door from '../../assets/img/iconos/Door.svg';
import photoAdmin from '../../assets/img/perfilADMIN.png';

function AdminNavBar() {
  return (

    <nav className='admin-nav'>
      <input type={'checkbox'} id="chk-menu" />
      <div className='container-nav'>
        <label for="chk-menu" className="btn-menu">
          <i class="fa-solid fa-bars"></i>
        </label>
        <div>
          <img src={isotype} alt="white-isotype" className='isotype' />
        </div>
        <div className='group-photo'>
          <div>
            <img src={photoAdmin} alt="photoAdmin" className='photo' />
          </div>
          <div className="btn-salir">
            <Link to="/Hotelia/Login"><img src={door} alt="door" /> Salir</Link>
          </div>
        </div>
      </div>
      <div className="items">
        <Link to="/Hotelia/Admin/list-habitaciones" className="item"><i class="fa-solid fa-bed"></i> HABITACIONES</Link>
        <hr className="line-nav" />
        <Link to="/Hotelia/Admin/form-habitaciones" className="item"><i class="fa-solid fa-circle-plus"></i> CREAR HABITACIÓN</Link>
        <hr className="line-nav" />
        <Link to="/Hotelia/Admin/Perfil" className="item"><i class="fa-solid fa-user-pen"></i> MI PERFIL</Link>
      </div>
    </nav >

  )
}

export default AdminNavBar;

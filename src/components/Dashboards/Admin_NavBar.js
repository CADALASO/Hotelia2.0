import React from 'react';
import '../../assets/css/Admin_NavBar.css';
import { Link } from 'react-router-dom';
import isotype from '../../assets/img/white-isotype.png';
import door from '../../assets/img/iconos/Door.svg';
import photo_Admin from '../../assets/img/perfilADMIN.png';

function Admin_NavBar() {
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
            <img src={photo_Admin} alt="photo Admin" className='photo' />
          </div>
          <div className="btn-salir">
            <Link to="/"><img src={door} alt="door" /> Salir</Link>
          </div>
        </div>
      </div>
      <div className="items">
        <Link to="/" className="item"><i class="fa-solid fa-bed"></i> HABITACIONES</Link>
        <hr className="line-nav" />
        <Link to="/" className="item"><i class="fa-solid fa-circle-plus"></i> CREAR HABITACIÓN</Link>
        <hr className="line-nav" />
        <Link to="/" className="item"><i class="fa-solid fa-user-pen"></i> PERFIL</Link>
      </div>
    </nav >

  )
}

export default Admin_NavBar;
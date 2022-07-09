import React from 'react';
import '../../assets/css/User_NavBar.css';
import { Link } from 'react-router-dom';
import blue_isotype from '../../assets/img/blue-isotype.png';
import dark_door from '../../assets/img/iconos/dark-door.svg';
import photo_User from '../../assets/img/perfilUSER.png';

function User_NavBar() {
  return (
    <nav className='user-nav hidden'>
      <input type={'checkbox'} id="chk-menu" />
      <div className='container-nav'>
        <label for="chk-menu" className="btn-menu-user">
          <i class="fa-solid fa-bars"></i>
        </label>
        <div>
          <img src={blue_isotype} alt="white-isotype" className='isotype' />
        </div>
        <div className='group-photo'>
          <div>
            <img src={photo_User} alt="photo Admin" className='photo' />
          </div>
          <div className="btn-salir-user">
            <Link to="/"><img src={dark_door} alt="door" /> Salir</Link>
          </div>
        </div>
      </div>
      <div className="items">
        <Link to="/" className="item-user"><i class="fa-solid fa-magnifying-glass"></i> HABITACIONES</Link>
        <hr className="line-nav-user" />
        <Link to="/" className="item-user"><i class="fa-solid fa-calendar-check"></i> MIS RESERVAS</Link>
        <hr className="line-nav-user" />
        <Link to="/" className="item-user"><i class="fa-solid fa-user-pen"></i> PERFIL</Link>
      </div>
    </nav >
  )
}

export default User_NavBar;

import React from 'react';
import '../../assets/css/UserNavBar.css';
import { Link } from 'react-router-dom';
import blueIsotype from '../../assets/img/blue-isotype.png';
import darkDoor from '../../assets/img/iconos/dark-door.svg';
import photoUser from '../../assets/img/perfilUSER.png';

function UserNavBar() {
  return (
    <nav className='user-nav hidden'>
      <input type={'checkbox'} id="chk-menu" />
      <div className='container-nav'>
        <label for="chk-menu" className="btn-menu-user">
          <i class="fa-solid fa-bars"></i>
        </label>
        <div>
          <img src={blueIsotype} alt={blueIsotype} className='isotype' />
        </div>
        <div className='group-photo'>
          <div>
            <img src={photoUser} alt="photoUser" className='photo' />
          </div>
          <div className="btn-salir-user">
            <Link to="/Hotelia/Login"><img src={darkDoor} alt="" /> Salir</Link>
          </div>
        </div>
      </div>
      <div className="items">
        <Link to="/Hotelia/User/list-habitaciones" className="item-user"><i class="fa-solid fa-magnifying-glass"></i> HABITACIONES</Link>
        <hr className="line-nav-user" />
        <Link to="/Hotelia/User/Reservas" className="item-user"><i class="fa-solid fa-calendar-check"></i> MIS RESERVAS</Link>
        <hr className="line-nav-user" />
        <Link to="/Hotelia/User/Perfil" className="item-user"><i class="fa-solid fa-user-pen"></i> MI PERFIL</Link>
      </div>
    </nav >
  )
}

export default UserNavBar;

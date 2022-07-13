import React from 'react';
import photo_Admin from '../../../assets/img/perfilADMIN.png';
function Iden_dataAdmin() {
    return (
        <div className='container-iden'>
            <img src={photo_Admin} alt="photo Admin" className='photoPerfil'/>
            <div className='container-text'>
                <h2 className='Caption'>DATOS DE IDENTIFICACIÓN</h2>
                <p className='text'><span>Nombre:</span><br />Javier Perez Ramirez</p>
                <p className='text'><span>Tipo de documento:</span><br />Cédula de ciudadania</p>
                <p className='text'><span>Número de documento:</span><br />1234567890</p>
                <div className='button'>
                <button className='btn-edit blue'>EDITAR</button>
                </div>
            </div>
        </div>

    )
}

export default Iden_dataAdmin;
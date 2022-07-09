import React from 'react';
import '../../../assets/css/Perfil_Admin.css'

function Security_dataAdmin() {
    return (

        <div className='container-color align'>
            <h2 className='Caption'>DATOS DE SEGURIDAD</h2>
            <div className='item-data center'>
                <div className='icon'>
                <i class="fa-solid fa-lock"></i>
                </div>
                <p className='text'><span>Contraseña:</span><br />**************</p>
            </div>
            <div className='button-gray'>
                <button className='btn-edit gray'>EDITAR</button>
            </div>
        </div>

    )
}

export default Security_dataAdmin;
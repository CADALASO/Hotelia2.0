import React from 'react';
import '../../../assets/css/Perfil_Admin.css'

function Contact_dataAdmin() {
    return (

        <div className='container-color align'>
            <h2 className='Caption'>DATOS DE CONTACTO</h2>
            <div className='item-data'>
                <div className='icon'>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <p className='text'><span>Correo electrónico:</span><br />correo@dominio.com</p>
            </div>
            <div className='item-data'>
                <div className='icon'>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <p className='text'><span>Teléfono de contacto:</span><br />1234567</p>
            </div>
            <div className='button-gray'>
            <button className='btn-edit gray'>EDITAR</button>
            </div>
        </div>

    )
}

export default Contact_dataAdmin;
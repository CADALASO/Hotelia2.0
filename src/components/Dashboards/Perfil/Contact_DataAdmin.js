import React, { useState } from 'react';
import Modal_EditAdmin from './Modal_EditAdmin';
import '../../../assets/css/Perfil_Admin.css'

function Contact_dataAdmin() {
    const [statusModalCont, changeStatusModalCont] = useState(false);

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
            <button className='btn-edit gray'onClick={() => changeStatusModalCont(!statusModalCont)}>EDITAR</button>
            </div>
            <Modal_EditAdmin
                status={statusModalCont}
                changeStatus={changeStatusModalCont}
                positionModal={'start'}
            >
                <h2>DATOS DE CONTACTO</h2>
                <div>
                    <label className='label'>Correo electrónico:</label>
                    <input
                        tipo="email"
                        name="email"
                        placeholder="correo@dominio.com"
                    />
                    <label className='label'>Teléfono de contacto:</label>
                    <input
                        tipo="tel"
                        name="tel"
                        placeholder="1234567"
                    />
                </div>
                <button>GUARDAR CAMBIOS</button>
            </Modal_EditAdmin>
        </div>

    )
}

export default Contact_dataAdmin;
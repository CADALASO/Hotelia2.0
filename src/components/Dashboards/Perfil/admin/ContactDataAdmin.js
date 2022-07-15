import React, { useState } from 'react';
import ModalEditAdmin from './ModalEditAdmin';
import '../../../../assets/css/PerfilAdmin.css'

function ContactDataAdmin() {
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
            <ModalEditAdmin
                status={statusModalCont}
                changeStatus={changeStatusModalCont}
                positionModal={'start'}
            >
                <h2>DATOS DE CONTACTO</h2>
                <div>
                    <label >Correo electrónico:</label>
                    <input
                        tipo="email"
                        name="email"
                        placeholder="correo@dominio.com"
                    />
                    <label >Teléfono de contacto:</label>
                    <input
                        tipo="tel"
                        name="tel"
                        placeholder="1234567"
                    />
                </div>
                <button>GUARDAR CAMBIOS</button>
            </ModalEditAdmin>
        </div>

    )
}

export default ContactDataAdmin;
import React, { useState } from 'react';
import ModalEditAdmin from './ModalEditUser';
import '../../../../assets/css/PerfilUser.css'

function ContactDataUser() {
    const [statusModalCont, changeStatusModalCont] = useState(false);

    return (

        <div className='container-color-u align-u'>
            <h2 className='Caption-u'>DATOS DE CONTACTO</h2>
            <div className='item-data-u'>
                <div className='icon-u'>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <p className='text-u'><span>Correo electrónico:</span><br />correo@dominio.com</p>
            </div>
            <div className='item-data-u'>
                <div className='icon-u'>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <p className='text-u'><span>Teléfono de contacto:</span><br />1234567</p>
            </div>
            <div className='button-gray-u'>
            <button className='btn-edit gray'onClick={() => changeStatusModalCont(!statusModalCont)}>EDITAR</button>
            </div>
            <ModalEditAdmin
                status={statusModalCont}
                changeStatus={changeStatusModalCont}
                positionModal={'start'}
            >
                <h2>DATOS DE CONTACTO</h2>
                <div>
                    <label>Correo electrónico:</label>
                    <input
                        tipo="email"
                        name="email"
                        placeholder="correo@dominio.com"
                    />
                    <label>Teléfono de contacto:</label>
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

export default ContactDataUser;
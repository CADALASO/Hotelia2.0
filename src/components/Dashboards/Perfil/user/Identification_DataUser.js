import React, { useState } from 'react';
import photo_User from '../../../../assets/img/perfilUSER.png';
import Modal_EditUser from './Modal_EditUser';

function Iden_dataUser() {

    const [statusModalIden, changeStatusModalIden] = useState(false);


    return (
        <div className='container-iden-u'>
            <img src={photo_User} alt="photo User" className='photoPerfil-u' />
            <div className='container-text-u'>
                <h2 className='Caption-u'>DATOS DE IDENTIFICACIÓN</h2>
                <p className='text-u'><span>Nombre:</span><br />Javier Perez Ramirez</p>
                <p className='text-u'><span>Tipo de documento:</span><br />Cédula de ciudadania</p>
                <p className='text-u'><span>Número de documento:</span><br />1234567890</p>
                <div className='button-u'>
                    <button className='btn-edit-u green-u' onClick={() => changeStatusModalIden(!statusModalIden)}>EDITAR</button>
                </div>
            </div>
            <Modal_EditUser
                status={statusModalIden}
                changeStatus={changeStatusModalIden}
            >
                <img src={photo_User} alt="photo User" />
                <button>CAMBIAR FOTO</button>
                <div>
                    <label>Nombre(s):</label>
                    <input
                        tipo="text"
                        name="nombre"
                        placeholder="Carol Daniela"
                    />
                    <label>Apellido(s):</label>
                    <input
                        tipo="text"
                        name="apellido"
                        placeholder="Garcia Carrato"
                    />
                    <div>
                        <label>Tipo de documento:</label>
                        <select name="select">
                            <option value="1" selected>Cédula de Ciudadania</option>
                            <option value="2" >Cédula de Extranjeria</option>
                            <option value="3">Número de identificación personal</option>
                            <option value="4">Número de identificación tributaria</option>
                            <option value="5">Pasaporte</option>
                        </select>
                    </div>
                    <label>Número de documento:</label>
                    <input
                        tipo="text"
                        name="numdocumento"
                        placeholder="0123456789"
                    />
                </div>
                <button>GUARDAR CAMBIOS</button>
            </Modal_EditUser>
        </div>

    )
}

export default Iden_dataUser;
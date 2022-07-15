import React, { useState } from 'react';
import photoUser from '../../../../assets/img/perfilUSER.png';
import ModalEditUser from './ModalEditUser';
import '../../../../assets/css/PerfilUser.css'


function IdendataUser() {

    const [statusModalIden, changeStatusModalIden] = useState(false);


    return (
        <div className='container-iden-u'>
            <img src={photoUser} alt="photoUser" className='photoPerfil-u' />
            <div className='container-text-u'>
                <h2 className='Caption-u'>DATOS DE IDENTIFICACIÓN</h2>
                <p className='text-u'><span>Nombre:</span><br />Javier Perez Ramirez</p>
                <p className='text-u'><span>Tipo de documento:</span><br />Cédula de ciudadania</p>
                <p className='text-u'><span>Número de documento:</span><br />1234567890</p>
                <div className='button-u'>
                    <button className='btn-edit-u green-u' onClick={() => changeStatusModalIden(!statusModalIden)}>EDITAR</button>
                </div>
            </div>
            <ModalEditUser
                status={statusModalIden}
                changeStatus={changeStatusModalIden}
            >
                <img src={photoUser} alt="photoUser" />
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
            </ModalEditUser>
        </div>

    )
}

export default IdendataUser;
import React, { useState } from 'react';
import photo_Admin from '../../../../assets/img/perfilADMIN.png';
import Modal_EditAdmin from './ModalEditAdmin';

function Iden_dataAdmin() {

    const [statusModalIden, changeStatusModalIden] = useState(false);


    return (
        <div className='container-iden'>
            <img src={photo_Admin} alt="photo Admin" className='photoPerfil' />
            <div className='container-text'>
                <h2 className='Caption'>DATOS DE IDENTIFICACIÓN</h2>
                <p className='text'><span>Nombre:</span><br />Javier Perez Ramirez</p>
                <p className='text'><span>Tipo de documento:</span><br />Cédula de ciudadania</p>
                <p className='text'><span>Número de documento:</span><br />1234567890</p>
                <div className='button'>
                    <button className='btn-edit blue' onClick={() => changeStatusModalIden(!statusModalIden)}>EDITAR</button>
                </div>
            </div>
            <Modal_EditAdmin
                status={statusModalIden}
                changeStatus={changeStatusModalIden}
            >
                <img src={photo_Admin} alt="photo Admin" />
                <button>CAMBIAR FOTO</button>
                <div>
                    <label >Nombre(s):</label>
                    <input
                        tipo="text"
                        name="nombre"
                        placeholder="Carol Daniela"
                    />
                    <label >Apellido(s):</label>
                    <input
                        tipo="text"
                        name="apellido"
                        placeholder="Garcia Carrato"
                    />
                    <div>
                        <label >Tipo de documento:</label>
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
            </Modal_EditAdmin>
        </div>

    )
}

export default Iden_dataAdmin;
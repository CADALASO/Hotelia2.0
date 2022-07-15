import React, { useState } from 'react';
import ModalEditAdmin from './ModalEditAdmin';
import '../../../../assets/css/PerfilAdmin.css'

function SecurityDataAdmin() {
    const [statusModalSeg, changeStatusModalSeg] = useState(false);

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
                <button className='btn-edit gray' onClick={() => changeStatusModalSeg(!statusModalSeg)}>EDITAR</button>
            </div>
            <ModalEditAdmin
                status={statusModalSeg}
                changeStatus={changeStatusModalSeg}
                positionModal={'start'}

            >
                <h2>DATOS DE SEGURIDAD</h2>
                <div>
                    <label >Contraseña actual:</label>
                    <input
                        tipo="Password"
                        name="actual"
                    />
                    <label>Nueva contraseña:</label>
                    <input
                        tipo="Password"
                        name="nueva"
                    />
                    <label>Repetir nueva contraseña:</label>
                    <input
                        tipo="Password"
                        name="repetir"
                    />
                </div>
                <button>GUARDAR CAMBIOS</button>
            </ModalEditAdmin>
        </div>

    )
}

export default SecurityDataAdmin;
import React, { useState } from 'react';
import ModalEditAdmin from './ModalEditUser';
import '../../../../assets/css/PerfilUser.css'

function SecurityDataUser() {
    const [statusModalSeg, changeStatusModalSeg] = useState(false);

    return (
        <div className='container-color-u align-u'>
            <h2 className='Caption-u'>DATOS DE SEGURIDAD</h2>
            <div className='item-data-u center-u'>
                <div className='icon-u'>
                    <i class="fa-solid fa-lock"></i>
                </div>
                <p className='text-u'><span>Contraseña:</span><br />**************</p>
            </div>
            <div className='button-gray-u'>
                <button className='btn-edit gray-u' onClick={() => changeStatusModalSeg(!statusModalSeg)}>EDITAR</button>
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
                    <label >Nueva contraseña:</label>
                    <input
                        tipo="Password"
                        name="nueva"
                    />
                    <label >Repetir nueva contraseña:</label>
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

export default SecurityDataUser;
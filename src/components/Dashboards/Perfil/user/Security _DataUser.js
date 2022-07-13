import React, { useState } from 'react';
import Modal_EditAdmin from './Modal_EditUser';
import '../../../../assets/css/Perfil_Admin.css'

function Security_dataAdmin() {
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
            <Modal_EditAdmin
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
            </Modal_EditAdmin>
        </div>

    )
}

export default Security_dataAdmin;
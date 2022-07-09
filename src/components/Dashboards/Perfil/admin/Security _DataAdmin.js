import React, { useState } from 'react';
import Modal_EditAdmin from './Modal_EditAdmin';
import '../../../../assets/css/Perfil_Admin.css'

function Security_dataAdmin() {
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
            </Modal_EditAdmin>
        </div>

    )
}

export default Security_dataAdmin;
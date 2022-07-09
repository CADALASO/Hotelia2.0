import React from 'react';
import '../../../assets/css/Perfil_Admin.css'
function Personal_dataAdmin() {
    return (
        <div>
            <div className='container-color align'>
                <h2 className='Caption'>DATOS PERSONALES</h2>
                <div className='item-data'>
                    <div className='icon'>
                        <i class="fa-solid fa-calendar-day"></i>
                    </div>
                    <p className='text'><span>Fecha de nacimiento:</span><br />14 de junio 1980</p>
                </div>
                <div className='item-data'>
                    <div className='icon'>
                        <i class="fa-solid fa-earth-americas"></i>
                    </div>
                    <p className='text'><span>País de origen:</span><br />Colombia</p>
                </div>
                <div className='item-data' >
                    <div className='icon'>
                        <i class="fa-solid fa-mars-and-venus"></i>
                    </div>
                    <p className='text'><span>Género:</span><br />Masculino</p>
                </div>
            </div >
        </div >

    )
}

export default Personal_dataAdmin;
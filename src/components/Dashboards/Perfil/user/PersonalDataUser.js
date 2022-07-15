import React from 'react';
import '../../../../assets/css/PerfilUser.css'
function PersonalDataUser() {
    return (
        <div>
            <div className='container-color-u align-u'>
                <h2 className='Caption-u'>DATOS PERSONALES</h2>
                <div className='item-data-u'>
                    <div className='icon-u'>
                        <i class="fa-solid fa-calendar-day"></i>
                    </div>
                    <p className='text-u'><span>Fecha de nacimiento:</span><br />14 de junio 1980</p>
                </div>
                <div className='item-data-u'>
                    <div className='icon-u'>
                        <i class="fa-solid fa-earth-americas"></i>
                    </div>
                    <p className='text-u'><span>País de origen:</span><br />Colombia</p>
                </div>
                <div className='item-data-u' >
                    <div className='icon-u'>
                        <i class="fa-solid fa-mars-and-venus"></i>
                    </div>
                    <p className='text-u'><span>Género:</span><br />Masculino</p>
                </div>
            </div >
        </div >

    )
}

export default PersonalDataUser;
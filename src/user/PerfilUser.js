import React from 'react'
import '../assets/css/Perfil_User.css'
import User_NavBar from '../components/Dashboards/User_NavBar';
import Contact_dataUser from '../components/Dashboards/Perfil/user/Contact_DataUser';
import Iden_dataUser from '../components/Dashboards/Perfil/user/Identification_DataUser';
import Personal_dataUser from '../components/Dashboards/Perfil/user/Personal_DataUser';
import Security_dataUser from '../components/Dashboards/Perfil/user/Security _DataUser';
import Footer from '../components/INICIO/Footer'

function User_Perfil() {
    return (
        <div>
            <User_NavBar/>
            <div className='container-perfil-u'>
                <Iden_dataUser />
                <div className='container-data-u'>
                    <Personal_dataUser />
                    <Contact_dataUser />
                    <Security_dataUser />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default User_Perfil;
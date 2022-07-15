import React from 'react'
import '../assets/css/PerfilUser.css'
import UserNavBar from '../components/Dashboards/UserNavBar';
import ContactDataUser from '../components/Dashboards/Perfil/user/ContactDataUser';
import IdenDataUser from '../components/Dashboards/Perfil/user/IdentificationDataUser';
import PersonalDataUser from '../components/Dashboards/Perfil/user/PersonalDataUser';
import SecurityDataUser from '../components/Dashboards/Perfil/user/SecurityDataUser';
import Footer from '../components/INICIO/Footer'

function UserPerfil() {
    return (
        <div>
            <UserNavBar/>
            <div className='container-perfil-u'>
                <IdenDataUser />
                <div className='container-data-u'>
                    <PersonalDataUser />
                    <ContactDataUser />
                    <SecurityDataUser />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserPerfil;
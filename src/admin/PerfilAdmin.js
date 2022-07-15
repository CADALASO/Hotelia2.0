import React from 'react'
import '../assets/css/PerfilAdmin.css'
import AdminNavBar from '../components/Dashboards/AdminNavBar'
import ContactDataAdmin from '../components/Dashboards/Perfil/admin/ContactDataAdmin';
import IdenDataAdmin from '../components/Dashboards/Perfil/admin/IdentificationDataAdmin';
import PersonalDataAdmin from '../components/Dashboards/Perfil/admin/PersonalDataAdmin';
import SecurityDataAdmin from '../components/Dashboards/Perfil/admin/SecurityDataAdmin';
import Footer from '../components/INICIO/Footer'

function Admin_Perfil() {
    return (
        <div>
            <AdminNavBar />
            <div className='container-perfil'>
                <IdenDataAdmin />
                <div className='container-data'>
                    <PersonalDataAdmin />
                    <ContactDataAdmin />
                    <SecurityDataAdmin />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Admin_Perfil;
import React from 'react'
import '../assets/css/Perfil_Admin.css'
import Admin_NavBar from '../components/Dashboards/Admin_NavBar'
import Contact_dataAdmin from '../components/Dashboards/Perfil/Contact_DataAdmin';
import Iden_dataAdmin from '../components/Dashboards/Perfil/Identification_DataAdmin';
import Personal_dataAdmin from '../components/Dashboards/Perfil/Personal_DataAdmin';
import Security_dataAdmin from '../components/Dashboards/Perfil/Security _DataAdmin';
import Footer from '../components/INICIO/Footer'

function Admin_Perfil() {
    return (
        <div>
            <Admin_NavBar />
            <div className='container-perfil'>
                <Iden_dataAdmin />
                <div className='container-data'>
                    <Personal_dataAdmin />
                    <Contact_dataAdmin />
                    <Security_dataAdmin />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Admin_Perfil;
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin_Dashboard from '../admin/Dashboard'
import Admin_Perfil from '../admin/PerfilAdmin'
import Form from '../components/formRegistration/Form'
import Inicio from '../pages/Inicio'
import User_Dashboard from '../user/Dashboard'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Hotelia/' element={<Inicio />} ></Route>
        <Route path='/Admin-Dashboard' element={<Admin_Dashboard />}></Route>
        <Route path='/User-Dashboard' element={<User_Dashboard/>}></Route>
        <Route path='/Formulario' element={<Form/>}></Route>
        <Route path='/Admin-Perfil' element={<Admin_Perfil />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
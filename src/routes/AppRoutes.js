import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin_Dashboard from '../admin/Dashboard'
import Admin_Perfil from '../admin/PerfilAdmin'
import Form from '../registrationForm/Form'
import Inicio from '../pages/Inicio'
import User_Dashboard from '../user/Dashboard'
import User_Perfil from '../user/PerfilUser'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Hotelia/' element={<Inicio />} ></Route>
        <Route path='/Admin-Dashboard' element={<Admin_Dashboard />}></Route>
        <Route path='/User-Dashboard' element={<User_Dashboard/>}></Route>
        <Route path='/Formulario' element={<Form/>}></Route>
        <Route path='/Admin-Perfil' element={<Admin_Perfil />}></Route>
        <Route path='/User-Perfil' element={<User_Perfil/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
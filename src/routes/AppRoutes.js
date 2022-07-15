import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormHab from '../admin/FormHab'
import ListHabs from '../admin/ListHabs'
import AdminDashboard from '../admin/AdminDashboard'
import AdminPerfil from '../admin/PerfilAdmin'
import Form from '../registrationForm/Form'
import Inicio from '../pages/Inicio'
import UserDashboard from '../user/UserDashboard'
import UserPerfil from '../user/PerfilUser'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Hotelia/' element={<Inicio />} ></Route>
        <Route path='/Hotelia/Admin/list-habitaciones' element={<ListHabs />} ></Route>
        <Route path='/Hotelia/Admin/form-habitaciones' element={<FormHab/>} ></Route>
        <Route path='/Hotelia/Admin/Dashboard' element={<AdminDashboard />}></Route>
        <Route path='/Hotelia/User/Dashboard' element={<UserDashboard />}></Route>
        <Route path='/Hotelia/Formulario/Registro' element={<Form />}></Route>
        <Route path='/Hotelia/Admin/Perfil' element={<AdminPerfil />}></Route>
        <Route path='/Hotelia/User/Perfil' element={<UserPerfil />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
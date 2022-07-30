import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/logo-login.png'
import '../assets/css/Login.css'
import { Formik } from 'formik';
import Swal from 'sweetalert2';

const Login = () => {
    //admin@gmail.com
    //adminhl12
    return (
        <div className='bg-login'>
            
            <Formik
                initialValues={{
                    email: '',
                    contraseña: ''
                }}
                validate={(valores) => {
                    let errores = {}
                    //VALIDACIÓN CORREO Y CONTRASEÑA DEL ADMIN
                    if (valores.email === 'admin@hotelia.com' && valores.contraseña === 'adminhl12') {
                        window.location = "/Hotelia/list-habitaciones"
                    }if(valores.email === 'jfajardo@hotelia.com' && valores.contraseña === 'userhl12'){
                        window.location = "/Hotelia/"
                    }
                    //VALIDACIÓN CORREO
                    if (!valores.email) {
                        errores.email = 'Por favor ingrese su correo electrónico';
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                        errores.email = "El correo solo puede contener letras, números, puntos, guiones y guion bajo."

                        //VALIDACIÓN CONTRASEÑA
                    } if (!valores.contraseña) {
                        errores.contraseña = 'Por favor ingrese su contraseña'
                    } else if (!/^.{12,12}$/.test(valores.contraseña)) {
                        errores.contraseña = 'La contraseña tiene que ser de 8 a 12 dígitos.'

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Los datos son incorrectos, revisa bien.'
                        })
                    }
                    return errores;
                }}

                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado')
                }}>

                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <form action='/VirtuosaCrud/admin' className='formulario-login' onSubmit={handleSubmit}>
                        <img src={Logo} alt="logo" />
                        <h1>Inicia sesión</h1>
                        <p>Por favor, diligencie la siguiente información:</p>
                        <div className='form-login-group'>
                            <label htmlFor='email'>Correo electrónico</label>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                placeholder='usuario@gmail.com'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} />

                            {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                        </div>

                        <div className='form-login-group'>
                            <label htmlFor='contraseña'>Contraseña</label>
                            <input
                                type='password'
                                id='contraseña'
                                name='contraseña'
                                placeholder='Ingrese su contraseña'
                                value={values.contraseña}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                            {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
                        </div>

                        <div className='registrate'>
                            <Link to=''>¿No tienes una cuenta? Regístrate</Link>
                        </div>

                        <div className='botones-login'>
                            <button type='submit'>INICIAR SESIÓN</button>


                        </div>

                    </form>
                )}

            </Formik>

            <div className='volver-login'>
                <button><Link to="/Hotelia/"><i className="fa-solid fa-house"></i></Link></button>
            </div>
        </div>
    );
}

export default Login;
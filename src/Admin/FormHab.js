import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/FormHab.css'
import Footer from '../components/Footer/Footer'
import Nevera from '../assets/img/iconos/nevera.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

function FormHab() {
    
    
    return (
        <div>
            <div className='nav-bar-list'>Header</div>

            <div className='container-form-habs'>
                <h1>CREAR HABITACIÓN</h1>

                <form id='formulario' >

                    <div className='line1-habitacion'>
                        <div className='flex-form' id='grupo__nohab'>
                            <label className='formulario__label'>No. de Hab:</label>
                                <div className='grupoinput'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='iconoValidacion'/>
                                    {/* <i class="fa-solid fa-xmark"></i> */}
                                    <input className='no-hab' type='number'  name='numerohab'/>
                                </div>
                                <p className='leyendaError'>lorem lorem lorem</p>
                        </div>

                        <div className='flex-form nombrehab'>
                            <label className='formulario__label'>Nombre de Habitación:</label>
                                <div className='grupoinput'>
                                    <FontAwesomeIcon icon={faCheckCircle} className='iconoValidacion'/>
                                    {/* <i class="fa-solid fa-xmark"></i> */}
                                    <input className='no-hab' type='number'  name='nombrehab'/>
                                </div>
                                <p className='leyendaError'>lorem lorem lorem</p>
                        </div>
                    </div>

                    <div className='line2-habitacion'>
                        <div className='flex-form'>
                            <label className='formulario__label'>Capacidad de Personas:</label>
                            <input type='number' name='cappersonas'/>
                        </div>
                        <div className='flex-form'>
                            <label className='formulario__label'>Precio:</label>
                            <input className='precio-form' type='number' name='precio'/>
                        </div>
                        <div className='flex-form'>
                            <label className='formulario__label'>No. de Camas:</label>
                            <input type='number' name='numerocamas'/>
                        </div>

                    </div>

                    <div className='line3-habitacion'>
                        <div className='flex-form'>
                            <label className='formulario__label'>Descripción:</label>
                            <textarea id="story" rows="5" cols="33" className='textarea'  name='descripcion'/>
                        </div>

                    </div>

                    <div className='line4-habitacion'>
                        <div className='flex-form'>
                            <label className='formulario__label'>Fotos:</label>
                            <input type='text'  name='fotos'/>
                            <input type='text'/>
                            <input type='text'/>
                        </div>

                    </div>
                    <div className='line5-habitacion'>
                        <div className='flex-form'>
                            <h3>Observaciones adicionales:</h3>

                            <div className='flex-si-no'>
                                <div className='line1-selector'>
                                    <div className='flex-form-selector'>
                                        <p ><i className="fa-solid fa-vault"></i>Caja fuerte</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label className='formulario__label' for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label className='formulario__label' for="dewey">No</label>
                                        </div>
                                    </div>

                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-wifi"></i>WI-FI</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label className='formulario__label' for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label className='formulario__label' for="dewey">No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='line2-selector'>
                                    <div className='flex-form-selector'>
                                        <img src={Nevera} alt='nevera' className='nevera'/>
                                        <p>Nevera</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label className='formulario__label' for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label className='formulario__label' for="dewey">No</label>
                                        </div>
                                    </div>

                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-tv"></i>TV</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label className='formulario__label' for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label className='formulario__label' for="dewey">No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='line3-selector'>
                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-bath"></i>Baño</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label className='formulario__label' for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label className='formulario__label' for="dewey">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='btn-form-hab'>
                        <button className='crear-form' type='submit'>CREAR HABITACIÓN</button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default FormHab
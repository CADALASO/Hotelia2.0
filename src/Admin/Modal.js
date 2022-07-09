import React from 'react'

import Nevera from '../assets/img/iconos/nevera.png'
import Cerrar from '../assets/img/iconos/CERRAR.png'
import '../assets/css/ModalEdit.css'
import axios from 'axios';
import { api } from '../utils/peticiones';

function Modal({ habitaciones, close }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.habitacion.value)
        habitaciones.habitacion = e.target.habitacion.value
        habitaciones.descripcion = e.target.descripcion.value
        habitaciones.fotos = e.target.fotos.value
        habitaciones.nocamas = e.target.nocamas.value
        habitaciones.cajasfuertes = e.target.cajasfuertes.value
        habitaciones.tv = e.target.tv.value
        habitaciones.wifi = e.target.wifi.value
        habitaciones.nevera = e.target.nevera.value
        habitaciones.precio = e.target.precio.value
        habitaciones.baño = e.target.baño.value
        axios.put(api + habitaciones.id, habitaciones)
    }

    const handleClose = () => {
        close(false)
    }

    return (
        <div>

            <div className='modalEdit'>
                <div className='formulario'>
                    <div className='cerrar-modal-edit'>
                        <button onClick={handleClose}>
                            <img src={Cerrar} alt='cerrar' />
                        </button>
                    </div>
                    <h1>EDITAR HABITACIÓN</h1>

                    <form onSubmit={handleSubmit} className='formulario-modal'>
                        <div className='colummns-edit'>
                            <div className='column-1'>
                                <div className='line1-habitacion-edit'>
                                    <div className='flex-form-edit  '>
                                        <label>No. de Hab:</label>
                                        <input className='no-hab-edit' />
                                    </div>

                                    <div className='flex-form-edit'>
                                        <label>Nombre de Habitación:</label>
                                        <input className='nombre-hab-edit' />
                                    </div>
                                </div>

                                <div className='line2-habitacion-edit'>
                                    <div className='flex-form-edit capacidad-personas'>
                                        <label>Capacidad de Personas:</label>
                                        <input type='number'/>
                                    </div>
                                    <div className='flex-form-edit precio-edit'>
                                        <label>Precio:</label>
                                        <input className='precio-form-edit' type='number'/>
                                    </div>
                                    <div className='flex-form-edit'>
                                        <label>No. de Camas:</label>
                                        <input className='no-camas' type='number' />
                                    </div>

                                </div>

                                <div className='line3-habitacion-edit'>
                                    <div className='flex-form-edit'>
                                        <label>Descripción:</label>
                                        <textarea id="story" name="story" rows="7" cols="33" className='textarea-edit' />
                                    </div>

                                </div>

                            </div>
                            <div className='column-2'>
                                <div className='line4-habitacion-edit'>
                                    <div className='flex-form-edit'>
                                        <label>Fotos:</label>
                                        <input className='fotos-edit'/>
                                        <input className='fotos-edit'/>
                                        <input className='fotos-edit'/>
                                    </div>
                                </div>
                                <div className='line5-habitacion-edit'>
                                    <div className='flex-form-edit observaciones-edit'>
                                        <h3>Observaciones adicionales:</h3>

                                        <div className='flex-si-no-edit'>
                                            <div className='line1-selector-edit'>
                                                <div className='flex-form-edit-selector'>
                                                    <p>
                                                        <i className="fa-solid fa-vault"></i>Caja fuerte
                                                    </p>
                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" checked />
                                                        <label >No</label>
                                                    </div>
                                                </div>

                                                <div className='flex-form-edit-selector'>
                                                    <p>
                                                        <i className="fa-solid fa-wifi"></i>WI-FI
                                                    </p>
                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" checked />
                                                        <label >No</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='line2-selector-edit'>
                                                <div className='flex-form-edit-selector'>
                                                    <img src={Nevera} alt='nevera' className='nevera-edit' />
                                                    <p>
                                                        Nevera
                                                    </p>
                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" checked />
                                                        <label >No</label>
                                                    </div>
                                                </div>

                                                <div className='flex-form-edit-selector'>
                                                    <p>
                                                        <i className="fa-solid fa-tv"></i>TV
                                                    </p>
                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" checked />
                                                        <label >No</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='line3-selector-edit'>
                                                <div className='flex-form-edit-selector'>
                                                    <p>
                                                        <i className="fa-solid fa-bath"></i>Baño
                                                    </p>
                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input type="radio" checked />
                                                        <label >No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='botones-editar-modal'>
                            <button type='submit'>GUARDAR CAMBIOS</button>
                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default Modal
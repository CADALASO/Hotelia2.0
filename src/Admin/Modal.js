import React, { useState } from 'react'

import Nevera from '../assets/img/iconos/nevera.png'
import Cerrar from '../assets/img/iconos/CERRAR.png'
import '../assets/css/ModalEdit.css'
import axios from 'axios';
import { api } from '../utils/peticiones';
import Swal from 'sweetalert2';

function Modal({ habitacion, close }) {
    const [dataModal, setDataModal] = useState({})

    const handleChangeModal = ({ target }) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    //agregamos otra constante al useState para actualizar el listado después de eliminar 
    const [upList, setUpList] = useState([false]);

    const handleEdit = async(e) => {
        e.preventDefault();
        const response = await axios.put(`${api}/${habitacion._id}`, habitacion);//await espera hasta que se ejcute la petición
        console.log(response);
        if (response.status === 200) {

            Swal.fire(
                'Guardado!',
                `El personaje <strong> ${habitacion.nombrehab}</strong> ha sido guardado exitosamente!`,
                'success'
            )
            handleClose();
            setUpList(!upList);

        } else {
            Swal.fire(
                'Error!',
                'Hubo un problema al registrar el personaje!',
                'error'
            )
        }

        
    }

    const handleClose = () => {
        close(false)
    }

    return (
        <div>

            <div className='modalEdit'>
                <div className='formulario'>
                    <div className='cerrar-modal-edit'>
                        <button onClick={handleClose} className='button-cerrar'>
                            <img src={Cerrar} alt='cerrar' />
                        </button>
                    </div>
                    <h1>EDITAR HABITACIÓN</h1>

                    <form onSubmit={handleEdit} className='formulario-modal'>
                        <div className='colummns-edit'>
                            <div className='column-1'>
                                <div className='line1-habitacion-edit'>
                                    <div className='flex-form-edit  '>
                                        <label>No. de Hab:</label>
                                        <input  value={habitacion._id} onChange={handleChangeModal} name='_id' id='_id' className='no-hab-edit' type='number'/>
                                    </div>

                                    <div className='flex-form-edit'>
                                        <label>Nombre de Habitación:</label>
                                        <input  value={habitacion.nombrehab} onChange={handleChangeModal} name='nombrehab' id='nombrehab' className='nombre-hab-edit' type='text'/>
                                    </div>
                                </div>

                                <div className='line2-habitacion-edit'>
                                    <div className='flex-form-edit capacidad-personas'>
                                        <label>Capacidad de Personas:</label>
                                        <input value={habitacion.capacidad} name='capacidad' id='capacidad' type='number'/>
                                    </div>
                                    <div className='flex-form-edit precio-edit'>
                                        <label>Precio:</label>
                                        <input value={habitacion.valornoche} name='valornoche' id='valornoche' className='precio-form-edit' type='number'/>
                                    </div>
                                    <div className='flex-form-edit'>
                                        <label>No. de Camas:</label>
                                        <input value={habitacion.camas} name='camas' id='camas' className='no-camas' type='number' />
                                    </div>

                                </div>

                                <div className='line3-habitacion-edit'>
                                    <div className='flex-form-edit'>
                                        <label>Descripción:</label>
                                        <textarea value={habitacion.descripcion} id="descripcion" name="descripcion" rows="7" cols="33" className='textarea-edit' />
                                    </div>

                                </div>

                            </div>
                            <div className='column-2'>
                                <div className='line4-habitacion-edit'>
                                    <div className='flex-form-edit  file-select' id="src-file1">
                                        <label>Fotos:</label>
                                        <div className='flex-select-edit'>
                                            <input
                                                value={habitacion.img}
                                                name='img'
                                                id='img'
                                                className='fotos-edit-edit'
                                                type='file' />
                                        </div>
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
                                                        <input 
                                                            name='cajafuerte' 
                                                            id='cajafuerte' 
                                                            type="radio" 
                                                            {...habitacion.cajafuerte=="si"?"Checked":" "}/>
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='cajafuerte' 
                                                            id='cajafuerte' 
                                                            type="radio" 
                                                            {...habitacion.cajafuerte=="si"?"Checked":" "} />
                                                        <label >No</label>
                                                    </div>
                                                </div>

                                                <div className='flex-form-edit-selector'>
                                                    <p>
                                                        <i className="fa-solid fa-wifi"></i>WI-FI
                                                    </p>
                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                        name='wifi' 
                                                        id='wifi' 
                                                        type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                        name='wifi' 
                                                        id='wifi' 
                                                        type="radio" 
                                                        checked />
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
                                                        <input 
                                                            name='nevera' 
                                                            id='nevera' 
                                                            type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='nevera' 
                                                            id='nevera' 
                                                            type="radio" 
                                                            checked />
                                                        <label >No</label>
                                                    </div>
                                                </div>

                                                <div className='flex-form-edit-selector'>
                                                    <p>
                                                        <i className="fa-solid fa-tv"></i>TV
                                                    </p>
                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='tv' 
                                                            id='tv' 
                                                            type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='tv' 
                                                            id='tv' 
                                                            type="radio" 
                                                            checked />
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
                                                        <input 
                                                            name='banio' 
                                                            id='banio' 
                                                            type="radio" />
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='banio' 
                                                            id='banio' 
                                                            type="radio" 
                                                            checked />
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
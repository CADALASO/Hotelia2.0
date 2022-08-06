import React, { useEffect, useState } from 'react'

import Nevera from '../assets/img/iconos/nevera.png'
import Cerrar from '../assets/img/iconos/CERRAR.png'
import '../assets/css/ModalEdit.css'
import axios from 'axios';
import { api } from '../utils/peticiones';
import Swal from 'sweetalert2';

function Modal({ habitacion, close }) {
    

    const handleEdit = async(e) => {
        // e.preventDefault()
        console.log(`${api}${habitacion._id}`)
        const response = await axios.put(`${api}${habitacion._id}`, room);//await espera hasta que se ejcute la petición
        console.log(response);
        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `El personaje <strong> ${habitacion.nombrehab}</strong> ha sido guardado exitosamente!`,
                'success'
            )
            handleClose();
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

    const [room, setRoom] = useState(habitacion)

    const handleValues = (event) => {
        setRoom({...room,[event.target.name]:event.target.value})
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
                                        <input  disabled value={room._id} onChange={handleValues} name='_id' id='_id' className='no-hab-edit' type='number'/>
                                    </div>

                                    <div className='flex-form-edit'>
                                        <label>Nombre de Habitación:</label>
                                        <input value={room.nombrehab} onChange={handleValues} name='nombrehab' id='nombrehab' className='nombre-hab-edit' type='text'/>
                                    </div>
                                </div>

                                <div className='line2-habitacion-edit'>
                                    <div className='flex-form-edit capacidad-personas'>
                                        <label>Capacidad de Personas:</label>
                                        <input value={room.capacidad} onChange={handleValues} name='capacidad' id='capacidad' type='number'/>
                                    </div>
                                    <div className='flex-form-edit precio-edit'>
                                        <label>Precio:</label>
                                        <input value={habitacion.valornoche} onChange={handleValues} name='valornoche' id='valornoche' className='precio-form-edit' type='number'/>
                                    </div>
                                    <div className='flex-form-edit'>
                                        <label>No. de Camas:</label>
                                        <input value={room.camas} onChange={handleValues} name='camas' id='camas' className='no-camas' type='number' />
                                    </div>

                                </div>

                                <div className='line3-habitacion-edit'>
                                    <div className='flex-form-edit'>
                                        <label>Descripción:</label>
                                        <textarea value={room.descripcion} onChange={handleValues} id="descripcion" name="descripcion" rows="7" cols="33" className='textarea-edit' />
                                    </div>

                                </div>

                            </div>
                            <div className='column-2'>
                                <div className='line4-habitacion-edit'>
                                    <div className='flex-form-edit  file-select' id="src-file1">
                                        <label>Fotos:</label>
                                        <div className='flex-select-edit'>
                                            <input
                                                filename={room.img}
                                                name='img'
                                                id='img'
                                                className='fotos-edit-edit'
                                                type='file'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='line4.5-habitacion-edit flex-form-edit'>
                                    <label>Estado:</label>
                                    <select name="estado" className='estado-form-list'>
                                        <option value={habitacion.estado} selected={habitacion.estado==="Disponible"?true:false} className='estado-form-yes'>DISPONIBLE</option>
                                        <option value={habitacion.estado} selected={habitacion.estado==="No disponible"?true:false} className='estado-form-no'>NO DISPONIBLE</option>
                                        <option value={habitacion.estado} selected={habitacion.estado==="En mantenimiento"?true:false} className='estado-form-upkeep'>EN MANTENIMIENTO</option>
                                    </select>

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
                                                            value={true}
                                                            name='cajafuerte' 
                                                            id='cajafuerte' 
                                                            type="radio" 
                                                            checked={room.cajafuerte==="si"?true:false}
                                                            onChange={handleValues}/>
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            value={false}
                                                            name='cajafuerte' 
                                                            id='cajafuerte' 
                                                            type="radio" 
                                                            checked={room.cajafuerte==="no"?true:false}
                                                            onChange={handleValues}/>
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
                                                        type="radio" 
                                                        onChange={handleValues}
                                                        checked={room.wifi==="si"?true:false}/>
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                        name='wifi' 
                                                        id='wifi' 
                                                        type="radio" 
                                                        onChange={handleValues} 
                                                        checked={room.wifi==="no"?true:false}/>
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
                                                            type="radio"
                                                            onChange={handleValues} 
                                                            checked={room.nevera==="si"?true:false}/>
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='nevera' 
                                                            id='nevera' 
                                                            type="radio" 
                                                            onChange={handleValues}
                                                            checked={room.nevera==="no"?true:false} />
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
                                                            type="radio" 
                                                            onChange={handleValues}
                                                            checked={room.tv==="si"?true:false}/>
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='tv' 
                                                            id='tv' 
                                                            type="radio" 
                                                            onChange={handleValues}
                                                            checked={room.tv==="no"?true:false} />
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
                                                            type="radio"
                                                            onChange={handleValues} 
                                                            checked={room.banio==="si"?true:false}/>
                                                        <label>Si</label>
                                                    </div>

                                                    <div className='selectors-radio-edit'>
                                                        <input 
                                                            name='banio' 
                                                            id='banio' 
                                                            type="radio" 
                                                            onChange={handleValues}
                                                            checked={room.banio==="no"?true:false}/>
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
                            <button onClick={()=>handleEdit()}type='button'>GUARDAR CAMBIOS</button>
                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default Modal
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'

import '../assets/css/FormHab.css'
import Footer from '../components/Footer/Footer'
import Nevera from '../assets/img/iconos/nevera.png'

function FormHab() {
    const history = useNavigate();

    /*1.Inicializamos los inputs en el estado, para poder recibir los valores que se digiten 
    en él y controlarlos */
    const [data, setData] = useState({
        id: "",
        _id: "",
        nombrehab: "",
        capacidad: "",
        valornoche: "",
        camas: "",
        descripcion: "",
        img: "",
        safeselection: false,
        tv: false,
        wifi: false,
        nevera: false,
        banio: false
    })
    /*2. Se usa la función handleChange para que cada vez que haya un cambio en el input
    guarde el name y el value del mismo */
    const handleChange = ({ target }) => {
        console.log(target.value)

        //Cada vez que haya un cambio se va a guardar el valor en el estado data
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    /*4. Crear petición asíncrona*/
    const url = "https://hoteliakuepa.herokuapp.com/habitaciones/";

    /*3. funcion para procesar el envío del formulario*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(url, data);//await espera hasta que se ejcute la petición
        //console.log(response);
        if (response.status === 200) {
            Swal.fire(
                'Guardado!',
                `La habitación <strong> ${response.data.habitacion}</strong> ha sido registrada exitosamente!`,
                'success'
            )
            
            // window.location('/Hotelia/list-habitaciones')

        } else {
            Swal.fire(
                'Error!',
                'Hubo un problema al registrar la habitación!',
                'error'
            )
        }
    }

    return (
        <div>
            <div className='nav-bar-list'>Header</div>

            <div className='container-form-habs'>
                <h1>CREAR HABITACIÓN</h1>

                <form id='formulario' onSubmit={handleSubmit}>

                    <div className='line1-habitacion'>
                        <div className='flex-form' id='grupo__nohab'>
                            <label className='formulario__label'>No. de Hab:</label>
                            
                            <input 
                                className='no-hab' 
                                placeholder="Ingrese el número de la habitación"
                                type='number' 
                                name='_id' 
                                value={data._id}
                                onChange={handleChange}
                                />

                        </div>

                        <div className='flex-form nombrehab'>
                            <label className='formulario__label'>Nombre de Habitación:</label>
                            <input 
                                placeholder="Ej: President's Suite"
                                className='no-hab' 
                                type='text' 
                                name='nombrehab'
                                value={data.nombrehab}
                                onChange={handleChange} 
                                />

                        </div>
                    </div>

                    <div className='line2-habitacion'>
                        <div className='select-estado-form flex-form'>
                            <label className='formulario__label estado-label'>Estado:</label>
                            <select name="estado" className='estado-form'>
                                <option value="value1" className='estado-form-yes'>DISPONIBLE</option>
                                <option value="value2" className='estado-form-no'selected>NO DISPONIBLE</option>
                                <option value="value3" className='estado-form-upkeep'>EN MANTENIMIENTO</option>
                            </select>
                        </div>
                        <div className='flex-form flex-form-line2'>
                            <label className='formulario__label'>Capacidad de Personas:</label>
                            <input 
                                type='number' 
                                name='capacidad' 
                                value={data.capacidad}
                                onChange={handleChange} 
                                />
                        </div>
                        <div className='flex-form flex-form-line2'>
                            <label className='formulario__label'>Precio:</label>
                            <input 
                                placeholder="Ej: 000000"
                                className='precio-form' 
                                type='number' 
                                name='valornoche' 
                                value={data.valornoche}
                                onChange={handleChange} 
                                />
                        </div>
                        <div className='flex-form flex-form-line2'>
                            <label className='formulario__label'>No. de Camas:</label>
                            <input 
                                className='camas-input-form'
                                type='number' 
                                name='camas'
                                value={data.camas}
                                onChange={handleChange} 
                                />
                        </div>

                    </div>

                    <div className='line3-habitacion'>
                        <div className='flex-form'>
                            <label className='formulario__label'>Descripción:</label>
                            <textarea
                                value={data.descripcion}
                                onChange={handleChange} 
                                placeholder="Ingrese la descripción de la habitación" 
                                id="story" 
                                rows="5" 
                                cols="33" 
                                className='textarea' 
                                name='descripcion' />
                        </div>

                    </div>

                    <div className='line4-habitacion'>
                        <div className='flex-form  file-select-form'>
                            <label>Fotos:</label>
                            <div className='flex-select-form'>
                                <input 
                                    // value={`https://hoteliakuepa.herokuapp.com${data.img}`}
                                    value={data.img}
                                    onChange={handleChange} 
                                    className='fotos-edit-form' 
                                    type='file' />
                            </div>


                        </div>

                    </div>
                    <div className='line5-habitacion'>
                        <div className='flex-form'>
                            <h3>Observaciones adicionales:</h3>

                            <div className='flex-si-no'>
                                <div className='line1-selector'>
                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-vault"></i>Caja fuerte</p>
                                        <div className='selectors-radio'>
                                            <input 
                                                type="radio" 
                                                name="safeselection" 
                                                onChange={handleChange} 
                                                value={true}
                                                />
                                            <label className='formulario__label'>Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input 
                                                type="radio" 
                                                name="safeselection"
                                                onChange={handleChange}
                                                value={false}
                                                />
                                            <label className='formulario__label'>No</label>
                                        </div>
                                    </div>

                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-wifi"></i>WI-FI</p>
                                        <div className='selectors-radio'>
                                            <input 
                                                type="radio"
                                                name='wifi'
                                                onChange={handleChange}
                                                value={true}/>
                                            <label className='formulario__label'>Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input 
                                                type="radio"
                                                name='wifi'
                                                onChange={handleChange}
                                                value={false}/>
                                            <label className='formulario__label'>No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='line2-selector'>
                                    <div className='flex-form-selector'>
                                        <img src={Nevera} alt='nevera' className='nevera' />
                                        <p>Nevera</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" 
                                            name='nevera'
                                            onChange={handleChange}
                                            value={true}/>
                                            <label className='formulario__label'>Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" 
                                            name='nevera'
                                            onChange={handleChange}
                                            value={false}/>
                                            <label className='formulario__label'>No</label>
                                        </div>
                                    </div>

                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-tv"></i>TV</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" 
                                            name='tv'
                                            onChange={handleChange}
                                            value={true}/>
                                            <label className='formulario__label'>Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" 
                                            name='tv'
                                            onChange={handleChange}
                                            value={false}/>
                                            <label className='formulario__label'>No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='line3-selector'>
                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-bath"></i>Baño</p>
                                        <div className='selectors-radio'>
                                            <input 
                                                type="radio"
                                                name='banio'
                                                onChange={handleChange}
                                                value={true} />
                                            <label className='formulario__label'>Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input 
                                                type="radio"
                                                name='banio'
                                                onChange={handleChange}
                                                value={false} />
                                            <label className='formulario__label'>No</label>
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
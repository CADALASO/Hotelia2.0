import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from '../utils/peticiones';
import Nevera from '../assets/img/iconos/nevera.png'
import Footer from '../components/Footer/Footer';
import ModalEdit from '../Admin/Modal'

import '../assets/css/ListHabs.css';
import Swal from 'sweetalert2';

function ListHabs() {
    const [habitaciones, setHabitaciones] = useState([]);
    useEffect(() => {
        axios(api).then(res => {
            console.log(res)
            setHabitaciones(res.data)
        })

    }, [])

    const [modal, setModal] = useState(false);
    const [habitacion, setHabitacion] = useState({})

    
    const apidelete = 'https://hoteliakuepa.herokuapp.com/habitaciones/id'

    
    return (
        <div>
            <div className='nav-bar-list'>Header</div>

            <div className='container-list-habs'>
                <h1>HABITACIONES</h1>

                <div className='cards-list-habs'>
                    {
                        habitaciones?.map(habitacion => (
                            <div className='flex-list-habs' key={habitacion._id}>
                                <div className="container-list" key={habitacion._id}>
                                    <div className="image-card-slide">
                                        <img src={`https://hoteliakuepa.herokuapp.com${habitacion.img}`} className="habs-cards-list" alt="fotos"/>

                                    </div>

                                    <div className="button-card-inicio-list">
                                        <div className='disponible'>
                                            <button className="disponible-cards-list"><i className="fa-solid fa-circle"></i>DISPONIBLE</button>
                                            {/* <select name="estado">
                                                <option value="value1">Value 1</option>
                                                <option value="value2" selected>Value 2</option>
                                                <option value="value3">Value 3</option>
                                            </select> */}
                                        </div>

                                        <button
                                            onClick={() => {
                                                setModal(true)
                                                setHabitacion(habitacion)
                                                console.log(habitacion)
                                            }}
                                            className="editar-cards-list">EDITAR
                                        </button>
                                        
                                
                                    </div>

                                    <div className="card-list">
                                        {/*  ---------- CARD PARTE delantera ---------- */}
                                        <div className="card__1-list" key={habitacion._id}>
                                            <div className="content__1-list">
                                                <div className="cards-list" id='habitacion'>
                                                    <div className="contenido-list">
                                                        <h1 className='list-h1'>{habitacion.nombrehab}</h1>
                                                        <p className='descrip'>{habitacion.descripcion}</p>
                                                        <h2 className='precio-front-list'>{habitacion.valornoche} COP / NOCHE</h2>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        {/*  ---------- CARD PARTE TRASERA ---------- */}
                                        <div className="card__2-list">
                                            <div className="content__2-list">

                                                <div className="line-1-list">
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-bed"></i>
                                                        <p>{habitacion.camas} cama(s)</p>
                                                    </div>
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-vault"></i>
                                                        <p>{habitacion.cajasfuertes?"Si":"No"}</p>
                                                    </div>
                                                </div>

                                                <div className="line-2-list">
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-tv"></i>
                                                        <p>{habitacion.tv?"Si":"No"}</p>
                                                    </div>
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-wifi"></i>
                                                        <p>{habitacion.wifi?"Si":"No"}</p>
                                                    </div>
                                                </div>

                                                <div className="line-3-list">
                                                    <div className='texto-icono-cardback-list'>
                                                        <img src={Nevera} alt='nevera' />
                                                        <p>{habitacion.nevera?"Si":"No"}</p>
                                                    </div>
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-bath"></i>
                                                        <p>{habitacion.banio?"Si":"No"}</p>
                                                    </div>
                                                </div>

                                                <div className='precio-list'>
                                                    <p className='titulo-precio'>PRECIO</p>
                                                    <p>{habitacion.valornoche} COP / NOCHE</p>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>


                        ))
                    }
                </div>
                {
                    modal ? <ModalEdit close={setModal} habitacion={habitacion} /> : null
                }

            </div>

            <Footer />
        </div>
    )
}

export default ListHabs
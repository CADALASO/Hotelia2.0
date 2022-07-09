import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ImageCardSlide from '../components/INICIO/ImageCardSlide';
import { api } from '../utils/peticiones';
import Nevera from '../assets/img/iconos/nevera.png'
import Footer from '../components/Footer/Footer';


import ModalEdit from '../Admin/Modal'

import '../assets/css/ListHabs.css'
function ListHabs() {
    const [modal, setModal] = useState(false);
    const [habitacion, setHabitacion] = useState({})

    const [habitaciones, setHabitaciones] = useState([]);
    useEffect(() => {
        axios(api).then(res => {
            console.log(res)
            setHabitaciones(res.data)
        })

    }, [])
    return (
        <div>
            <div className='nav-bar-list'>Header</div>

            <div className='container-list-habs'>
                <h1>HABITACIONES</h1>

                <div className='cards-list-habs'>
                    {
                        habitaciones?.map(habitaciones => (
                            <div className='flex-list-habs'>
                                <div class="container-list">
                                    <div className="image-card-slide">
                                        <ImageCardSlide carousel={habitaciones.fotos} />

                                    </div>

                                    <div className="button-card-inicio-list">
                                        <div className='disponible'>
                                            <button className="disponible-cards-list"><i class="fa-solid fa-circle"></i>DISPONIBLE</button>
                                        </div>

                                        <button
                                            onClick={() => {
                                                setModal(true)
                                                setHabitacion(habitaciones)
                                            }}
                                            className="reservar-cards-list">EDITAR
                                        </button>

                                    </div>

                                    <div class="card-list">
                                        {/*  ---------- CARD PARTE delantera ---------- */}
                                        <div class="card__1-list">
                                            <div class="content__1-list">
                                                <div className="cards-list" id='habitacion'>
                                                    <div className="card__1">
                                                        <h1 className='list-h1'>{habitaciones.habitacion}</h1>
                                                        <p>{habitaciones.descripcion}</p>
                                                        <h2>{habitaciones.precio}</h2>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        {/*  ---------- CARD PARTE TRASERA ---------- */}
                                        <div className="card__2-list">
                                            <div className="content__2">

                                                <div className="line-1-list">
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-bed"></i>
                                                        <p>{habitaciones.nocamas}</p>
                                                    </div>
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-vault"></i>
                                                        <p>{habitaciones.cajasfuertes}</p>
                                                    </div>
                                                </div>

                                                <div className="line-2-list">
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-tv"></i>
                                                        <p>{habitaciones.tv}</p>
                                                    </div>
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-wifi"></i>
                                                        <p>{habitaciones.wifi}</p>
                                                    </div>
                                                </div>

                                                <div className="line-3-list">
                                                    <div className='texto-icono-cardback-list'>
                                                        <img src={Nevera} alt='nevera' />
                                                        <p>{habitaciones.nevera}</p>
                                                    </div>
                                                    <div className='texto-icono-cardback-list'>
                                                        <i className="fa-solid fa-bath"></i>
                                                        <p>{habitaciones.baño}</p>
                                                    </div>
                                                </div>

                                                <div className='precio-list'>
                                                    <h1>PRECIO</h1>
                                                    <p>{habitaciones.precio}</p>
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
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from '../utils/peticiones';
import Nevera from '../assets/img/iconos/nevera.png'
import Habitacion from '../assets/img/slide3-inicio.png'
import Footer from '../components/Footer/Footer';
import ModalEdit from '../Admin/Modal'

import '../assets/css/ListHabs.css';
import Swal from 'sweetalert2';

function ListHabs() {
    const [habitaciones, setHabitaciones] = useState([]);
    const [modal, setModal] = useState(false);
    const [habitacion, setHabitacion] = useState({})
    

    useEffect(() => {
        if(!modal)
        axios(api).then(res => {
            console.log(res)
            setHabitaciones(res.data)
        })

    }, [modal])

    // const handleSelect = async(room, selectedStatus) =>{
    //     const response = await axios.put(`${api}${room._id}`, {...room, estado: selectedStatus});

    // }

    return (
        <div>
            <div className='nav-bar-list'>Header</div>
            
            <div className='container-list-habs'>
                <h1>HABITACIONES</h1>
            
            
            
                <div className='cards-list-habitaciones'>
                    {
                        habitaciones?.map(habitacion => (
                            <div className='list-cards-vertical'>
                                <div className='info-image-card'>
                                    <div className='cards-horizontal' key={habitacion._id}>
                                        <div className='out'>
                                            <div className='info-list'>
                                                <h1 >{habitacion.nombrehab}</h1>
                                                <p >{habitacion.descripcion}</p>

                                                <div className='price-list'>
                                                    <h1>PRECIO</h1>
                                                    <p>{habitacion.valornoche} COP / NOCHE</p>
                                                </div>
                                            </div>

                                            <div className='details'>
                                                <div className="lines">
                                                    <div className='each-thing'>
                                                        <i className="fa-solid fa-bed"></i>
                                                        <p>{habitacion.camas} cama(s)</p>
                                                    </div>
                                                    <div className='each-thing'>
                                                        <i className="fa-solid fa-vault"></i>
                                                        <p>{habitacion.cajafuerte ? "Si" : "No"}</p>
                                                    </div>
                                                </div>

                                                <div className="lines">
                                                    <div className='each-thing'>
                                                        <i className="fa-solid fa-tv"></i>
                                                        <p>{habitacion.tv ? "Si" : "No"}</p>
                                                    </div>
                                                    <div className='each-thing'>
                                                        <i className="fa-solid fa-wifi"></i>
                                                        <p>{habitacion.wifi ? "Si" : "No"}</p>
                                                    </div>
                                                </div>

                                                <div className="lines">
                                                    <div className='each-thing'>
                                                        <img src={Nevera} alt='nevera' />
                                                        <p>{habitacion.nevera ? "Si" : "No"}</p>
                                                    </div>
                                                    <div className='each-thing'>
                                                        <i className="fa-solid fa-bath"></i>
                                                        <p>{habitacion.banio ? "Si" : "No"}</p>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        setModal(true)
                                                        setHabitacion(habitacion)
                                                        console.log(habitacion)
                                                    }}
                                                    className="edit-rooms">EDITAR
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='image-room'>
                                        {/* <img src={`https://hoteliakuepa.herokuapp.com${habitacion.img}`} className="img-rooms" alt="fotos"/> */}
                                        <img src={Habitacion} alt='foto' />
                                    </div>
                                </div>

                            </div>
                        )
                        )
                    }
                </div>
                {
                    modal ? <ModalEdit close={setModal} habitacion={habitacion} /> : null
                }
            </div>

            <Footer/>
        </div>
    )
}

export default ListHabs
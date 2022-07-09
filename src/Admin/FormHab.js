import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/FormHab.css'
import Footer from '../components/Footer/Footer'
import Nevera from '../assets/img/iconos/nevera.png'

function FormHab() {
    return (
        <div>
            <div className='nav-bar-list'>Header</div>

            <div className='container-form-habs'>
                <h1>CREAR HABITACIÓN</h1>

                <form>

                    <div className='line1-habitacion'>
                        <div className='flex-form'>
                            <label>No. de Hab:</label>
                            <input className='no-hab' />
                        </div>

                        <div className='flex-form nombre-hab'>
                            <label>Nombre de Habitación:</label>
                            <input className='nombre-hab' />
                        </div>
                    </div>

                    <div className='line2-habitacion'>
                        <div className='flex-form'>
                            <label>Capacidad de Personas:</label>
                            <input />
                        </div>
                        <div className='flex-form'>
                            <label>Precio:</label>
                            <input className='precio-form'/>
                        </div>
                        <div className='flex-form'>
                            <label>No. de Camas:</label>
                            <input />
                        </div>

                    </div>

                    <div className='line3-habitacion'>
                        <div className='flex-form'>
                            <label>Descripción:</label>
                            <textarea id="story" name="story" rows="5" cols="33" className='textarea' />
                        </div>

                    </div>

                    <div className='line4-habitacion'>
                        <div className='flex-form'>
                            <label>Fotos:</label>
                            <input />
                            <input />
                            <input />
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
                                            <input type="radio" />
                                            <label for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label for="dewey">No</label>
                                        </div>
                                    </div>

                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-wifi"></i>WI-FI</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label for="dewey">No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='line2-selector'>
                                    <div className='flex-form-selector'>
                                        <img src={Nevera} alt='nevera' className='nevera'/>
                                        <p>Nevera</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label for="dewey">No</label>
                                        </div>
                                    </div>

                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-tv"></i>TV</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label for="dewey">No</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='line3-selector'>
                                    <div className='flex-form-selector'>
                                        <p><i className="fa-solid fa-bath"></i>Baño</p>
                                        <div className='selectors-radio'>
                                            <input type="radio" />
                                            <label for="huey">Si</label>
                                        </div>

                                        <div className='selectors-radio'>
                                            <input type="radio" checked />
                                            <label for="dewey">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className='btn-form-hab'>
                        <button className='crear-form'>CREAR HABITACIÓN</button>
                        <Link to="/Hotelia/list-habitaciones" className="volver"><button className='volver-form'>VOLVER</button></Link>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default FormHab
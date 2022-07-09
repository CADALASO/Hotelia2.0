import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/css/Inicio.css';

function FormBuscar() {
  return (
    <div>
        <div className='buscar-inicio'>
            <form>
                <div className='inputs'>
                    <label className="fecha">FECHA INGRESO</label>
                    <input type="date" name="fecha"/> 
                </div>

                <div className='inputs'>
                    <label className="fecha">FECHA SALIDA</label>
                    <input type="date" name="fecha"/> 
                </div>

                <div className='inputs'>
                    <div className='habs-flex'>
                        <div className='habs-label'>
                            <label>HUÉSPEDES</label>
                            <input type='number' placeholder='Huésped' className='icono-image-2 hab border-hab-2'/>
                        </div>
                    
                        <div className='habs-label'>
                            <label>HABITACIONES</label>
                            <input type='number' placeholder='Hab.' className='icono-image hab border-hab-1'/>
                        </div>
                    
                    </div>
                    
                </div>

                <Link to='#'><button className='buscar-inicio-btn'>BUSCAR</button></Link>
            </form>
            
        </div>
    </div>
  )
}

export default FormBuscar
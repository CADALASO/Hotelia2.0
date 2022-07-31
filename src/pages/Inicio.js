import React from 'react'

import '../assets/css/Inicio.css'

import Header from '../components/Header/Header'
import SimpleSlider from '../components/INICIO/Slide'
import FormBuscar from '../components/INICIO/FormBuscar'
import CardSlide from '../components/INICIO/CardSlide'
import ExpSlide from '../components/INICIO/ExpSlide'
import Maps from '../assets/img/mapa.png'
import Footer from '../components/Footer/Footer'
import DescubreSlide from '../components/INICIO/DescubreSlide'

function Inicio() {

  return (
    <div>
        <Header/>

        <div className='section-banner'>
            <SimpleSlider/>
            <FormBuscar/>
        </div>
        

        <div className='descubre-hotelia' id='acerca-de-nosotros' >
            <div className='descubre'>
                <h1>Descubre Hotelia</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim iaculis sit faucibus non. Amet nec massa faucibus non est. Arcu elementum id ac suspendisse vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <DescubreSlide/>
            </div>
        </div>
        <div className='habitaciones-precios' id='habitacion'>
            <h1>Habitaciones & Precios</h1>

            <div className='container-cards-inicio'>
                <CardSlide/>
            </div>
        </div> 

        <div className='experiencias'>
            <div className='text-experiencias'>
                <div className='text-exp-description'>
                    <ExpSlide/>
                </div>
            </div>
        </div>

        <div className='descubre-hotelia'>
            <div className='descubre'>
                <h1>Nuestra ubicación</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim iaculis sit faucibus non. Amet nec massa faucibus non est. Arcu elementum id ac suspendisse vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='ubicacion'>
                <img src={Maps} alt='cargando...'/>
            </div>
        </div>

          

        <Footer/>
        
    </div>
  )
}

export default Inicio
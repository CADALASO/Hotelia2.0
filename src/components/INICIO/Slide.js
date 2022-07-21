import React, { Component } from "react";
import Slider from "react-slick";
import '../../assets/css/Inicio.css'


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 350,
            slidesToShow: 1,
            slidesToScroll: 1
            
        };
        return (
            <div className="banner-inicio">
                <Slider {...settings}>
                    <div>
                        <div className='banner-inicio-1'>
                            <h1>¡BIENVENIDOS A HOTELIA!</h1>
                            <h4>LA MEJOR EXPERIENCIA, AL MEJOR PRECIO</h4>
                        </div>
                    </div>
                    <div>
                        <div className='banner-inicio-2'>
                            <h1>MOMENTOS ÚNICOS E IRREPETIBLES</h1>
                        </div>
                    </div>
                    <div>
                        <div className='banner-inicio-3'>
                            <h1>PREGUNTA POR NUESTRAS HABITACIONES</h1>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
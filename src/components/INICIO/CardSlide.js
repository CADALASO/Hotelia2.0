/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import ImageCardSlide from './ImageCardSlide';
import { api } from '../../utils/peticiones';
import '../../assets/css/Inicio.css'
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#157A8A", borderRadius: "35px", height: "20px", width: "35px", paddingTop: "0.6rem", padding: "0.2rem" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#157A8A", borderRadius: "35px", height: "20px", width: "35px", paddingTop: "0.6rem", padding: "0.2rem" }}
            onClick={onClick}
        />
    );
}


function CardSlide() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [habitaciones, setHabitaciones] = useState([]);
    useEffect(() => {
        axios(api).then(res => {
            console.log(res)
            setHabitaciones(res.data)
        })

    }, [])


    return (
        <div>
            <Slider {...settings}>
                {
                    habitaciones?.map(habitaciones => (
                        <>
                            <div className="cards" id='habitacion'>
                                <ImageCardSlide carousel={habitaciones.fotos} />
                                <a href={"#modal" + habitaciones.id} >
                                    <h1>{habitaciones.habitacion}</h1>
                                </a>
                                <p>{habitaciones.descripcion}</p>
                                <h2>{habitaciones.precio}</h2>
                                <Link to='#'><button className="reservar-cards">RESERVAR</button></Link>
                            </div>

                            {/*   

                            <div id={"modal" + habitaciones.id} className="modal">
                                <a href="#habitacion" className="close"> X </a>
                                <div className="modalContainer" >
                                    <figure className="modalPicture ">
                                        <ImageCardSlide carousel={habitaciones.fotos} />
                                    </figure>
                                    <figure className="modalTEXT">
                                        <h2 className="modalTitle">{habitaciones.producto}</h2>
                                        <p className="modalP">{habitaciones.descripcion}
                                        </p>
                                    </figure>
                                </div>
                            </div>
                            */}
                        </>

                    ))
                    
                }
            </Slider>
        </div>
    );
}

export default CardSlide

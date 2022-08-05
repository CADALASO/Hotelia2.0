/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Nevera from '../../assets/img/iconos/nevera.png'
import { api } from '../../utils/peticiones';
import '../../assets/css/CardSlide.css'
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            },
            {
                breakpoint: 481,
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
        <div className="">
            <Slider {...settings}>
                {
                    habitaciones?.map(habitaciones => (
                        <div className="container">
                            <div className="image-card-slide">
                                <img src={`https://hoteliakuepa.herokuapp.com${habitaciones.img}`} className="habs-cards" alt="fotos"/>
                            </div>

                            <div className="button-card-inicio">
                                <Link to='#'><button className="reservar-cards">RESERVAR</button></Link>
                            </div>
                            
                            <div className="card">
                                {/*  ---------- CARD PARTE delantera ---------- */}
                                <div className="card__1">
                                    <div className="content__1">
                                        <div className="cards" id='habitacion'>
                                            <div className=" contenido-card">
                                                <h1>{habitaciones.nombrehab}</h1>
                                                <p>{habitaciones.descripcion}</p>
                                                <h2>{habitaciones.valornoche} COP / NOCHE</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*  ---------- CARD PARTE TRASERA ---------- */}
                                <div className="card__2">
                                    <div className="content__2">

                                        <div className="line-1">
                                            <div className='texto-icono-cardback'>
                                                <i className="fa-solid fa-bed"></i>
                                                <p>{habitaciones.camas} camas</p>
                                            </div>
                                            <div className='texto-icono-cardback'>
                                                <i className="fa-solid fa-vault"></i>
                                                <p>{habitaciones.cajafuerte}</p>
                                            </div>
                                        </div>

                                        <div className="line-2">
                                            <div className='texto-icono-cardback'>
                                                <i className="fa-solid fa-tv"></i>
                                                <p>{habitaciones.tv}</p>
                                            </div>
                                            <div className='texto-icono-cardback'>
                                                <i className="fa-solid fa-wifi"></i>
                                                <p>{habitaciones.wifi}</p>
                                            </div>
                                        </div>

                                        <div className="line-3">
                                            <div className='texto-icono-cardback'>
                                                <img src={Nevera} alt='nevera' />
                                                <p>{habitaciones.nevera}</p>
                                            </div>
                                            <div className='texto-icono-cardback'>
                                                <i className="fa-solid fa-bath"></i>
                                                <p>{habitaciones.banio}</p>
                                            </div>
                                        </div>

                                        <div className='precio'>
                                            <h1>PRECIO</h1>
                                            <p>{habitaciones.valornoche} COP / NOCHE</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>

                    ))

                }
            </Slider>
        </div>
    );
}

export default CardSlide

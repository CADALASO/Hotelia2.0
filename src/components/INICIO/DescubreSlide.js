import React  from "react";
import Slider from "react-slick";
import Descubre1 from '../../assets/img/descubreHL1.png';
import Descubre2 from '../../assets/img/descubreHL2.png'
import Descubre3 from '../../assets/img/descubreHL3.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#157A8A", borderRadius: "35px", height: "20px", width: "35px", paddingTop: "0.6rem", padding: "0.2rem", margin: '0 -2rem' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#157A8A", borderRadius: "35px", height: "20px", width: "35px", paddingTop: "0.6rem", padding: "0.2rem",margin: '0 -2rem' }}
            onClick={onClick}
        />
    );
}


function DescubreSlide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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


    return (
        <div className='descubre-galeria'>
            <Slider {...settings}>
                <div>
                    <img src={Descubre1} alt="foto1"/>
                </div>
                <div>
                    <img src={Descubre2} alt="foto1"/>
                </div>
                <div>
                    <img src={Descubre3} alt="foto1"/>
                </div>
            </Slider>
        </div>
    );
}

export default DescubreSlide
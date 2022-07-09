import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "#157A8A", borderRadius: "35px", height: "20px", width: "35px", paddingTop: "0.6rem", padding: "0.2rem" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "#157A8A", borderRadius: "35px", height: "20px", width: "35px", paddingTop: "0.6rem", padding: "0.2rem" }}
            onClick={onClick}
        />
    );
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };
        return (
            <div className="slide-expe">
                <Slider {...settings}>
                    <div>
                        <p>Un hotel excelente por el buen servicio con una buena ubicación, un buffet magnífico. Nuestra estancia ha sido muy confortable y nos hemos sentido excelentemente tratados. Volveremos y lo recomendaremos. Muchas gracias por todo…</p>
                    </div>
                    <div>
                        <p>Habitaciones amplísimas y muy muy cómodas. Se respeta el protocolo de bioseguridad y el personal es muy amable y proactivo.
                            Muy bien ubicado. <br/>El personal de servicio es muy atento y amable. El desayuno se incluye en el precio y es buenísimo. La ubicación es perfecta.</p>
                    </div>
                    <div>
                        <p>Acabamos de llegar al hotel desde republica Dominicana y es un hotel excelente, de mucha calidad, buen servicio. Una terraza en su 5to. Piso bellísima y sobre todo tiene buen precio.
                        La atención de todo el personal es excelente. Las habitaciones como era de esperar, grandes y cómodas.
                        </p>
                    </div>
                </Slider>
            </div>
        );
    }
}
import React from "react";
import Slider from "react-slick";

import '../../assets/css/Inicio.css'


function ImageCardSlide({ carousel }) {
  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
  };
  return (
    <div>
      <Slider {...settings}>
        {
          carousel?.map((imagen, index) => {
            switch (imagen[0]) {
              case "img":
                return <div key={index}>
                  <img src={imagen[1]} alt="slider" className="habs-cards" />
                </div>;
              default:
                break;
            }
          })
        }
      </Slider>
    </div>
  );
}

export default ImageCardSlide;
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src="assets/images/carrusel-inicio/mercado-online.png"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src="assets/images/carrusel-inicio/fresco-organico-20250914160459SEIf.png"></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src="assets/images/carrusel-inicio/banner-3.png"></img>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;
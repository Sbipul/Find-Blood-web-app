import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carosel.css'

const Carosel = () => {
    return (
        <Carousel id="home" fade>
            <Carousel.Item style={{height:'60vh'}}>
                <img
                style={{objectFit:'cover'}}
                className="d-block w-100 h-100"
                src="https://i.ibb.co/25NkwDs/399895-Mother-s-Day-tears-banner.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{height:'60vh'}}>
                <img
                // style={{objectFit:'cover'}}
                className="d-block w-100 h-100"
                src="http://www.brilliantread.com/wp-content/uploads/2017/07/blood-donation-quotes.jpeg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{height:'60vh'}}>
                <img
                style={{objectFit:'cover'}}
                className="d-block w-100 h-100"
                src="https://media.istockphoto.com/photos/a-person-holding-red-heart-in-hands-donate-and-family-insurance-on-picture-id1164870804?k=20&m=1164870804&s=612x612&w=0&h=v3hoZeVZ2AM4SRBAe6w_UgpZtPXQTExDpOCt6Tfr5_A="
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Carosel;
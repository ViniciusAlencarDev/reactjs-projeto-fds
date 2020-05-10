import React from 'react';
import './style.css';
import CarouselImg from '../../assets/images/carousel.jpeg';
import Carousel from 'react-bootstrap/Carousel';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
    return(
        <>            
        <div id='container'>
            <Header />
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg}
                        alt="First slide"
                    />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselImg}
                    alt="Third slide"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselImg}
                    alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            <section id= 'introducao'> 
                <h1>Estacionamento</h1>
                <p class='col-md-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti nihil repellendus dolor quibusdam ducimus soluta possimus odit doloribus cumque nisi iste beatae ab a, architecto neque ad ea commodi.</p>
            </section>  
            </div>
            <Footer />
        </>
    );
}
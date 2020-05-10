import React from 'react';
import './style.css';
import Logo from '../../assets/images/logo.png';
import CarouselImg from '../../assets/images/carousel.jpeg';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return(
        <>            
        <div id='container'>
            <img src= {Logo}/>
            <nav>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link" href="#">Início</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Solicitar/Agendar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Histórico</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Vagas Disponíveis</a>
                </li>
            </ul>
            </nav>
            
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti nihil repellendus dolor quibusdam ducimus soluta possimus odit doloribus cumque nisi iste beatae ab a, architecto neque ad ea commodi.</p>
        </section>  
        </div>
        <footer>
            Desenvolvido por: @Alef.Ribeiro, @ViniciusAlencarDev e @EltonLisboa.
        </footer>
        </>
    );
}
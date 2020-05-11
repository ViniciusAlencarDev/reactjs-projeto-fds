import React from 'react';
import './style.css';

export default function Header() {
    return(
        <>
            <footer>
                <hr />
                <p>Desenvolvido por:</p>
                <a href="https://github.com/alef-ribeiro" target="_blank" rel="noopener noreferrer">@Alef.Ribeiro</a>,
                <span> </span>
                <a href="https://github.com/viniciusalencardev" target="_blank" rel="noopener noreferrer">@ViniciusAlencarDev </a> e
                <span> </span>
                <a href="https://github.com/eltonlisboa" target="_blank" rel="noopener noreferrer">@EltonLisboa.</a>
            </footer>
        </>
    );
}
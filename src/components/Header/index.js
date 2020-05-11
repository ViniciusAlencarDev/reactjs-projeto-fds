import React from 'react';
import './style.css';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <>
            <nav>
                <img src= {Logo} id="logo" alt="logo" />
                <ul id="menu" class="nav nav-pills">
                    <li class="nav-item">
                        <Link to="/" className="nav-link">Início</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/solicitacao" className="nav-link">Solicitar/Agendar</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/historico" className="nav-link">Histórico</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/vagas" className="nav-link">Vagas Disponíveis</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
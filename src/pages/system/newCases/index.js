import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import './style.css';
import { Link } from 'react-router-dom';
import logoImg from '../../../assets/images/logo.png';

const newCases = () => {
    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
            <Header title="Novos Casos"/>
            <div className="container-fluid">
                <div className="grid-new-case p-4">
                    <div className="box-new-case px-4 py-3">
                        <div className="img-profile">
                            <img src={logoImg} alt="Heroes" className="w-100"/>
                        </div>
                        <div className="d-flex flex-column">
                            <h2>Nome:</h2>
                            <p>Descrição:</p>
                            <div className="row justify-content-between px-3">
                                <Link to="detalhes-caso">Ver Detalhes</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default newCases;
import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import './style.css';
import { Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi'

const Dashboard = () => {
    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
            <Header title="Casos"/>
            <div className="container-fluid">
                <div className="grid-case p-4">
                    <div className="box-case px-4 py-3">
                        <FiTrash className="icon-trash"/>
                        <h2>Caso:</h2>
                        <p>Descrição:</p>
                        <p>Usuario:</p>
                        <div className="row justify-content-between px-3">
                            <p>Status</p>
                            <Link to="meu-caso">Ver Detalhes</Link>
                        </div>
                    </div>
                    <div className="box-case px-4 py-3">
                        <FiTrash className="icon-trash"/>
                        <h2>Caso:</h2>
                        <p>Descrição:</p>
                        <p>Usuario:</p>
                        <div className="row justify-content-between px-3">
                            <p>Status</p>
                            <Link to="meu-caso">Ver Detalhes</Link>
                        </div>
                    </div>
                    <div className="box-case px-4 py-3">
                        <FiTrash className="icon-trash"/>
                        <h2>Caso:</h2>
                        <p>Descrição:</p>
                        <p>Usuario:</p>
                        <div className="row justify-content-between px-3">
                            <p>Status</p>
                            <Link to="meu-caso">Ver Detalhes</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;
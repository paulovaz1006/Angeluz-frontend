import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';

const footer = () => {
    return(
        <footer className="py-8 py-md-11 p-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <img src="./assets/img/brand.svg" alt="..." className="footer-brand img-fluid mb-2" />
                        <p className="text-gray-700 mb-2 font-weight-bold text-white">
                            Redes Sociais
                        </p>
                        <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
                            <li className="list-inline-item list-social-item mr-3">
                                <Link to="/" className="text-decoration-none">
                                    <FaInstagram color="#fff"/>
                                </Link>
                            </li>
                            <li className="list-inline-item list-social-item mr-3">
                                <Link to="/" className="text-decoration-none">
                                    <FaFacebook color="#fff"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mt-4">
                        <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                            <li className="mb-3">
                                <Link to="/" className="text-white">Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mt-4">
                        <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
                            <li className="mb-3">
                                <Link to="/" className="text-white">Sobre</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0 mt-4">
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-3">
                                <Link to="/" className="text-white">Contato</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 mt-4">
                        <ul className="list-unstyled text-muted mb-0">
                            <li className="mb-3">
                                <Link to="/" className="text-white">Documentation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default footer;
import React from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const RegisterType = () => {
    return(
        <div className="logon-container">
            <Link to="/">
                <img src={logoImg} alt="Heroes" className="herosImg"/>
            </Link>
            <div className="container-form p-0">
                <section className="row m-0 text-center">
                    <div className="col-md-6 text-center container-type">
                        <h4 className="mb-4">Você quer ser um <br />Angeluz?</h4>
                        <Link className="btn-primary-angeluz" to="/cadastro-de-angeluz">
                            Quero ser um Angeluz
                        </Link>
                    </div>
                    <div className="col-md-6 text-center container-type">
                        <h4 className="mb-4">Você quer ser um <br /> Usuario?</h4>
                        <Link className="btn-primary-angeluz" to="/cadastro-de-usuario">
                            Quero ser um usuario
                        </Link>
                    </div>
                    <Link to="/login" className="back-link w-100 d-inline-block mb-4">
                        <FiLogIn color="#af1013"/> Logar
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default RegisterType;
import React from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import './style.css';
import { Link } from 'react-router-dom';
import logoImg from '../../../../assets/images/logo.png';

const newCasesDetails = () => {
    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
                <Header title="Detalhes Casos"/>
                <div className="container-fluid p-4">
                    <div className="row detail-case rounded p-2">
                        <div className="col-md-4">
                            <img src={logoImg} alt="" className="w-100"/>
                        </div>
                        <div className="col-md-8 d-flex justify-content-between">
                            <div>
                                <p>Projetos: Publicados: 4 </p>
                            </div>
                            <div>
                                <p>Último acesso: há 3 horas</p>
                                <p>Registrado desde: Novembro 2019</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <span>Status:</span>
                        </div>
                    </div>
                    <div className="row detail-case rounded p-2 mt-4">
                        <div className="col-md-12">
                            <h4>Descrição</h4>
                            <p></p>
                        </div>
                        <div className="col-md-12">
                            <form>
                                <label>Sua proposta:</label>
                                <textarea></textarea>
                                <label>De quanto tempo você precisa para finalizar o trabalho?</label>
                                <input type="text"/>
                                <div className="row mt-3">
                                    <button className="ml-3">Enviar Proposta</button>
                                    <Link to="novos-casos" className="ml-3">Cancelar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newCasesDetails;
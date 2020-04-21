import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import { Link } from 'react-router-dom';

const registerNewsCase = () => {
    return(
        <div className="d-flex" id="wrapper">
            <SideBar />
            <div id="page-content-wrapper">
                <Header title="Detalhes Casos"/>
                <div className="container-fluid p-4">
                    <div className="container">
                        <div className="row detail-case rounded p-2 mt-4">
                            <div className="col-md-12">
                                <form>
                                    <label>De quanto tempo você precisa para finalizar o trabalho?</label>
                                    <input type="text"/>
                                    <label>Sua proposta:</label>
                                    <textarea></textarea>
                                    <div className="row mt-3">
                                        <button className="ml-3">Concluir</button>
                                        <Link to="novos-casos" className="ml-3">Cancelar</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registerNewsCase;
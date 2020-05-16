import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/images/avatar2.jpg';
import './style.css';

const MyCases = () => {
    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
        <SideBar />
        <Header />
        <main id="main-container">
                <div className="bg-primary-angeluz">
                    <div className="bg-pattern bg-black-op-25">
                        <div className="content content-top text-center pt-1">
                            <div className="py-4">
                                <h1 className="font-w700 text-white mb-10">Meus Casos</h1>
                                <h2 className="h4 font-w400 text-white-op">Acompanhe seus casos.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content content-full">
                    <div className="row gutters-tiny py-20">                          
                        <div className="col-md-6 col-xl-4">
                            <div className="block text-center">
                                <div className="block-content">
                                    <img className="img-avatar img-avatar96" src={Avatar} alt="" />
                                </div>
                                <div className="block-content block-content-full">
                                    <div className="font-size-h4 font-w600 mb-0">Titulo</div>
                                    <div className="font-size-h5 text-muted">Nome do angeluz</div>
                                </div>
                                <div className="block-content block-content-full bg-body-light">
                                    <Link className="btn btn-secondary bg-primary-angeluz text-white border-0" to="/acompanhe-seu-caso">
                                        Ver Detalhes
                                    </Link>                                    
                                </div>
                            </div>
                        </div>   
                        <div className="col-md-6 col-xl-4">
                            <div className="block text-center">
                                <div className="block-content">
                                    <img className="img-avatar img-avatar96" src={Avatar} alt="" />
                                </div>
                                <div className="block-content block-content-full">
                                    <div className="font-size-h4 font-w600 mb-0">Titulo</div>
                                    <div className="font-size-h5 text-muted">Nome do angeluz</div>
                                </div>
                                <div className="block-content block-content-full bg-body-light">
                                    <Link className="btn btn-secondary bg-primary-angeluz text-white border-0" to="/acompanhe-seu-caso">
                                        Ver Detalhes
                                    </Link>                                    
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-6 col-xl-4">
                            <div className="block text-center">
                                <div className="block-content">
                                    <img className="img-avatar img-avatar96" src={Avatar} alt="" />
                                </div>
                                <div className="block-content block-content-full">
                                    <div className="font-size-h4 font-w600 mb-0">Titulo</div>
                                    <div className="font-size-h5 text-muted">Nome do angeluz</div>
                                </div>
                                <div className="block-content block-content-full bg-body-light">
                                    <Link className="btn btn-secondary bg-primary-angeluz text-white border-0" to="/acompanhe-seu-caso">
                                        Ver Detalhes
                                    </Link>                                    
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>                
            </main>
       <Footer />
    </div>
)
}

export default MyCases;
import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import './style.css';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/images/avatar2.jpg';
import { 
    FaUserAlt, 
    FaPlusCircle
} from 'react-icons/fa';
const newCases = () => {
    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
            <SideBar />
            <Header />
            <main id="main-container">
                <div className="bg-image-bottom">                    
                    <div className="content">                    
                        <h2 className="content-heading pt-0">
                            <button type="button" className="btn btn-sm btn-rounded btn-alt-secondary float-right">Exibir Todos</button>
                            <FaUserAlt className="mr-2" color="#af1013" /> Novos Casos
                        </h2>
                        <div className="row items-push">
                            <div className="col-md-6 col-xl-3">
                                <div className="block block-rounded text-center shadow">
                                    <div className="block-content block-content-full pb-0">
                                        <img className="img-avatar" src={Avatar} alt="" />
                                        <div className="font-w600 mb-0 mt-2">Carol Ray</div>
                                    </div>
                                    <div className="block-content block-content-full block-content-sm text-left border-bottom">
                                       <div className="font-size-sm text-muted mb-2"><span className="font-weight-bold mr-1">Titulo:</span>Product Designer</div>
                                       <div className="font-size-sm text-muted"><span className="font-weight-bold mr-1">Descrição:</span>Product Designer</div>
                                    </div>
                                    <div className="block-content block-content-full d-flex justify-content-between py-3">
                                        <FaPlusCircle cursor="pointer" className="mr-1 btn-add" />
                                        <Link className="text-secondary" to="/detalhes-caso">
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="block block-rounded text-center shadow">
                                    <div className="block-content block-content-full pb-0">
                                        <img className="img-avatar" src={Avatar} alt="" />
                                        <div className="font-w600 mb-0 mt-2">Carol Ray</div>
                                    </div>
                                    <div className="block-content block-content-full block-content-sm text-left border-bottom">
                                       <div className="font-size-sm text-muted mb-2"><span className="font-weight-bold mr-1">Titulo:</span>Product Designer</div>
                                       <div className="font-size-sm text-muted"><span className="font-weight-bold mr-1">Descrição:</span>Product Designer</div>
                                    </div>
                                    <div className="block-content block-content-full d-flex justify-content-between py-3">
                                        <FaPlusCircle cursor="pointer" className="mr-1 btn-add" />
                                        <Link className="text-secondary" to="/detalhes-caso">
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="block block-rounded text-center shadow">
                                    <div className="block-content block-content-full pb-0">
                                        <img className="img-avatar" src={Avatar} alt="" />
                                        <div className="font-w600 mb-0 mt-2">Carol Ray</div>
                                    </div>
                                    <div className="block-content block-content-full block-content-sm text-left border-bottom">
                                       <div className="font-size-sm text-muted mb-2"><span className="font-weight-bold mr-1">Titulo:</span>Product Designer</div>
                                       <div className="font-size-sm text-muted"><span className="font-weight-bold mr-1">Descrição:</span>Product Designer</div>
                                    </div>
                                    <div className="block-content block-content-full d-flex justify-content-between py-3">
                                        <FaPlusCircle cursor="pointer" className="mr-1 btn-add" />
                                        <Link className="text-secondary" to="/detalhes-caso">
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="block block-rounded text-center shadow">
                                    <div className="block-content block-content-full pb-0">
                                        <img className="img-avatar" src={Avatar} alt="" />
                                        <div className="font-w600 mb-0 mt-2">Carol Ray</div>
                                    </div>
                                    <div className="block-content block-content-full block-content-sm text-left border-bottom">
                                       <div className="font-size-sm text-muted mb-2"><span className="font-weight-bold mr-1">Titulo:</span>Product Designer</div>
                                       <div className="font-size-sm text-muted"><span className="font-weight-bold mr-1">Descrição:</span>Product Designer</div>
                                    </div>
                                    <div className="block-content block-content-full d-flex justify-content-between py-3">
                                        <FaPlusCircle cursor="pointer" className="mr-1 btn-add" />
                                        <Link className="text-secondary" to="/detalhes-caso">
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 text-center">
                            <button className="btn-primary-angeluz mb-4">
                                Veja Mais    
                            </button> 
                        </div>
                    </div>
                </div>
            </main>
           <Footer />
        </div>
    )
}

export default newCases;
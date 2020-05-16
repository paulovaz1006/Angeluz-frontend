import React from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
import ModalSendMessage from './modal/sendMesage';
import ModalAccept from './modal/accept';
import './style.css';
import { Link } from 'react-router-dom';
import ImgTeste from '../../../../assets/images/cb-project-promo1.png';
import Avatar from '../../../../assets/images/avatar2.jpg';
import { 
    FaThLarge, 
    FaPlusCircle
} from 'react-icons/fa';

const newCasesDetails = () => {

    const openModal = (modal) => {
        const modalOpen = document.querySelector(modal);
        modalOpen.style.display = 'block';
    }

    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
        <SideBar />
        <Header />
        <main id="main-container">
                <div className="content">
                    <h2 className="content-heading">Nome do caso <small> (nome cliente)</small></h2>
                    <div className="block">
                        <div className="block-content block-content-full border-b clearfix">
                            <Link className="btn text-white bg-primary-angeluz" to="/novos-casos">
                                <FaThLarge className="mr-1" color="#fff"/> Ver Todos os Casos
                            </Link>
                        </div>
                        <div className="block-content block-content-full">
                            <div className="row py-20">
                                <div className="col-sm-6 " data-toggle="appear">
                                    <div className="js-slider slick-nav-black slick-dotted-inner slick-dotted-white" data-dots="true" data-arrows="true">
                                        <div>
                                            <img className="img-fluid" src={ImgTeste} alt="Project Promo 1"/>
                                        </div>
                                    </div>
                                    <table className="table table-striped table-borderless mt-20">
                                        <tbody>
                                            <tr>
                                                <td className="font-w600">Usuário</td>
                                                <td>Company S.A.</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600">Titulo</td>
                                                <td>$10.000</td>
                                            </tr>
                                            <tr>
                                                <td className="font-w600">Endereço</td>
                                                <td>Web Development</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-sm-6 nice-copy">
                                    <h3 className="mb-10">Descrição</h3>
                                    <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                                    <button className="btn btn-rounded text-white bg-secundary-angeluz mr-3" onClick={() => openModal('#modalSendMessage')}>
                                        Mandar mensagem
                                    </button>
                                    <button className="btn btn-rounded text-white bg-thirty-angeluz" onClick={() => openModal('#modalAccept')}>
                                        Aceitar
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="block-content-full border-t p-4">
                        <h3 className="mt-20 mb-10">Outros Casos</h3>
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
                        </div>
                    </div>
                </div>
            </main>
       <Footer />
       <ModalAccept />
       <ModalSendMessage />
    </div>
)
}

export default newCasesDetails;
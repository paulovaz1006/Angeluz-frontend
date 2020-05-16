import React from 'react';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
import './style.css';
import { Link } from 'react-router-dom';
import ImgTeste from '../../../../assets/images/cb-project-promo1.png';
import { 
    FaThLarge
} from 'react-icons/fa';

const FollowCase = () => {

    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
        <SideBar />
        <Header />
        <main id="main-container">
                <div className="content">
                    <h2 className="content-heading">Nome do caso <small> (nome cliente)</small></h2>
                    <div className="block">
                        <div className="block-content block-content-full border-b clearfix">
                        <Link className="btn text-white bg-primary-angeluz" to="/meus-casos">
                                <FaThLarge className="mr-1" color="#fff"/> Ver Todos os o meus casos
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
                                </div>
                            </div>
                        </div>
                        <div className="block-content-full border-t p-4">
                        <h3 className="mt-20 mb-10">Mensagens</h3>
                        <div className="row items-push">                            
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default FollowCase;
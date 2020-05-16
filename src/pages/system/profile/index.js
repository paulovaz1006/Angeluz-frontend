import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/images/avatar2.jpg';
import { 
    FaUser, 
    FaShareAlt,
    FaAsterisk,
    FaInfo,
    FaGoogle,
    FaPencilAlt,
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';
import './style.css';
const Profile = () => {

    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
        <SideBar />
        <Header />
        <main id="main-container">
                <div className="bg-image bg-image-bottom">
                    <div className="bg-black-op-75 py-30">
                        <div className="content content-full text-center">
                            <div className="mb-15">
                                <img className="img-avatar img-avatar96 img-avatar-thumb" src={Avatar} alt="" />
                            </div>
                            <h1 className="h3 text-white font-w700 mb-10">John Smith</h1>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="block">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">
                                <FaUser className="fa fa-user-circle mr-2 text-muted" /> Perfil
                            </h3>
                        </div>
                        <div className="block-content">
                            <form action="be_pages_generic_profile.edit.html" method="POST">
                                <div className="row items-push">
                                    <div className="col-lg-3">
                                        <p className="text-muted">
                                            As informações vitais da sua conta. Seu nome de usuário estará visível publicamente.
                                        </p>
                                    </div>
                                    <div className="col-lg-7 offset-lg-1">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <label>Nome</label>
                                                <input type="text" className="form-control form-control-lg" id="profile-settings-username" name="profile-settings-username" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <label>E-mail</label>
                                                <input type="email" className="form-control form-control-lg" id="profile-settings-email" name="profile-settings-email" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-10 col-xl-6">
                                                <div className="push">
                                                    <img className="img-avatar" src={Avatar} alt="" />
                                                </div>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="profile-settings-avatar" name="profile-settings-avatar" />
                                                    <label className="custom-file-label">Trocar Imagem</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-alt-primary">Atualizar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="block">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">
                                <FaShareAlt className="mr-2 text-muted" /> Redes Sociais
                            </h3>
                        </div>
                        <div className="block-content">
                            <form action="be_pages_generic_profile.edit.html" method="post">
                                <div className="row items-push">
                                    <div className="col-lg-3">
                                        <p className="text-muted">
                                            Você pode colocar suas redes sociais aqui.
                                        </p>
                                    </div>
                                    <div className="col-lg-7 offset-lg-1">
                                        <div className="form-group row">
                                            <div className="col-sm-10 col-md-8 col-xl-6">
                                                <Link  className="btn btn-sm btn-hero btn-block text-left btn-alt-danger bg-transparent" to="#">
                                                    <FaGoogle className="mr-2" /> john_doe
                                                </Link>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-xl-6 mt-1 d-flex align-items-center">
                                                <Link  className="text-muted" to="#">
                                                    <FaPencilAlt className="mr-2" /> Edit Google Connection
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-10 col-md-8 col-xl-6">
                                                <Link  className="btn btn-sm btn-hero btn-block text-left btn-alt-info bg-transparent" to="#">
                                                    <FaTwitter className="mr-2" /> @john_doe
                                                </Link>
                                            </div>
                                            <div className="col-sm-12 col-md-4 col-xl-6 mt-1 d-md-flex align-items-md-center">
                                                <Link  className="text-muted" to="#">
                                                    <FaPencilAlt className="fa fa-pencil mr-2" /> Edit Twitter Connection
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-10 col-md-8 col-xl-6">
                                                <Link  className="btn btn-sm btn-hero btn-block text-left btn-alt-primary" to="#">
                                                    <FaFacebook className="mr-2" /> Connect to Facebook
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-10 col-md-8 col-xl-6">
                                                <Link  className="btn btn-sm btn-hero btn-block text-left btn-alt-warning" to="#">
                                                    <FaInstagram className="mr-2" /> Connect to Instagram
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="block">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">
                                <FaAsterisk className="mr-2 text-muted" />   Alterar Senha
                            </h3>
                        </div>
                        <div className="block-content">
                            <form action="be_pages_generic_profile.edit.html" method="post">
                                <div className="row items-push">
                                    <div className="col-lg-3">
                                        <p className="text-muted">                                            
                                            Alterar sua senha de login é uma maneira fácil de manter sua conta segura.
                                        </p>
                                    </div>
                                    <div className="col-lg-7 offset-lg-1">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <label>Senha Atual</label>
                                                <input type="password" className="form-control form-control-lg" id="profile-settings-password" name="profile-settings-password" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <label>Nova Senha</label>
                                                <input type="password" className="form-control form-control-lg" id="profile-settings-password-new" name="profile-settings-password-new" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <label>Confirme a Nova Senha</label>
                                                <input type="password" className="form-control form-control-lg" id="profile-settings-password-new-confirm" name="profile-settings-password-new-confirm" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-alt-primary">Atualizar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="block">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">
                                <FaInfo className="mr-2 text-muted" /> Endereço
                            </h3>
                        </div>
                        <div className="block-content">
                            <form action="be_pages_generic_profile.edit.html" method="post">
                                <div className="row items-push">
                                    <div className="col-lg-3">
                                        <p className="text-muted">
                                            Your billing information is never shown to other users and only used for creating your invoices.
                                        </p>
                                    </div>
                                    <div className="col-lg-7 offset-lg-1">
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <label>Endereço</label>
                                                <input type="text" className="form-control form-control-lg" id="profile-settings-company" name="profile-settings-company" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-6">
                                                <label>Número</label>
                                                <input type="text" className="form-control form-control-lg" id="profile-settings-firstname" name="profile-settings-firstname" />
                                            </div>
                                            <div className="col-6">
                                                <label>Complemento</label>
                                                <input type="text" className="form-control form-control-lg" id="profile-settings-lastname" name="profile-settings-lastname" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <label>Cidade</label>
                                                <input type="text" className="form-control form-control-lg" id="profile-settings-city" name="profile-settings-city" />
                                            </div>
                                        </div>                                       
                                        <div className="form-group row">
                                            <div className="col-6">
                                                <label>Estado</label>
                                                <input type="text" className="form-control form-control-lg" id="profile-settings-postal" name="profile-settings-postal" />
                                            </div>
                                            <div className="col-6">
                                                <label>Cep</label>
                                                <input type="text" className="form-control form-control-lg" id="profile-settings-postal" name="profile-settings-postal" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-alt-primary">Atualizar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Profile;
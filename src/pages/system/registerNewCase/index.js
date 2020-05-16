import React from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { 
    FaPaperPlane,
} from 'react-icons/fa';

const registerNewCase = () => {
    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
            <SideBar />
            <Header />
            <main id="main-container">
                <div className="bg-primary-angeluz">
                    <div className="bg-pattern bg-black-op-25">
                        <div className="content content-top text-center pt-1">
                            <div className="py-4">
                                <h1 className="font-w700 text-white mb-10">Criar Novo Caso</h1>
                                <h2 className="h4 font-w400 text-white-op">Do you have any questions?</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content content-full">
                    <div className="row justify-content-center py-30">
                        <div className="col-lg-8 col-xl-6">
                            <form className="js-validation-be-contact" action="be_pages_generic_contact.html" method="post">
                                <div className="form-group row">
                                    <div className="col-12">
                                        <label>Titulo</label>
                                        <input type="text" className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12">Categoria</label>
                                    <div className="col-12">
                                        <select className="form-control form-control-lg" id="be-contact-subject" name="be-contact-subject">
                                            <option value="1">Support</option>
                                            <option value="2">Billing</option>
                                            <option value="3">Management</option>
                                            <option value="4">Feature Request</option>
                                            <option value="5">Hiring Team</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12">Descrição</label>
                                    <div className="col-12">
                                        <textarea className="form-control form-control-lg" id="be-contact-message" name="be-contact-message" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn-primary-angeluz min-width-175">
                                            <FaPaperPlane className="mr-2" /> Criar Novo Caso
                                        </button>
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

export default registerNewCase;
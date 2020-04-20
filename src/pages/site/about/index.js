import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
import photo16 from '../../../assets/images/photo-16.jpg';
import photo17 from '../../../assets/images/photo-17.jpg';
import photo18 from '../../../assets/images/photo-18.jpg';
import photo19 from '../../../assets/images/photo-19.jpg';
import photo20 from '../../../assets/images/photo-20.jpg';
import photo21 from '../../../assets/images/photo-21.jpg';
import './style.css';

const About = ()=> {
    return(
        <div>
            <Header />
            <section className="py-8 py-md-11 p-4 mb-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">
                            <h1 className="font-weight-bold my-4">
                                Conheça a Angeluz
                            </h1>
                            <p className="lead text-muted mb-7 mb-md-9 mb-4">
                                TextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-row mb-4">
                                <div className="col-4">
                                    <img src={photo16} className="img-fluid rounded shadow-lg" alt="..." />
                                </div>
                                <div className="col-3">
                                    <img src={photo17} className="img-fluid rounded shadow-lg mb-2" alt="..." />
                                    <img src={photo18} className="img-fluid rounded shadow-lg mt-1" alt="..." />
                                </div>
                                <div className="col-5">
                                    <div className="form-row mb-2">
                                        <div className="col-5">
                                            <img src={photo19} className="img-fluid rounded shadow-lg" alt="..." />
                                        </div>
                                        <div className="col-7">
                                            <img src={photo20} className="img-fluid rounded shadow-lg" alt="..." />
                                        </div>
                                    </div>
                                    <img src={photo21   } className="img-fluid rounded shadow-lg" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 border-bottom bg-light">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-6 p-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6685279.443178983!2d-47.655441039739095!3d-13.354955344324111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1585969912594!5m2!1spt-BR!2sbr" title="map" className="map"></iframe>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 offset-lg-1 p-0 info">
                        <h2>
                        Located in Los Angeles.<br />
                        <span className="text-success">Enjoy <span data-toggle="typed">white sand beach</span><span className="typed-cursor">|</span>.</span>
                        </h2>
                        <p className="font-size-lg text-gray-700 mb-6">
                        We picked our office location to maximize our team's enjoyment! LA's best restaurants are within walking distance, as well are some of the finest coffee shops in the world. Come visit us and you'll agree.
                        </p>
                        <div className="d-flex">
                            <div className="pr-3">
                                <h3 className="text-success mb-0">
                                <span data-toggle="countup" data-from="0" data-to="100" data-aos="" data-aos-id="countup:in" className="aos-init aos-animate counted">100</span>
                                </h3>
                                <p className="text-gray-700 mb-0">
                                    Casos Atendidos
                                </p>
                            </div>
                            <div className="border-left border-gray-300"></div>
                            <div className="px-5">
                                <h3 className="text-success mb-0">
                                <span data-toggle="countup" data-from="0" data-to="85" data-aos="" data-aos-id="countup:in" className="aos-init aos-animate counted">85</span>
                                </h3>
                                <p className="text-gray-700 mb-0">
                                Angeluz
                                </p>
                            </div>
                            <div className="border-left border-gray-300"></div>
                            <div className="pl-5">
                            <h3 className="text-success mb-0">
                            <span data-toggle="countup" data-from="0" data-to="52" data-aos="" data-aos-id="countup:in" className="aos-init aos-animate counted">52</span>/<span data-toggle="countup" data-from="0" data-to="48" data-aos="" data-aos-id="countup:in" className="aos-init aos-animate counted">48</span>
                            </h3>
                            <p className="text-gray-700 mb-0">
                            Usuários
                            </p>
                        </div>
                        </div>
                        <Link to="#" className="btn-secundary-angeluz mt-4"> Cadastre-se</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About;
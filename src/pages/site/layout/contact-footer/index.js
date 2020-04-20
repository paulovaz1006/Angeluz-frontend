import React from 'react';
import './style.css';
const contactFooter = () => {
    return(
        <section className="pt-6 pt-md-8 bg-contact-footer p-3">
            <div className="container pb-6 pb-md-8">
                <div className="row align-items-center">
                    <div className="col-12 col-md">
                        <h3 className="font-weight-bold mb-1 text-white">Gostaria de ser um Angeluz?</h3>
                        <p className="font-size-lg mb-5 mb-md-0 text-white">Clique no botão para fazer o seu cadastro.</p>
                    </div>
                    <div className="col-12 col-md-auto">
                        <a href="#" className="btn-contact-footer"> Cadastre-se</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contactFooter;
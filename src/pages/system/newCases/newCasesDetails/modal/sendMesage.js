import React from 'react';

const modalSendMessage = () => {    

    const closeModal = () => {
        const modalClose = document.querySelector('#modalSendMessage');
        modalClose.style.display = 'none';
    }

    return(
        <div className="modal" role="dialog" id="modalSendMessage">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Enviar Mensagem para</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form className="js-validation-be-contact" action="be_pages_generic_contact.html" method="post">                               
                        <div className="form-group row">
                            <label className="col-12">Mensagem</label>
                            <div className="col-12">
                                <textarea className="form-control form-control-lg" id="be-contact-message" name="be-contact-message" rows="10"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">                    
                    <button type="button" className="btn bg-primary-angeluz text-white" data-dismiss="modal" onClick={closeModal}>Fechar</button>
                    <button type="button" className="btn bg-thirty-angeluz text-white">Enviar Mensagem</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default modalSendMessage;
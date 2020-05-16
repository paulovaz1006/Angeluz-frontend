import React from 'react';

const modalConfirm = (props) => {

    const closeModal = () => {
        const modalClose = document.querySelector('#modalAccept');
        modalClose.style.display = 'none';
    }

    return(
        <div className="modal" role="dialog" id="modalAccept">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Aceitar Caso</h5>
                    <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-footer">                   
                    <button type="button" className="btn bg-primary-angeluz text-white" onClick={closeModal}>Não</button>
                    <button type="button" className="btn bg-thirty-angeluz text-white">Sim</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default modalConfirm;
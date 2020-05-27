import React from 'react';
import api from '../../../../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const ModalConfirm = (props) => {
    const history = useHistory();
    const closeModal = () => {
        const modalClose = document.querySelector('#modalAccept');
        modalClose.style.display = 'none';
    }

    const acceptCase = async () => {
        const idAngeluz = localStorage.getItem('userId');
        

        try {
           await api.patch(`alterar-caso/${props.id}`, 
            {                               
                id_angeluz: idAngeluz, 
                status: "Em Adamento"                    
            })

            toast.success('Você aceitou o caso, será redirecionado para a tela de Novos Casos', {
                autoClose: 5000,                    
            });

            setTimeout(() => {
                history.push('/novos-casos')
            }, 5000);
        } catch {
            toast.error('Erro ao cadastrar', {
                autoClose: 5000,                    
            });
        }
    }

    return(
        <div className="modal" role="dialog" id="modalAccept">
            <ToastContainer />
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Aceitar Caso {props.case}</h5>
                    <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-footer">                   
                    <button type="button" className="btn bg-primary-angeluz text-white" onClick={closeModal}>Não</button>
                    <button type="button" className="btn bg-thirty-angeluz text-white" onClick={acceptCase}>Sim</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm;
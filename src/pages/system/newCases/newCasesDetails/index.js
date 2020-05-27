import React, { useState ,useEffect} from 'react';
import moment from 'moment';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
import ModalSendMessage from './modal/sendMesage';
import ModalAccept from './modal/accept';
import api from '../../../../services/api';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../../../../assets/images/avatar2.jpg';
import { 
    FaThLarge, 
    FaPlusCircle
} from 'react-icons/fa';

const NewCasesDetails = ({ match }) => {
    const history = useHistory();
    const id = match.params.id;
    const [ caseDetail, setCaseDetail ] = useState([]);
    const [ cases, setCases ] = useState([]);
    const [ titleCase, setTitleCase] = useState('');
    const [ nameUser, setNameUser] = useState('');

    const infoCaseDetail = () => {
        api.get(`casos/detalhes-do-caso/${id}`)
        .then(response => {
            setCaseDetail(response.data)
            setTitleCase(response.data[0].name)
            setNameUser(response.data[0].full_name)
        })
    }

    const othersCases = () => {
        api.get('casos')
        .then(response => {
            setCases(response.data)
        })
    }

    const detailCase = (id) => {
        history.push(`/detalhes-caso/${id}`);
    }

    const openModal = (modal) => {
        const modalOpen = document.querySelector(modal);
        modalOpen.style.display = 'block';
    }

    const sendMessageWhatsapp = ( name, whatsapp, title) => {
        let message = `Olá sou o Angeluz ${name}, e gostaria de te ajudar no caso ${title}`;
        let url = `https://api.whatsapp.com/send?phone=55${whatsapp}&text=%20${message}`;

        return window.open(url, '_blank');
    }

    useEffect(() => {
        infoCaseDetail();
        othersCases();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
        <SideBar />
        <Header />
            <main id="main-container">
                <div className="content">
                    <h2 className="content-heading">{titleCase} <small> ({nameUser})</small></h2>
                    <div className="block">
                        <div className="block-content block-content-full border-b clearfix">
                            <Link className="btn text-white bg-primary-angeluz" to="/novos-casos">
                                <FaThLarge className="mr-1" color="#fff"/> Ver Todos os Casos
                            </Link>
                        </div>
                        <div className="block-content block-content-full">                            
                            {caseDetail.map((data) => {

                                const cellphone = (data.cellphone !== '') ? data.cellphone : 'Não Informado';
                                const photoProfile = (data.photo !== null) ? data.photo : 'no-photo.jpg'
                                const imgUser = `/assets/img/photo_perfil/${photoProfile}` ; 
                                const dateCreate = moment(data.date_create).format('L');
                                const dateValid = moment(data.date_valid).format('L');

                                return(
                                    <div className="row py-20" key={data.id_case}>
                                        <div className="col-sm-6 " data-toggle="appear">
                                            <div className="js-slider slick-nav-black slick-dotted-inner slick-dotted-white" data-dots="true" data-arrows="true">
                                                <div className="text-center">
                                                    <img className="img-fluid photo-profile" src={imgUser} alt={data.full_name}/>
                                                </div>
                                            </div>                                            
                                            <ul className="mt-20 list-case-detail">
                                                <li>
                                                    <span className="font-w600">Humano:</span>
                                                    <p>{data.full_name}</p>
                                                </li>
                                                <li>
                                                    <span className="font-w600">Whatsapp:</span>
                                                    <p>{cellphone}</p>
                                                </li>
                                                <li>
                                                    <span className="font-w600">Endereço:</span>
                                                    <p>{data.address}, {data.number}</p>
                                                </li>                                                
                                                <li>
                                                    <span className="font-w600">Bairro:</span>
                                                    <p>{data.district}, {data.state} </p>
                                                </li>
                                                <li>
                                                    <span className="font-w600">CEP:</span>
                                                    <p>{data.zip_code}</p>
                                                </li>
                                                <li>
                                                    <span className="font-w600">Status:</span>
                                                    <p>{data.status}</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6 nice-copy">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h3 className="mb-10">Titulo</h3>
                                                    <p>{data.name}</p>
                                                </div>
                                                <div>
                                                    <h3 className="mb-10">Categoria</h3>
                                                    <p>{data.category}</p>
                                                </div>
                                            </div>
                                            <h3 className="mb-10">Descrição</h3>
                                            <p>{data.description}</p>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h6 className="mb-10">Data de Criação</h6>
                                                    <p>{dateCreate}</p>
                                                </div>
                                                <div>
                                                    <h6 className="mb-10">Data de Validade</h6>
                                                    <p>{dateValid}</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-rounded text-white bg-secundary-angeluz mr-3" 
                                                    onClick={() => sendMessageWhatsapp(data.full_name, data.cellphone, data.name )}>
                                                Enviar Mensagem por Whatsapp
                                            </button>
                                            <button className="btn btn-rounded text-white bg-thirty-angeluz" onClick={() => openModal('#modalAccept')}>
                                                Aceitar
                                            </button>
                                        </div>
                                        <ModalAccept case={data.name} id={data.id_case}/>
                                        <ModalSendMessage />
                                    </div>
                                )
                            })}  
                        </div>
                        <div className="block-content-full border-t p-4">
                            <h3 className="mt-20 mb-10">Outros Casos</h3>
                            <div className="row items-push">
                            {cases.map((data) => {
                                    return (                                        
                                        <div className="col-md-6 col-xl-3" key={data.id_case}>
                                            <div className="block block-rounded text-center shadow">
                                                <div className="block-content block-content-full pb-0">
                                                    <img className="img-avatar" src={Avatar} alt="" />
                                                    <div className="font-w600 mb-0 mt-2">{data.name_user}</div>
                                                </div>
                                                <div className="block-content block-content-full block-content-sm text-left border-bottom">
                                                <div className="font-size-sm text-muted mb-2"><span className="font-weight-bold mr-1">Titulo:</span>{data.name}</div>
                                                <div className="font-size-sm text-muted"><span className="font-weight-bold mr-1">Descrição:</span>{data.description}</div>
                                                </div>
                                                <div className="block-content block-content-full d-flex justify-content-between py-3">
                                                    <FaPlusCircle cursor="pointer" className="mr-1 btn-add" onClick={() => detailCase(data.id_case)}/>
                                                    <Link to="#" className="text-secondary" onClick={() => detailCase(data.id_case)}>
                                                        Ver Detalhes
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ) 
                                })}                           
                            </div>
                        </div>
                    </div>
                </div>
            </main>
       <Footer />       
    </div>
    )
}

export default NewCasesDetails;
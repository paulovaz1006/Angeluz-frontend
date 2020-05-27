import React, { useState, useEffect} from 'react';
import moment from 'moment';
import SideBar from '../../layouts/sidebar';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';
import './style.css';
import { Link } from 'react-router-dom';
import api from '../../../../services/api';
import { 
    FaThLarge
} from 'react-icons/fa';

const FollowCase = ({ match }) => {
    const id = match.params.id;
    const [ caseDetail, setCaseDetail ] = useState([]);
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

    useEffect(() => {
        infoCaseDetail();
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
                            <Link className="btn text-white bg-primary-angeluz" to="/meus-casos">
                                <FaThLarge className="mr-1" color="#fff"/> Ver Todos os o meus casos
                            </Link>
                        </div>
                        <div className="block-content block-content-full">                            
                            {caseDetail.map((data) => {

                                let phone = (data.phone !== '') ? data.phone : 'Não Informado';
                                const photoProfile = (data.photo !== null) ? data.photo : 'no-photo.jpg'
                                let imgUser = `/assets/img/photo_perfil/${photoProfile}` ; 
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
                                                    <span className="font-w600">Telefone:</span>
                                                    <p>{phone}</p>
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
                                        </div>
                                    </div>
                                )
                            })}  
                        </div>                       
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default FollowCase;
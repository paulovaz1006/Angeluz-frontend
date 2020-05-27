import React, { useEffect, useState } from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import api from '../../../services/api';

const MyCases = () => {
    const history = useHistory();    
    const [ myCase, setMyCase ] = useState([]);
    const type = localStorage.getItem('userType');    
    const id = localStorage.getItem('userId');
    const linkCase = (parseInt(type) === 1) ? 'meus-casos-angeluz' : 'meus-casos';

    const renderCases = () => {
        api.get(`${linkCase}/${id}`)
        .then(response => {
            setMyCase(response.data)
        })
    }   

    const detailCase = (id) => {
        history.push(`/acompanhe-seu-caso/${id}`);
    }

    useEffect(() => {
        renderCases();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
            <SideBar />
            <Header />
            <main id="main-container">
                    <div className="bg-primary-angeluz">
                        <div className="bg-pattern bg-black-op-25">
                            <div className="content content-top text-center pt-1">
                                <div className="py-4">
                                    <h1 className="font-w700 text-white mb-10">Meus Casos</h1>
                                    <h2 className="h4 font-w400 text-white-op">Acompanhe seus casos.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content content-full">
                        <div className="row gutters-tiny py-20">    
                        
                            {myCase.map((data) => {
                                    const photoProfile = (data.photo !== null) ? data.photo : 'no-photo.jpg'
                                    let imgUser = `/assets/img/photo_perfil/${photoProfile}` ; 
                                    return(
                                        <div className="col-md-6 col-xl-4" key={data.id_case}>
                                            <div className="block text-center">
                                                <div className="block-content">
                                                    <img className="img-avatar img-avatar96" src={imgUser} alt="" />
                                                </div>
                                                <div className="block-content block-content-full">
                                                    <div className="font-size-h4 font-w600 mb-0">{data.name}</div>
                                                    <div className="font-size-h5 text-muted">{data.name}</div>
                                                </div>
                                                <div className="block-content block-content-full bg-body-light">
                                                    <Link className="btn btn-secondary bg-primary-angeluz text-white border-0" to="#" onClick={() => detailCase(data.id_case)}>
                                                        Ver Detalhes
                                                    </Link>                                    
                                                </div>
                                            </div>
                                        </div> 
                                    )                              
                            })}
                        </div>
                    </div>                
                </main>
            <Footer />
        </div>
    )
}

export default MyCases;
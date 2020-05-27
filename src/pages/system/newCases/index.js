import React, { useState, useEffect} from 'react';
import SideBar from '../layouts/sidebar';
import Header from '../layouts/header';
import Footer from '../layouts/footer';
import api from '../../../services/api';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { 
    FaUserAlt, 
    FaPlusCircle
} from 'react-icons/fa';

const NewCases = () => {
    const history = useHistory();
    const [ cases, setCases ] = useState([]);
    const [ visibleCases, setVisibleCases ] = useState(4);
    const detailCase = (id) => {
        history.push(`/detalhes-caso/${id}`);
    }

    const loadMore = () => {
        setVisibleCases(visibleCases + 4);   
    }

    const loadAll = () => {
        setVisibleCases(cases.length);           
    }

    const renderButtonLoad = () => {
        if(visibleCases <= cases.length) {
            return (
                <div className="mb-4 text-center">
                    <button className="btn-primary-angeluz mb-4" onClick={loadMore}>
                        Carregar Mais    
                    </button> 
                </div>
            )
        }
    }

    useEffect(() => {
        const loadCases = () => {
            api.get('casos')
            .then(response => {
                setCases(response.data)
            })
        }         
        loadCases();
    }, []);     

    return(
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed">            
            <SideBar />
            <Header />
            <main id="main-container">
                <div className="bg-image-bottom">                    
                    <div className="content">                    
                        <h2 className="content-heading pt-0">
                            <button type="button" className="btn btn-sm btn-rounded btn-alt-secondary float-right" onClick={loadAll}>Exibir Todos</button>
                            <FaUserAlt className="mr-2" color="#af1013" /> Novos Casos
                        </h2>
                        <div className="row items-push">
                            {cases.slice(0, visibleCases).map((data) => {
                                let photoProfile = (data.photo !== null) ? data.photo : 'no-photo.jpg';

                                let imgUser = `/assets/img/photo_perfil/${photoProfile}` ; 

                                return(
                                    <div className="col-md-6 col-xl-3" key={data.id_case}>
                                        <div className="block block-rounded text-center shadow">
                                            <div className="block-content block-content-full pb-0">
                                                <img className="img-avatar" src={imgUser} alt="" />
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
                        {renderButtonLoad()}                        
                    </div>
                </div>
            </main>
           <Footer />
        </div>
    )
}

export default NewCases;
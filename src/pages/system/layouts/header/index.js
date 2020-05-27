import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaBars, 
    FaUser, 
    FaSignOutAlt,
    FaFlag,
    FaAngleDown,
    FaEye
} from 'react-icons/fa';
import './style.css';

const Header = () => {
    const hideSidebar = () => {
        const sidebar = document.querySelector('#sidebar');
        const sideScroll = document.querySelector('#page-container.side-scroll #sidebar');
        const pageContaier = document.querySelector('#page-container.sidebar-o');
        let hiddenMenu = sidebar.getAttribute('data-hidden');  
        if (hiddenMenu === 'false') {
            sidebar.style.width = '0px';
            sideScroll.style.overflowY = 'hidden';
            pageContaier.style.paddingLeft = '0px';    
            sidebar.setAttribute('data-hidden', true);
        } else {
            sidebar.style.width = '230px';
            sideScroll.style.overflowY = 'visible';
            pageContaier.style.paddingLeft = '230px';  
            sidebar.setAttribute('data-hidden', false);   
        }        
    }

    return(
        <header id="page-header" className="bg-white mb-4">
            <div className="content-header py-2">
                <div className="content-header-section">
                    <button type="button" className="btn btn-circle btn-dual-secondary" onClick={hideSidebar}>
                        <FaBars />
                    </button>                   
                </div>
                <div className="content-header-section">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-rounded btn-dual-secondary menu-profile-header" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="d-none d-sm-inline-block ">Configurações  <FaAngleDown className="ml-2" /></span>                           
                            <div className="dropdown-menu dropdown-menu-right min-width-200" aria-labelledby="page-header-user-dropdown">
                                <Link className="dropdown-item" to="/perfil">
                                    <FaUser className="mr-2"/> Perfil
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">
                                    <FaSignOutAlt className="mr-2"/> Sair
                                </Link>
                            </div>
                        </button>                        
                    </div>
                    <div className="btn-group d-none" role="group">
                        <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaFlag />
                            <span className="badge badge-primary badge-pill">5</span>
                            <div className="dropdown-menu dropdown-menu-right min-width-300" id="page-header-notifications-list" aria-labelledby="page-header-notifications">
                                <h5 className="h6 pl-4 py-10 mb-0 border-b text-uppercase">Notificações</h5>
                                <ul className="list-unstyled my-20">
                                    <li>
                                        <Link className="text-body-color-dark media mb-15" to="#">
                                            <div className="media-body pr-10 pl-4">
                                                <p className="mb-0">Nova Mensagem de</p>
                                                <div className="text-muted font-size-sm font-italic">Texto da mensagem</div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item text-center mb-0" to="#">
                                    <FaEye className="mr-2" /> Ver Todos
                                </Link>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
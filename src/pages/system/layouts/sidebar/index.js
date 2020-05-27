import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
    FaTachometerAlt,
    FaCog,
    FaSignOutAlt,
    FaFolderPlus,
    FaFolderOpen,
    FaFile
} from 'react-icons/fa';
import './style.css';

const SideBar = () => {
    const typeUser = localStorage.getItem('userType');
    const photo = localStorage.getItem('userPhoto');
    const photoProfile = (photo !== 'null') ? photo : 'no-photo.jpg'
    let type = '';

    const navTypeUser = () => {
        if (parseInt(typeUser) === 1) {
            type = 'Angeluz'        
        }  else {
            type = 'Humano' 
        }

        return type;
    }

    const renderSideBar = () => {
        if (parseInt(typeUser) === 1) {
            return (
                <li>
                    <NavLink to="/novos-casos" className="list-group-item list-group-item-action border-0 border-radius-0">
                        <FaFolderPlus className="mr-2" /> Novos Casos
                    </NavLink>                      
                </li>  
            )
        } else {
            return (
                <li>
                    <NavLink to="/cadastrar-caso" className="list-group-item list-group-item-action border-0 border-radius-0"><FaFile className="mr-2" />Cadastrar Casos</NavLink>                        
                </li>   
            ) 
        }
    }

    return(
        <nav id="sidebar" data-hidden="false">
          <div className="sidebar-content">
              <div className="content-side content-side-full content-side-user px-10 align-parent">
                  <div className="sidebar-mini-hidden-b text-center">
                      <Link className="rounded" to="/perfil">
                        <img className="w-100 border-perfil" src={`/assets/img/photo_perfil/${photoProfile}`} alt="" />
                      </Link>
                      <ul className="list-inline mt-10">
                          <li className="list-inline-item">
                            <Link className="link-effect text-white font-size-sm font-w600 text-uppercase" to="/perfil">Olá Paulo</Link>                            
                          </li>
                          <li className="list-inline-item">
                              <Link className="text-white font-size-sm" to="/perfil" title="Editar Perfil"><FaCog /></Link>
                          </li>
                          <li className="list-inline-item">
                              <Link className="text-white font-size-sm" to="/" title="Sair"><FaSignOutAlt /></Link>
                          </li>
                      </ul>
                      <span className="text-white">Tipo de Usuário: {navTypeUser()}</span>
                  </div>                        
              </div>
              
              <div className="content-side content-side-full">
                  <ul className="nav-main">
                      <li>
                          <NavLink activeClassName="active" className="list-group-item list-group-item-action border-0 border-radius-0" to="/dashboard"><FaTachometerAlt className="mr-2" />Dashboard</NavLink>
                      </li>
                      <li className="nav-main-heading"><span className="sidebar-mini-hidden">Casos</span></li>
                      <li>
                          <NavLink activeClassName="active" className="list-group-item list-group-item-action border-0 border-radius-0" to="/meus-casos"><FaFolderOpen className="mr-2" />Meus Casos</NavLink>                        
                      </li>      
                        {renderSideBar()}
                      <li className="nav-main-heading"><span className="sidebar-mini-hidden">Logout</span></li>
                      <li>
                        <Link to="/" className="list-group-item list-group-item-action border-0 border-radius-0"><FaSignOutAlt className="mr-2" />Sair</Link>                      
                      </li>          
                  </ul>
              </div>
          </div>
        </nav>
    )
}

export default SideBar;
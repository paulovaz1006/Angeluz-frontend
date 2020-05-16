import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../../assets/images/avatar2.jpg';
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
    return(
        <nav id="sidebar" data-hidden="false">
          <div className="sidebar-content">
              <div className="content-side content-side-full content-side-user px-10 align-parent">
                  <div className="sidebar-mini-hidden-b text-center">
                      <Link className="img-link rounded" to="be_pages_generic_profile.html">
                        <img className="w-100 border-perfil" src={Avatar} alt="" />
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
                  </div>                        
              </div>
              
              <div className="content-side content-side-full">
                  <ul className="nav-main">
                      <li>
                          <Link className="active list-group-item list-group-item-action border-0" to="/dashboard"><FaTachometerAlt className="mr-2" />Dashboard</Link>
                      </li>
                      <li className="nav-main-heading"><span className="sidebar-mini-hidden">Casos</span></li>
                      <li>
                          <Link className="list-group-item list-group-item-action border-0" to="/meus-casos"><FaFolderOpen className="mr-2" />Meus Casos</Link>                        
                      </li>      
                      <li>
                        <Link to="/novos-casos" className="list-group-item list-group-item-action border-0"><FaFolderPlus className="mr-2" />Novos Casos</Link>                      
                      </li>  
                      <li>
                        <Link to="/cadastrar-caso" className="list-group-item list-group-item-action border-0"><FaFile className="mr-2" />Cadastrar Casos</Link>                        
                      </li>  
                      <li className="nav-main-heading"><span className="sidebar-mini-hidden">Logout</span></li>
                      <li>
                        <Link to="/" className="list-group-item list-group-item-action border-0"><FaSignOutAlt className="mr-2" />Sair</Link>                      
                      </li>          
                  </ul>
              </div>
          </div>
        </nav>
    )
}

export default SideBar;
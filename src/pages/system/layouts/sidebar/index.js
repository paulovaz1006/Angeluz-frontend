import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SideBar = () => {
    return(
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Start Bootstrap </div>
          <div className="list-group list-group-flush">
            <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Meus Casos</Link>
            <Link to="/novos-casos" className="list-group-item list-group-item-action bg-light">Novos Casos</Link>
            <Link to="#" className="list-group-item list-group-item-action bg-light">Sair</Link>
          </div>
        </div>
    )
}

export default SideBar;
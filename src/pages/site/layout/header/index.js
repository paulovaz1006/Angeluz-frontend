import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../../assets/images/logo.png';
import './style.css';
export default function Header() {

  return (
    <div className="bg-header-gradient py-2">
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light justify-content-between row pb-0">
        <Link className="navbar-brand max-logo position-absolute mt-4" to="/"><img src={logoImg} alt="Heroes" className="w-100"/></Link>       
          <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/sobre">Sobre</Link>
          </div>
        <Link to="/login" className="btn-primary-angeluz">Login</Link>
      </nav>
      </div>
    </div>
  );
}
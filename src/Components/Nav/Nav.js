import React from  'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Imgs/theatre-masks.svg';

const nav = () =>{
    return(
       
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
              <img src={Logo} alt="FaceCognito" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About FaceCognito</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-signup" to="/auth">Get Started</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default nav;
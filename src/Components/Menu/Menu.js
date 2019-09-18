import React from  'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import DetectFacesIcon from '../../Assets/Imgs/Menu/detect-face.svg';
import DetectBody from '../../Assets/Imgs/Menu/detect-body.svg';
import DetectFaceAttributes from '../../Assets/Imgs/Menu/detect-face-attributes.svg';
import CompareFaces from '../../Assets/Imgs/Menu/compare-faces.svg';

let images = [
  DetectBody,
  DetectFacesIcon,
  DetectFaceAttributes,
  CompareFaces
];

const menu = () =>{
    return(
      <section className="menu-section">
        <div className="container">
          <h1>Menu</h1>
          <p>Select action</p>
          <div className="menu">
            <div className="row">
              <div className="col-md-3">
                <Link to="/detect-body">
                  <div className="card">
                    <img src={images[0]} alt="Detect Body" />
                    <h3>Detect Body</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-3">
                <Link to="/detect-face">
                  <div className="card">
                    <img src={images[1]} alt="Detect Body" />
                    <h3>Detect Face</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-3">
                <Link to="/detect-face-attributes">
                  <div className="card">
                    <img src={images[2]} alt="Detect Body" />
                    <h3>Detect Face Attributes</h3>
                  </div>
                </Link>
              </div>

              <div className="col-md-3">
                <Link to="/compare-faces">
                  <div className="card">
                    <img src={images[3]} alt="Detect Body" />
                    <h3>Compare Faces</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default menu;
import React from  'react';
import './About.scss';

import Logo from '../../Assets/Imgs/theatre-masks.svg';
import DetectFacesIcon from '../../Assets/Imgs/Features/detect-face.svg';
import DetectBody from '../../Assets/Imgs/Features/detect-body.svg';
import DetectFaceAttributes from '../../Assets/Imgs/Features/detect-face-attributes.svg';
import CompareFaces from '../../Assets/Imgs/Features/compare-faces.svg';

let images = [
  Logo,
  DetectBody,
  DetectFacesIcon,
  DetectFaceAttributes,
  CompareFaces
];

const about = () =>{
    return(
      <section className="about-section">
        <div className="container">
          <h1>About Facecognito</h1>
          <div className="row">
            <div className="col-md-3">
              <img src={images[0]} alt="FaceGognito" />
            </div>
            <div className="col-md-9">
              <p>This software is the product of a journey through the research, design, development and evaluation phases of image data collection systems; like those used to feed AI driven algorithms with data which is used for specialised tasks like targeted advertisement, and post feed to increase engagement.</p>
            </div>
          </div>

          <h1>Functions</h1>
          <div className="row">
            <div className="col-md-3">
              <img src={images[1]} alt="Detect Body" />
            </div>
            <div className="col-md-9">
              <p className="font-weight-bold">Detect Body</p>
              <p>Detect and analyze human bodies within the image that you provided by image file or URL. You can get back body rectangle and body attributes for each detected body. Body attributes include gender, upper and lower body clothing colours.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src={images[2]} alt="Detect Face" />
            </div>
            <div className="col-md-9">
              <p className="font-weight-bold">Detect Face</p>
              <p>Detect and analyze human faces within the image that you provided. Detect API can detect all the faces within the image. Each detected face gets its face_token, which can be used in follow-up analysis and operations. With a Standard API Key, you can specify a rectangle area within the image to perform face detection.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src={images[3]} alt="Detect Face Attributes" />
            </div>
            <div className="col-md-9">
              <p className="font-weight-bold">Detect Face Attributes</p>
              <p>Get face landmarks and attributes by passing its face_token which you can get from Detect API. Face Analyze API allows you to process  up to 5 face_token at a time.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src={images[4]} alt="Compare Faces" />
            </div>
            <div className="col-md-9">
              <p className="font-weight-bold">Compare Faces</p>
              <p>Compare two faces and decide whether they are from the same person. You can upload image file or use face_token for face comparing. For image upload, the biggest face by the size of bounding box within the image will be used. For face_token, you shall get it by using Detect API.</p>
            </div>
          </div>

        </div>
      </section>
    );
}

export default about;
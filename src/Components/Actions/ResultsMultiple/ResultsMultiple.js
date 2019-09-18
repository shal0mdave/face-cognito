import React from 'react';

import PlaceholderImage from '../../../Assets/Imgs/Actions/image-placeholder.jpg';

const resultsMultiple = () =>{

    return(
        <div className="card">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Preview</h1>
                        <div className="image-holder">
                            <img src={PlaceholderImage} alt="alt-text" className="img-fluid"/>
                            <img src={PlaceholderImage} alt="alt-text" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h1>Results</h1>
                        <div className="result-holder">
                            <p>Hello there.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default resultsMultiple;
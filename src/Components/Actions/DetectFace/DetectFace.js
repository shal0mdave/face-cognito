import React from 'react';
import UploadSingle from '../UploadSingle/UploadSingle';
import Results from '../ResultsSingle/ResultsSingle';

import '../Actions.scss';

const detectFace = () =>{

    return(
        <section className="action-seciton">
            <div className="container">
                <h1 className="action-title">Detect Face</h1>
                <div className="row">
                    <div className="col-md-4">
                        <UploadSingle />
                    </div>
                    <div className="col-md-8">
                        <Results />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default detectFace;
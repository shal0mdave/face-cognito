import React from 'react';
import Upload from '../UploadMultiple/UploadMultiple';
import Results from '../ResultsMultiple/ResultsMultiple';

import '../Actions.scss';

const compareFaces = () =>{

    return(
        <section className="action-seciton">
            <div className="container">
                <h1 className="action-title">Compare Faces</h1>
                <div className="row">
                    <div className="col-md-4">
                        <Upload />
                    </div>
                    <div className="col-md-8">
                        <Results />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default compareFaces;
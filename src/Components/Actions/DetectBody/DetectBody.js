import React from 'react';
import {Icon} from 'antd';

// import Upload from '../UploadMultiple/UploadMultiple';
// import Results from '../ResultsMultiple/ResultsMultiple';
import PlaceholderImage from '../../../Assets/Imgs/Actions/image-placeholder.jpg';
import '../Actions.scss';

class detectBody extends React.Component{
    constructor(props){
        super(props)
        this.state={
            file: '',
            fileUrl: ''
        }
    }

    handleUpload(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                fileUrl: reader.result
            })
        }

        reader.readAsDataURL(file)
    }

    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<img src={PlaceholderImage} alt="alt-text" className="img-fluid"/>);
        }

        return(
            <section className="action-seciton">
                <div className="container">
                    <h1 className="action-title">Detect Body</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <form className="upload-multiple">
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" onChange={(e)=>this.handleUpload(e)} />
                                        <label className="custom-file-label"></label>
                                    </div>
                                </div>
                                <button className="btn" type="submit"><Icon type="cloud-upload" /> Upload</button>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h1>Preview</h1>
                                            <div className="image-holder">
                                                {$imagePreview}
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default detectBody;
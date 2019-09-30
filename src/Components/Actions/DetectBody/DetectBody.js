import React from 'react';
import {Icon, Badge, notification} from 'antd';
import axios from 'axios';
import {API_KEY, API_SECRET} from '../Keys';

// import Upload from '../UploadMultiple/UploadMultiple';
// import Results from '../ResultsMultiple/ResultsMultiple';
import PlaceholderImage from '../../../Assets/Imgs/Actions/image-placeholder.jpg';
import '../Actions.scss';

class detectBody extends React.Component{
    constructor(props){
        super(props)
        this.state={
            key: API_KEY,
            secret: API_SECRET,
            file: null,
            attributes: [
                'gender',
                'age',
                'smiling',
                'headpose',
                'emotion',
                'ethnicity',
                'mouthstatus',
                'skinstatus'
            ],
            imagePreviewUrl: null,
            results: null
        }
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.successNotification = this.successNotification.bind(this);
        this.errorNotification = this.errorNotification.bind(this);
    }

    handleImageChange = (e) => {
        e.preventDefault();
  
        let file = e.target.files[0];
        
        this.setState({
            file: e.target.files[0]
        });

        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file);
    }

    successNotification = (type) => {
        notification[type]({
          message: 'Image Analysis Completed',
          description:
            'The system has successfully analysed the content which was sent. View Results',
        });
    };

    errorNotification = (type) => {
        notification[type]({
          message: 'Image Analysis Failed',
          description:
            'System Failed, try again later',
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('api_key', this.state.key);
        formData.append('api_secret', this.state.secret);
        formData.append('image_file', this.state.file);
        formData.append('return_attributes', this.state.attributes);

        axios({
            url: `https://api-us.faceplusplus.com/facepp/v3/detect`,
            method: "POST",
            headers : {
                'content-type': 'multipart/form-data'
            },
            data: formData

        }).then((response) => {
            console.log(response);
            this.successNotification('success');
            this.setState({
                results: response.data
            });

        }).catch((error) => {   
            console.log(error);
            this.errorNotification('error');
            this.setState({
                results: error
            });

        });
    }

    render(){
        const results = this.state.results;

        return(
            <section className="action-seciton">
                <div className="container">
                    <h1 className="action-title">Detect Body</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <form className="upload-multiple" onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" onChange={this.handleImageChange} />
                                        <label className="custom-file-label"></label>
                                    </div>
                                </div>
                                <button className="btn" type="submit" onClick={this.handleSubmit}><Icon type="file-search" /> Analyse</button>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h1>Preview</h1>
                                            <div className="image-holder">
                                                {this.state.imagePreviewUrl ? (
                                                    <img src={this.state.imagePreviewUrl} alt="Placeholder" className="img-fluid" /> 
                                                ) : (
                                                    <img src={PlaceholderImage} alt="Placeholder" className="img-fluid"/>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h1>Results</h1>
                                            <div className="result-holder">                                               
                                                {results ? (
                                                    <Badge count={results.face_num}>
                                                        Number of Faces
                                                    </Badge>
                                                ) : (
                                                    <p>Upload image for results.</p>
                                                )}
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
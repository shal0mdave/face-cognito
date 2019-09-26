import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, API_SECRET} from '../Keys';
import PlaceholderImage from '../../../Assets/Imgs/Actions/image-placeholder.jpg';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: API_KEY,
            secret: API_SECRET,
            file: null,
            imagePreviewUrl: null,
            results: null
        };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('api_key', this.state.key);
        formData.append('api_secret', this.state.secret);
        formData.append('image_file', this.state.file);

        axios({
            url: `https://api-us.faceplusplus.com/facepp/v3/detect`,
            method: "POST",
            headers : {
                'content-type': 'multipart/form-data'
            },
            data: formData

        }).then((response) => {
            console.log(response);
            console.log(response.data);
            // alert("The file is successfully uploaded");

            this.setState({
                results: response.data
            });

        }).catch((error) => {   
            console.log(error);

            this.setState({
                results: error
            });

        });
    }
  
    handleImageChange(e) {
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
  
    render() {
        const results = this.state.results;
        console.log(results);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="image_file" onChange={this.handleImageChange} />
                    <button type="submit" onClick={this.handleSubmit}>Upload Image</button>
                </form>

                {this.state.imagePreviewUrl ? (
                    <img src={this.state.imagePreviewUrl} alt="Placeholder" /> 
                ) : (
                    <img src={PlaceholderImage} alt="Placeholder" />
                )}

                <div>
                    {results ? (
                        <ul>
                            <li>Image ID: {results.image_id}</li>
                            <li>Request ID: {results.request_id}</li>
                            <li>Number of Faces: {results.face_num}</li>
                            <li>{results.faces.map((param, key) =>
                                <ul key={param.face_token}>
                                    <li>Face Token: {param.face_token}</li>
                                    <li>Face Rectangle: {param.face_rectangle.height}</li>
                                </ul>
                            )}</li>
                        </ul>
                    ) : (
                        <p>...</p>
                    )}
                </div>
            </div>
        )
    }
  
  }

  export default Demo;
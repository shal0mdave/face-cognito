import React, {Component} from 'react';
import axios from 'axios';
import PlaceholderImage from '../../../Assets/Imgs/Actions/image-placeholder.jpg';

class Demo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: '',
        persons: []
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {

      return (
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this._handleImageChange} />
            <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
          </form>
            {this.state.imagePreviewUrl ? (
                <img src={this.state.imagePreviewUrl} alt="Placeholder" /> 
            ) : (
                <img src={PlaceholderImage} alt="Placeholder" />
            )}
            <br />
            <ul>
                {this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        </div>
      )
    }
  
  }

  export default Demo;
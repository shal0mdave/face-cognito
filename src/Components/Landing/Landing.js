import React from  'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import './Landing.scss';

const landing = () =>{

    return(
        <header className="landing-wrap">
            <div className="container">
                <h1>Face Cognito</h1>
                <p>See &nbsp;
                    <Typed 
                    strings={[
                        'Beneath',
                        'Beyond']}
                        typeSpeed={80}
                        backSpeed={80}  
                        loop />
                </p>
                <Link className="btn btn-auth" to="/auth">Get Started</Link>
            </div>
        </header>
    )
}

export default landing;
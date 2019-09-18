import React from 'react';
import { Icon } from 'antd';

import './Auth.scss';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});

const auth = () => {
    return(
        <section className="Auth">
            <div className="container">
                <h1>Face Cognito</h1>
                <p>Sign in options</p>
                <button className="btn"><Icon type="google" /> Google</button>
                <button className="btn btn-facebook"> <IconFont type="icon-facebook" /> Facebook</button>   
            </div>
        </section>
    )
}

export default auth;
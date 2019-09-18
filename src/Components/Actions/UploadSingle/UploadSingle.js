import React from 'react';

import {Icon} from 'antd';

const uploadSingle = () =>{

    return(
        <form className="upload-single">
            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" />
                    <label className="custom-file-label"></label>
                </div>
            </div>
            <button className="btn" type="submit"><Icon type="cloud-upload" /> Upload</button>
        </form>
    );
}

export default uploadSingle;
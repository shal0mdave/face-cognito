import React from 'react';

import {Icon} from 'antd';

const UploadMultiple = () =>{

    return(
        <form className="upload-multiple">
            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input one" />
                    <label className="custom-file-label"></label>
                </div>
            </div>
            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input two" />
                    <label className="custom-file-label"></label>
                </div>
            </div>
            <button className="btn" type="submit"><Icon type="cloud-upload" /> Upload</button>
        </form>
    );
}

export default UploadMultiple;
/**
 * Created by maskedhawk on 30/11/16.
 */
import React from 'react';

const ImageDetail = (props) => {
    return (
        // props.image => this is the image object
        // props.image.title & link
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link} />
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.image.title}
                </h4>
            </div>
        </li>
    );
};

export default ImageDetail;

/**
 * Created by maskedhawk on 30/11/16.
 */
import React from 'react';

const ImageDetail = (props) => {
    return (
        // props.image => this is the image object
        // props.image.title & link
        <li>
            <img src={props.image.link} />
            {props.image.title}
        </li>
    );
};

export default ImageDetail;

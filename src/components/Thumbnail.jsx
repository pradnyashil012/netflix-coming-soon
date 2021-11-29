import React from 'react';
import "../styles/Thumbnail.css";

const Thumbnail = (props) => {
    let {image} = props;
    return (
        <div className="thumbnail">
            <img src={require(`../assets/movies/${image}`).default} alt="thumbnail" className="image" />
        </div>
    )
}

export default Thumbnail;

import React from "react";
import "../styles/Card.css";
import Thumbnail from "./Thumbnail";
import Content from "./Content";
import ControlBar from "./ControlBar";


const Card = (props) => {
  let { movie } = props;
  return (
    <div className="card">
      <Thumbnail image={movie.image} />
      <ControlBar logo={movie.logo} />
      <Content
        title={movie.title}
        announcement={movie.announcement}
        text={movie.text}
        tags={movie.tags}
      />
    </div>
  );
};

export default Card;

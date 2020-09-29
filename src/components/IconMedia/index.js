import React from "react";
import "./style.css";

function IconMedia(props) {
  return (
    <div>
      {props.rounded ? (
        <div className="icon-media-container-rounded">
          <img src={props.icon} className="icon-media-item" alt={props.alt} />
        </div>
      ) : (
        <div className="icon-media-container">
          <img src={props.icon} className="icon-media-item" alt={props.alt} />
        </div>
      )}
    </div>
  );
}

export default IconMedia;

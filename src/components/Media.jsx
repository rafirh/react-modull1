import React from "react";

function Media({ paragraph, title, image }) {
  return (
    <div className="media my-3">
      <img src={image} width="200" />
      <div className="media-body text-left">
        <h5 className="mt-0">{title}</h5>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Media;

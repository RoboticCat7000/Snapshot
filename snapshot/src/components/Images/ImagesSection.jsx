import React from "react";
import ImageItem from "./Image";

export default function ImagesSection(props) {
  return (
    <div>
      <ul>
        {props.images.map((i) => (
          <ImageItem key={Math.random()} src={i.src} />
        ))}
      </ul>
    </div>
  );
}

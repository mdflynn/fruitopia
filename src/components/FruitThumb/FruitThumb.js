import React from "react";
import "./FruitThumb.scss";

const FruitThumb = ({ details }) => {
  const formatUrl = `${details.name.toLowerCase()}`;
  const thumbImg = `https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${formatUrl}.png`;

  return (
    <article>
      <img src={thumbImg} />
      <p>{details.name}</p>
    </article>
  );
};

export default FruitThumb;
// image issues for:
// grape, lime, persimmon, papaya, melon
import React from "react";
import "./FruitThumb.scss";

import { Link } from "react-router-dom";

import grape from "../../assets/grape.jpg";
import lime from "../../assets/lime.jpg";
import melon from "../../assets/melon.jpg";
import papaya from "../../assets/papaya.jpg";
import persimmon from "../../assets/persimmon.jpg";

const FruitThumb = ({ details }) => {
  const determineImage = (fruitName) => {
    const name = fruitName.toLowerCase();
    const thumbImg = `https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${name}.png`;

    switch (name) {
      case "grapes":
        return grape;
        break;
      case "lime":
        return lime;
        break;
      case "melon":
        return melon;
        break;
      case "papaya":
        return papaya;
        break;
      case "persimmon":
        return persimmon;
        break;
      default:
        return thumbImg;
    }
  };

  const image = determineImage(details.name);

  return (
    <Link to={`fruit/${details.id}`}>
      <article className="thumb-article">
        <img src={image} alt={details.name} />
        <p>{details.name}</p>
      </article>
    </Link>
  );
};

export default FruitThumb;

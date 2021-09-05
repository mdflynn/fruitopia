import React from "react";
import "./FruitThumb.scss";

import { Link } from "react-router-dom";

import grape from "../../assets/grape.jpg";
import lime from "../../assets/lime.jpg";
import melon from "../../assets/melon.jpg";
import papaya from "../../assets/papaya.jpg";
import persimmon from "../../assets/persimmon.jpg";
import durian from "../../assets/durian.jpg";

const FruitThumb = ({ details, selectFruit }) => {
  const determineImage = (fruitName) => {
    const name = fruitName.toLowerCase();
    const imgUrl = `https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${name}.png`;

    let thumbImg;

    switch (name) {
      case "grapes":
        thumbImg = grape;
        break;
      case "lime":
        thumbImg = lime;
        break;
      case "melon":
        thumbImg = melon;
        break;
      case "papaya":
        thumbImg = papaya;
        break;
      case "persimmon":
        thumbImg = persimmon;
        break;
      case "durian":
        thumbImg = durian;
        break;
      default:
        thumbImg = imgUrl;
    }
    return thumbImg;
  };

  const image = determineImage(details.name);

  return (
    <Link to={`fruit/${details.id}`}>
      <article
        className="thumb-article"
        onClick={() => selectFruit({ ...details, image })}
      >
        <img src={image} alt={details.name} />
        <p>{details.name}</p>
      </article>
    </Link>
  );
};

export default FruitThumb;

import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import fetchFruitInformation from "../../apiCalls";

import FruitThumb from "../FruitThumb/FruitThumb";

const HomePage = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetchFruitInformation().then((data) => setFruits(data));
  }, []);

  const generateFruitThumbs = () => {
    return fruits.map((fruit) => <FruitThumb key={fruit.id} details={fruit} />);
  };

  return <section>{fruits.length && generateFruitThumbs()}</section>;
};

export default HomePage;

import React, { useEffect, useState } from "react";
import "./HomePage.scss";

import fetchFruitInformation from "../../apiCalls";

const HomePage = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetchFruitInformation().then((data) => setFruits(data));
  }, []);
  return <h1>HomePage</h1>;
};

export default HomePage;

import React from "react";
import "./FruitPage.scss";

const FruitPage = ({ fruitDetails }) => {
  return (
    <section className="fruit-section">
      <img src={fruitDetails.image} />
      <div className="fruit-details">
        <div>
          <p>{fruitDetails.name}</p>
          <p>{fruitDetails.genus}</p>
          <p>{fruitDetails.family}</p>
          <p>{fruitDetails.order}</p>
          <p>{fruitDetails.family}</p>
        </div>
      </div>
    </section>
  );
};

export default FruitPage;

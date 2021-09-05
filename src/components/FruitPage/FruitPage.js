import React from "react";
import "./FruitPage.scss";

const FruitPage = ({ fruitDetails }) => {
  return (
    <section className="fruit-section">
      <img src={fruitDetails.image} />
      <div className="fruit-details">
        <div className="fruit-info">
          <p>Name: {fruitDetails.name}</p>
          <p>Genus: {fruitDetails.genus}</p>
          <p>Family: {fruitDetails.family}</p>
          <p>Order: {fruitDetails.order}</p>
        </div>
        <div className="nutrition-info">
          <p>Macronutrients</p>
          <ul>
            <li>Carbohydrates: {fruitDetails.nutritions.carbohydrates}</li>
            <li>Protein: {fruitDetails.nutritions.protein}</li>
            <li>Fat: {fruitDetails.nutritions.fat}</li>
            <li>Calories: {fruitDetails.nutritions.calories}</li>
            <li>Sugar: {fruitDetails.nutritions.sugar}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FruitPage;

import React from "react";
import "./FruitPage.scss";

const FruitPage = ({ fruitDetails }) => {
  return (
    <section className="fruit-section">
      <img src={fruitDetails.image} alt={fruitDetails.name} />
      <div className="fruit-details">
        <ul className="fruit-info">
          <li>Name: {fruitDetails.name}</li>
          <li>Genus: {fruitDetails.genus}</li>
          <li>Family: {fruitDetails.family}</li>
          <li>Order: {fruitDetails.order}</li>
        </ul>
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

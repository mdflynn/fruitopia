import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";

import FruitPage from "./FruitPage";

const sampleFruit = {
  genus: "Citrus",
  name: "Lemon",
  id: 26,
  family: "Rutaceae",
  order: "Sapindales",
  nutritions: {
    carbohydrates: 9,
    protein: 1.1,
    fat: 0.3,
    calories: 29,
    sugar: 2.5,
  },
  image:
    "https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/lemon.png",
};

beforeEach(() => {
  render(
    <MemoryRouter>
      <FruitPage fruitDetails={sampleFruit} />
    </MemoryRouter>
  );
});

describe("<FruitPage />", () => {
  it("should render properly", () => {
    const lemon = screen.getByText("Name: Lemon");

    expect(lemon).toBeInTheDocument();
  });


});

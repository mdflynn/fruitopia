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
  it("should have a Name", () => {
    const name = screen.getByText("Name: Lemon");

    expect(name).toBeInTheDocument();
  });

  it("should have a Genus", () => {
    const genus = screen.getByText('Genus: Citrus')

    expect(genus).toBeInTheDocument();
  });

  it("should have a Family", () => {
    const family = screen.getByText("Family: Rutaceae");

    expect(family).toBeInTheDocument();
  });

  it("should have an Order", () => {
    const order = screen.getByText("Order: Sapindales");

    expect(order).toBeInTheDocument();
  });

  it("should have an Image", () => {
    const image = screen.getByRole("img", { name: /lemon/i });

    expect(image).toBeInTheDocument();
  });

  it("should have Macronutrients", () => {
    const macros = screen.getByText('Macronutrients')
    const carbs = screen.getByText("Carbohydrates: 9")
    const protein = screen.getByText("Protein: 1.1")
    const fat = screen.getByText("Fat: 0.3")
    const calories = screen.getByText("Calories: 29")
    const sugar = screen.getByText("Sugar: 2.5")

    expect(macros).toBeInTheDocument();
    expect(carbs).toBeInTheDocument();
    expect(protein).toBeInTheDocument();
    expect(fat).toBeInTheDocument();
    expect(calories).toBeInTheDocument();
    expect(sugar).toBeInTheDocument();
  })
});

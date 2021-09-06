import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";

import FruitThumb from "./FruitThumb";

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
};

beforeEach(() => {
  render(
    <MemoryRouter>
      <FruitThumb details={sampleFruit} selectFruit={jest.mock()} />
    </MemoryRouter>
  );
});

describe("<FruitThumb />", () => {
  it("should have a Name", () => {
    const name = screen.getByText("Lemon");

    expect(name).toBeInTheDocument();
  });

  it("should have an Image", () => {
    const lemon = screen.getByRole("link", { name: /lemon lemon/i });

    expect(lemon).toBeInTheDocument();
  });
});

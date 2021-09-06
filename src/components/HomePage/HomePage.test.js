import React from "react";

import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";

import HomePage from "./HomePage";
import fetchFruitInformation from "../../apiCalls";
jest.mock("../../apiCalls.js");

const sampleFruits = [
  {
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
  },
  {
    genus: "Malus",
    name: "Apple",
    id: 24,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.3,
      fat: 0.4,
      calories: 52,
      sugar: 10.3,
    },
  },
];

describe("<HomePage />", () => {
  it("should have multiple fruit names", async () => {
    const mockedFetchCall = fetchFruitInformation;
    mockedFetchCall.mockResolvedValue(sampleFruits);

    render(
      <MemoryRouter>
        <HomePage selectFruit={jest.mock()} />
      </MemoryRouter>
    );

    const lemon = await screen.findByText("Lemon");
    const apple = await screen.findByText("Apple");

    expect(lemon).toBeInTheDocument();
    expect(apple).toBeInTheDocument();
  });
});

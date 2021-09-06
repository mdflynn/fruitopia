import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

import App from "./App";
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

describe("<App />", () => {
  it("should render the title", async () => {
    const mockedFetchCall = fetchFruitInformation;
    mockedFetchCall.mockResolvedValue(sampleFruits);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const title = screen.getByText("Fruitopia");

    expect(title).toBeInTheDocument();
  });

  it("should render the fruit names", async () => {
    const mockedFetchCall = fetchFruitInformation;
    mockedFetchCall.mockResolvedValue(sampleFruits);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const lemon = await screen.findByText("Lemon");
    const apple = await screen.findByText("Apple");

    expect(lemon).toBeInTheDocument();
    expect(apple).toBeInTheDocument();
  });

  it("should render the fruit images", async () => {
    const mockedFetchCall = fetchFruitInformation;
    mockedFetchCall.mockResolvedValue(sampleFruits);

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const lemon = await screen.findByRole("link", { name: /lemon lemon/i });
    const apple = await screen.findByRole("link", { name: /apple apple/i });

    expect(lemon).toBeInTheDocument();
    expect(apple).toBeInTheDocument();
  });
});

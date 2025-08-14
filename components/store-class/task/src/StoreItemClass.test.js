import { render, screen } from "@testing-library/react";

import StoreItemClass from "./StoreItemClass";

test("StoreItemClass test", () => {
  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  };

  render(<StoreItemClass item={item} />);
  expect(screen.getByText(/Tiger of Sweden/)).toBeInTheDocument();
});
import { render } from "@testing-library/react";
import About from ".";

describe("Testing about page", () => {
  it("first test", () => {
    const { getByText } = render(<About />);
    expect(getByText("Page in construction")).toBeTruthy();
  });
});

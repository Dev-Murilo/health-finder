import { render } from "@testing-library/react";
import { SideLink } from "./side-link";

describe("Testing side link component", () => {
  it("Should to render component with correct title", () => {
    const textLink = "Home page";
    const href = "http://healthfinder.com.br";
    const { getByTestId } = render(<SideLink text={textLink} href={href} />);

    expect(getByTestId("side-link-text").textContent).toBe(textLink);
  });

  it("Should to render component with correct link", () => {
    const textLink = "Home page";
    const href = "http://healthfinder.com.br/";
    const { getByTestId } = render(<SideLink text={textLink} href={href} />);

    expect(getByTestId("side-link")).toHaveProperty("href", href);
  });

  it("Should to render component with correct styles in text link container", () => {
    const textLink = "Home page";
    const href = "http://healthfinder.com.br/";
    const { getByTestId } = render(<SideLink text={textLink} href={href} />);
    const flexContainer = getByTestId("side-link-container");
    const styles = getComputedStyle(flexContainer);

    const expectedStyles = {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "transform 0.2s ease-in",
      visibility: "visible",
    };

    for (const [key, value] of Object.entries(expectedStyles)) {
      expect(styles[key as any]).toBe(value);
    }
  });
});

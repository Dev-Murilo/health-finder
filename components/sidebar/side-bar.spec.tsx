import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./side-bar";

describe("Testing side bar component", () => {
  it("Should to have correct links and texts", async () => {
    const user = userEvent.setup();
    const { getAllByTestId } = render(
      <SideBar>
        <p>testing sidebar</p>
      </SideBar>
    );

    await user.click(screen.getByTestId("open-menu-button", { trim: true }));

    const links = getAllByTestId("side-link");

    expect(links[0].getAttribute("href")).toBe("/");
    expect(
      links[0].querySelector("[data-testid='side-link-text']")?.textContent
    ).toBe("Início");

    expect(links[1].getAttribute("href")).toBe("/search");
    expect(
      links[1].querySelector("[data-testid='side-link-text']")?.textContent
    ).toBe("Buscar serviços");

    expect(links[2].getAttribute("href")).toBe("/about");
    expect(
      links[2].querySelector("[data-testid='side-link-text']")?.textContent
    ).toBe("Sobre");
  });
});

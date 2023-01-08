import { render, waitFor } from "@testing-library/react";
import { Head } from "./head";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe("Testing Head component", () => {
  it("Should to have the title passed for component", () => {
    const title = "My testing page title";
    render(<Head title={title} />, {
      container: document.head,
    });

    expect(document.title).toBe(title);
  });

  it("Should to have primary meta tag configurations", () => {
    const { getByTestId } = render(<Head title="Testing" />, {
      container: document.head,
    });

    const meta = getByTestId("meta");
    const faviconLink = getByTestId("favicon");

    expect(meta).toHaveProperty("name", "viewport");
    expect(meta).toHaveProperty(
      "content",
      "width=device-width, initial-scale=1"
    );
    expect(faviconLink).toHaveProperty("rel", "icon");
    expect(
      faviconLink.getAttribute("href")?.includes("/favicon.ico")
    ).toBeTruthy();
  });

  it("Should to have custom meta tags", () => {
    const description = "Heath finder description";
    const robotsContent = "index, follow";

    const CustomMeta = () => {
      return (
        <>
          <meta
            data-testid="description"
            name="description"
            content={description}
          />
          <meta data-testid="robots" name="robots" content={robotsContent} />
        </>
      );
    };

    const { getByTestId } = render(
      <Head title="Testing" children={<CustomMeta />} />,
      {
        container: document.head,
      }
    );

    const metaDescription = getByTestId("description");
    const metaRobots = getByTestId("robots");

    expect(metaDescription).toHaveProperty("name", "description");
    expect(metaDescription).toHaveProperty("content", description);
    expect(metaRobots).toHaveProperty("name", "robots");
    expect(metaRobots).toHaveProperty("content", robotsContent);
  });
});

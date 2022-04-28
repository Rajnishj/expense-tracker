import Header from "./Header";
import { screen, render } from "@testing-library/react";

describe("Header Component", () => {
  it("Should be have an anchor tag", () => {
    const testIte = render(<Header />);
    console.log("testIte", testIte);
    const anchorItem = screen.getByRole("link", { name: "Star" });
    expect(anchorItem).toBeDefined();
  });
});

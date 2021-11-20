import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Layout from "..";

test("it should render with no violations", async () => {
  const { container } = render(<Layout />);
  expect(await axe(container)).toHaveNoViolations();
});

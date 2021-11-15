import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Sidebar from "..";

test("it should render with no violations", async () => {
  const { container } = render(<Sidebar />);
  expect(await axe(container)).toHaveNoViolations();
});

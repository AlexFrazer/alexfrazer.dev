import { render, screen } from "@test/test-utils";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import Sidebar from "..";

test("it should render with no violations", async () => {
  const { container } = render(<Sidebar />);
  expect(await axe(container)).toHaveNoViolations();
});

test("clicking the nav should toggle", async () => {
  render(<Sidebar />);
  userEvent.click(await screen.findByRole("button", { name: /menu/i }));
});

import SignIn from "./SignIn";
import { render } from "@testing-library/react";

describe("<SignIn />", () => {
  test("should display a blank login form", async () => {
    const { getByRole, getByPlaceholderText, getByText } = render(<SignIn />);
    expect(getByText("Zaloguj się")).toBeInTheDocument();
    expect(getByText("Adres email")).toBeInTheDocument();
    expect(getByText("Hasło")).toBeInTheDocument();
    expect(getByRole("button")).not.toBeDisabled();
    expect(getByPlaceholderText("Wprowadź hasło")).toBeEmptyDOMElement();
    expect(getByPlaceholderText("Wprowadź adres email")).toBeEmptyDOMElement();
  });
});

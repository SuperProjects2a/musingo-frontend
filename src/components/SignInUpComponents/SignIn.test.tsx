import SignIn from "./SignIn";
import { render, fireEvent, act,waitFor } from "@testing-library/react";

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
  test("Form should be filled", async () => {
    const { getByPlaceholderText } = render(<SignIn />);
    await act(async () => {
      fireEvent.change(getByPlaceholderText("Wprowadź adres email"), {
        target: { value: "Gracja65@hotmail.com" },
      });
      fireEvent.change(getByPlaceholderText("Wprowadź hasło"), {
        target: { value: "123$Qwer" },
      });
    });
    expect(getByPlaceholderText("Wprowadź adres email")).toHaveValue(
      "Gracja65@hotmail.com"
    );
    expect(getByPlaceholderText("Wprowadź hasło")).toHaveValue("123$Qwer");
  });
  test("should error will be display for inncorect email address", async () => {
    const {getByTestId, getByPlaceholderText } = render(<SignIn />);
    const email = getByPlaceholderText("Wprowadź adres email");
    const emailError = getByTestId("emailErr");

    await act(async () => {
      fireEvent.change(email, { target: { value: "Gracja65hotmail.com" } });
    });
    
      expect(emailError).toHaveTextContent("Niepoprawny adres email");
  
  });
});



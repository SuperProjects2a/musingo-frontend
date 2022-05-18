import SignIn from "./SignIn";
import { render,fireEvent,act } from "@testing-library/react";

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
  test("Form should be filled",async () =>{
    const {getByPlaceholderText} = render(<SignIn />);
    console.log(getByPlaceholderText("Wprowadź adres email"))
    await act(async () => {
        fireEvent.change(getByPlaceholderText("Wprowadź adres email"), {target: {value: 'Gracja65@hotmail.com'}});
        fireEvent.change(getByPlaceholderText("Wprowadź hasło"), {target: {value: '123$Qwer'}});
      })
      console.log(getByPlaceholderText("Wprowadź adres email"))
       expect(getByPlaceholderText('Wprowadź adres email')).toHaveValue("Gracja65@hotmail.com");
       expect(getByPlaceholderText('Wprowadź hasło')).toHaveValue("123$Qwer");
})
});

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Register from "../Register";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("<Register />", () => {

  //test for rendering the register form
  it("renders the register form", () => {
    render(<Register />);
    const fname = screen.getByPlaceholderText("First Name");
    const lname = screen.getByPlaceholderText("Last Name");
    const name = screen.getByPlaceholderText("Username");
    const pwd = screen.getByPlaceholderText("Password");

    expect(name).toBeDefined();
    expect(pwd).toBeDefined();
    expect(fname).toBeDefined();
    expect(lname).toBeDefined();
  });

  //test for updating state when a value change happens
  it("updates state when form input values change", () => {
    const { getByPlaceholderText } = render(<Register />);
    const fnameInput = getByPlaceholderText("First Name");
    const lnameInput = getByPlaceholderText("Last Name");
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.change(fnameInput, { target: { value: "wasd" } });
    fireEvent.change(lnameInput, { target: { value: "dsaw" } });
    fireEvent.change(usernameInput, { target: { value: "www" } });
    fireEvent.change(passwordInput, { target: { value: "ddd" } });

    expect(fnameInput.value).toBe("wasd");
    expect(lnameInput.value).toBe("dsaw");
    expect(usernameInput.value).toBe("www");
    expect(passwordInput.value).toBe("ddd");
  });

  //test for rendering the register button
  it("renders the register button", () => {
    const { getByTestId } = render(<Register />);
    const registerButton = getByTestId("register");
    expect(registerButton).toBeDefined();
  });

  //test for attempting to submit
  it("attempt to submit", async () => {
    const { getByPlaceholderText, getByTestId } = render(<Register />);
    const fnameInput = getByPlaceholderText("First Name");
    const lnameInput = getByPlaceholderText("Last Name");
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.change(fnameInput, { target: { value: "wasd" } });
    fireEvent.change(lnameInput, { target: { value: "dsaw" } });
    fireEvent.change(usernameInput, { target: { value: "www" } });
    fireEvent.change(passwordInput, { target: { value: "ddd" } });

    expect(fnameInput.value).toBe("wasd");
    expect(lnameInput.value).toBe("dsaw");
    expect(usernameInput.value).toBe("www");
    expect(passwordInput.value).toBe("ddd");
    const registerButton = getByTestId("register");
    expect(registerButton).toBeDefined();
    if (registerButton) {
      await fireEvent.click(registerButton);
    }
    expect(screen.getByTestId("err")).toBeEmptyDOMElement("");
  });
});

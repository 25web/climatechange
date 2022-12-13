import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Register from "../Register";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
const href_fix = (
  <Router>
    <Register />
  </Router>
);

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("<Register />", () => {
  it("renders the register form", () => {
    render(href_fix);
    const fname = screen.getByPlaceholderText("First Name");
    const lname = screen.getByPlaceholderText("Last Name");
    const name = screen.getByPlaceholderText("Username");
    const pwd = screen.getByPlaceholderText("Password");

    expect(name).toBeDefined();
    expect(pwd).toBeDefined();
    expect(fname).toBeDefined();
    expect(lname).toBeDefined();
  });

  it("updates state when form input values change", () => {
    const { getByPlaceholderText } = render(href_fix);
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

  it("renders the register button", () => {
    const { getByTestId } = render(href_fix);
    const registerButton = getByTestId("register");
    expect(registerButton).toBeDefined();
  });

  it("attempt to submit", async () => {
    const { getByPlaceholderText, getByTestId } = render(href_fix);
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

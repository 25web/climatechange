import React from "react";
import { render, fireEvent, screen, userEvent } from "@testing-library/react";
import Login from "../Login";
import "@testing-library/jest-dom/extend-expect";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("<Login />", () => {
  it("renders the login form", () => {
    render(<Login />);
    const name = screen.getByPlaceholderText("Username");
    const pwd = screen.getByPlaceholderText("Password");

    expect(name).toBeDefined();
    expect(pwd).toBeDefined();
  });

  it("updates state when form input values change", () => {
    const { getByPlaceholderText } = render(<Login />);
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.change(usernameInput, { target: { value: "www" } });
    fireEvent.change(passwordInput, { target: { value: "ddd" } });

    expect(usernameInput.value).toBe("www");
    expect(passwordInput.value).toBe("ddd");
  });

  it("renders the login button", () => {
    const { getByTestId } = render(<Login />);
    const loginButton = getByTestId("login");
    expect(loginButton).toBeDefined();
  });

  it("attempt to submit", async () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.change(usernameInput, { target: { value: "www" } });
    fireEvent.change(passwordInput, { target: { value: "ddd" } });

    expect(usernameInput.value).toBe("www");
    expect(passwordInput.value).toBe("ddd");
    const loginButton = getByTestId("login");
    expect(loginButton).toBeDefined();
    if (loginButton) {
      await fireEvent.click(loginButton);
    }
    expect(screen.getByTestId("err")).toBeEmptyDOMElement("");
  });
});

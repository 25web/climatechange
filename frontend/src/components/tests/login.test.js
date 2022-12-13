import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../Login";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

const href_fix = (
  <Router>
    <Login />
  </Router>
);
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("<Login />", () => {
  //test for rendering login form
  it("renders the login form", () => {
    render(href_fix);
    const name = screen.getByPlaceholderText("Username");
    const pwd = screen.getByPlaceholderText("Password");
    expect(name).toBeDefined();
    expect(pwd).toBeDefined();
  });

  //test for updating state when a value change happens
  it("updates state when form input values change", () => {
    const { getByPlaceholderText } = render(href_fix);
    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(usernameInput, { target: { value: "www" } });
    fireEvent.change(passwordInput, { target: { value: "ddd" } });
    expect(usernameInput.value).toBe("www");
    expect(passwordInput.value).toBe("ddd");
  });

  //test for rendering the login button
  it("renders the login button", () => {
    const { getByTestId } = render(href_fix);
    const loginButton = getByTestId("login");
    expect(loginButton).toBeDefined();
  });

  //test for submitting login data
  it("attempt to submit", async () => {
    const { getByPlaceholderText, getByTestId } = render(href_fix);
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

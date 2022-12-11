import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Register from "../Register";

describe("<Register />", () => {
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

  it("renders the register button", () => {
    const { getByTestId } = render(<Register />);
    const registerButton = getByTestId("register");
    expect(registerButton).toBeDefined();
  });

  test("attempt to submit empty", async () => {});
});

import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

describe("Form Component", () => {
  beforeEach(() => {
    render(<Form />);
  });

  it("should render the form", () => {
    const nameInput = screen.getByLabelText("Name");
    const nameLabel = screen.getByText("Name");
    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    const emailInput = screen.getByLabelText("Email");
    const emailLabel = screen.getByText("Email");
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByLabelText("Password");
    const passwordLabel = screen.getByText("Password");
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("should change the data", () => {
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(nameInput, { target: { value: "Jhon" } });
    fireEvent.change(emailInput, { target: { value: "jhon@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    expect(nameInput).toHaveValue("Jhon");
    expect(emailInput).toHaveValue("jhon@gmail.com");
    expect(passwordInput).toHaveValue("123456");
  });
  it("should show the data", () => {
    const name = "Jhon";
    const email = "jhon@gmail.com";
    const password = "12345";
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(nameInput, { target: { value: name } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText(password)).toBeInTheDocument();
  });
});

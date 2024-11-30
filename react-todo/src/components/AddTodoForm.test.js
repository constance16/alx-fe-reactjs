import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";
import "@testing-library/jest-dom";

describe("AddTodoForm Component", () => {
  test("renders input and button", () => {
    render(<AddTodoForm onAddTodo={() => {}} />);
    expect(screen.getByPlaceholderText("Add a new todo")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("calls onAddTodo with input value", () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const input = screen.getByPlaceholderText("Add a new todo");
    fireEvent.change(input, { target: { value: "Test Todo" } });

    fireEvent.click(screen.getByText("Add"));
    expect(mockOnAddTodo).toHaveBeenCalledWith("Test Todo");
  });
});
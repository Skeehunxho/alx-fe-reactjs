import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Test the Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add new todo/i);
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Roman Numeral Converter App', () => {
  test('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Roman Numeral Converter/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('handles valid input and displays the result', async () => {
    render(<App />);
    const inputField = screen.getByLabelText(/Enter an integer/i);
    const convertButton = screen.getByText(/Convert/i);

    fireEvent.change(inputField, { target: { value: '10' } });
    fireEvent.click(convertButton);

    const result = await screen.findByText(/Roman Numeral: X/i);
    expect(result).toBeInTheDocument();
  });

  test('displays an error message for invalid input', async () => {
    render(<App />);
    const inputField = screen.getByLabelText(/Enter an integer/i);
    const convertButton = screen.getByText(/Convert/i);

    fireEvent.change(inputField, { target: { value: '4000' } });
    fireEvent.click(convertButton);

    const errorMessage = await screen.findByText(/Invalid input or server error/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

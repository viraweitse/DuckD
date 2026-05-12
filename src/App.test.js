// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DuckDBQuery title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DuckDBQuery/i);
    expect(titleElement).toBeInTheDocument();
});

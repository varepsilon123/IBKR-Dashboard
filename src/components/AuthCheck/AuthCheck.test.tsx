import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AuthCheck from './AuthCheck';
import { checkAuthStatus } from '../../controllers/auth/auth.controller';

// Mock the checkAuthStatus function
jest.mock('../../controllers/auth/auth.controller', () => ({
  checkAuthStatus: jest.fn(),
}));

describe('AuthCheck Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previous mock calls
  });

  it('should display loading message initially', () => {
    render(<AuthCheck />);
    expect(screen.getByText(/checking connection/i)).toBeInTheDocument();
  });

  it('should display success message when authentication is successful', async () => {
    (checkAuthStatus as jest.Mock).mockResolvedValue({
      success: true,
      message: 'Successfully connected to IBKR Gateway',
    });

    render(<AuthCheck />);

    // Wait for the loading state to finish
    await waitFor(() => expect(screen.queryByText(/checking connection/i)).not.toBeInTheDocument());

    expect(screen.getByText(/successfully connected to ibkr gateway/i)).toBeInTheDocument();
  });

  it('should display error message when authentication fails', async () => {
    (checkAuthStatus as jest.Mock).mockRejectedValue(new Error('Connection error occurred'));

    render(<AuthCheck />);

    // Wait for the loading state to finish
    await waitFor(() => expect(screen.queryByText(/checking connection/i)).not.toBeInTheDocument());

    expect(screen.getByText(/connection error occurred/i)).toBeInTheDocument();
  });

  it('should call verifyAuth when button is clicked', async () => {
    (checkAuthStatus as jest.Mock).mockResolvedValue({
      success: true,
      message: 'Successfully connected to IBKR Gateway',
    });

    render(<AuthCheck />);

    // Wait for the loading state to finish
    await waitFor(() => expect(screen.queryByText(/checking connection/i)).not.toBeInTheDocument());

    const button = screen.getByRole('button', { name: /verify auth/i });
    fireEvent.click(button);

    // Wait for the success message to appear after clicking the button
    await waitFor(() => expect(screen.getByText(/successfully connected to ibkr gateway/i)).toBeInTheDocument());
  });
});

import { checkAuthStatus } from './auth.controller';
import axios from 'axios';

jest.mock('axios');

describe('checkAuthStatus', () => {
  it('should return success when API call is successful', async () => {
    // Mocking a successful response
    (axios.get as jest.Mock).mockResolvedValue({ data: {} });

    const result = await checkAuthStatus();
    
    expect(result).toEqual({ 
      success: true, 
      message: 'Successfully connected to IBKR Gateway' 
    });
  });

  it('should return failure when API call fails', async () => {
    // Mocking a failed response
    (axios.get as jest.Mock).mockRejectedValue(new Error('Network Error'));

    const result = await checkAuthStatus();
    
    expect(result).toEqual({ 
      success: false, 
      message: 'Failed to connect to IBKR Gateway' 
    });
  });
});

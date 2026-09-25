import axios from 'axios';
import { checkAuthStatus } from './auth.controller';

vi.mock('axios');

describe('checkAuthStatus', () => {
  it('should return success when the gateway is authenticated and connected', async () => {
    vi.mocked(axios.post).mockResolvedValue({ data: { authenticated: true, connected: true, competing: false } });

    const result = await checkAuthStatus();

    expect(axios.post).toHaveBeenCalledWith('/v1/api/iserver/auth/status');
    expect(result).toEqual({
      success: true,
      message: 'Successfully connected to IBKR Gateway'
    });
  });

  it('should return failure when the gateway is reachable but not authenticated', async () => {
    vi.mocked(axios.post).mockResolvedValue({ data: { authenticated: false, connected: true, competing: false } });

    const result = await checkAuthStatus();

    expect(result).toEqual({
      success: false,
      message: 'IBKR Gateway reachable but not authenticated'
    });
  });

  it('should return failure when API call fails', async () => {
    vi.mocked(axios.post).mockRejectedValue(new Error('Network Error'));

    const result = await checkAuthStatus();

    expect(result).toEqual({
      success: false,
      message: 'Failed to connect to IBKR Gateway'
    });
  });
});

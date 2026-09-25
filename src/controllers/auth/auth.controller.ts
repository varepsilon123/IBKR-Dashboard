import axios from 'axios';

// Relative URL: the Vite dev server proxies /v1/api to the iBeam gateway (see vite.config.js)
const AUTH_STATUS_URL = '/v1/api/iserver/auth/status';

interface AuthStatusResponse {
  authenticated: boolean;
  connected: boolean;
  competing: boolean;
}

export const checkAuthStatus = async (): Promise<{ success: boolean; message: string }> => {
  try {
    const { data } = await axios.post<AuthStatusResponse>(AUTH_STATUS_URL);

    if (data.authenticated && data.connected) {
      return { success: true, message: 'Successfully connected to IBKR Gateway' };
    }
    return { success: false, message: 'IBKR Gateway reachable but not authenticated' };
  } catch {
    // 401 from the gateway means no brokerage session; network errors mean the gateway is down
    return { success: false, message: 'Failed to connect to IBKR Gateway' };
  }
};

import axios from 'axios';

// @ts-expect-error Environment variables are defined in env.list
const API_URL = import.meta.env.VITE_IBEAM_GATEWAY_BASE_URL;
import { AxiosRequestConfig } from 'axios';

export const checkAuthStatus = async (): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await axios.get(`${API_URL}/v1/api/one/user`);
    
    console.log('Auth check successful:', response.data);
    return { 
      success: true, 
      message: 'Successfully connected to IBKR Gateway' 
    };
    
  } catch (error) {
    console.error('Auth check failed:', error instanceof Error ? error.message : 'Unknown error');
    return { 
      success: false, 
      message: 'Failed to connect to IBKR Gateway' 
    };
  }
};

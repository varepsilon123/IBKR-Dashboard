import axios from 'axios';

export const checkAuthStatus = async (): Promise<{ success: boolean; message: string }> => {
  try {

    // const response = await axios.get('/v1/api/one/user');
    const response = await axios.get('/v1/api/portfolio/accounts');
    
    return { 
      success: true, 
      message: 'Successfully connected to IBKR Gateway' 
    };
    
  } catch (error) {
    // console.error('Auth check failed:', error instanceof Error ? error.message : 'Unknown error');
    return { 
      success: false, 
      message: 'Failed to connect to IBKR Gateway' 
    };
  }
};

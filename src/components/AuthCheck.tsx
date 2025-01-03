import React, { useEffect, useState } from 'react';
import { checkAuthStatus } from '../controllers/auth.controller';

interface AuthCheckProps {
  children?: React.ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const result = await checkAuthStatus();
        setStatus(result);
        setIsLoading(false);
      } catch (error) {
        setStatus({ success: false, message: 'Connection error occurred' });
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (isLoading) {
    return <div>Checking connection...</div>;
  }

  return <div>{status?.message}</div>;
};

export default AuthCheck;

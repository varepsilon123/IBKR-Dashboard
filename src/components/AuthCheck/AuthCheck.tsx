import React, { useEffect, useState } from 'react';
import { checkAuthStatus } from '../../controllers/auth/auth.controller';

interface AuthCheckProps {
  children?: React.ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const verifyAuth = async () => {
    setIsLoading(true);
    try {
      const result = await checkAuthStatus();
      setStatus(result);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } catch (error) {
      setStatus({ success: false, message: 'Connection error occurred' });
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return (
    <div>
      <button className='mb-1' onClick={verifyAuth}>Verify Auth</button>
      <p>
        {
          status && 
            <span className={showMessage? 'animate-fadeIn':'animate-fadeOut'}>
              {status.message}
            </span>
        }
      </p>
      {/* {children} */}
    </div>
  );
};

export default AuthCheck;

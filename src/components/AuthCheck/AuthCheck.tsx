import React, { useCallback, useEffect, useRef, useState } from 'react';
import { checkAuthStatus } from '../../controllers/auth/auth.controller';

const MESSAGE_DURATION_MS = 5000;

const AuthCheck: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const fetchStatus = () =>
    checkAuthStatus().catch(() => ({ success: false, message: 'Connection error occurred' }));

  const applyResult = useCallback((result: { success: boolean; message: string }) => {
    setStatus(result);
    setShowMessage(true);
    setIsLoading(false);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowMessage(false), MESSAGE_DURATION_MS);
  }, []);

  const verifyAuth = async () => {
    setIsLoading(true);
    applyResult(await fetchStatus());
  };

  useEffect(() => {
    let cancelled = false;
    fetchStatus().then((result) => {
      if (!cancelled) applyResult(result);
    });
    return () => {
      cancelled = true;
      clearTimeout(hideTimer.current);
    };
  }, [applyResult]);

  return (
    <div>
      <button className='mb-1' onClick={verifyAuth} disabled={isLoading}>Verify Auth</button>
      <p>
        {isLoading && <span>Checking connection...</span>}
        {
          !isLoading && status &&
            <span className={showMessage? 'animate-fadeIn':'animate-fadeOut'}>
              {status.message}
            </span>
        }
      </p>
    </div>
  );
};

export default AuthCheck;

// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulating an authentication check
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  return isAuthenticated;
}

export default useAuth;

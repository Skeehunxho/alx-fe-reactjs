// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

function ProtectedRoute({ element: Element, ...rest }) {
  const isAuthenticated = useAuth(); // Get auth status from useAuth hook

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/" />;
}

export default ProtectedRoute;

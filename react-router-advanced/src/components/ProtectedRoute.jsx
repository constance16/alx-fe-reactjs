import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Access authentication state

  return isAuthenticated ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired, // Ensure isAuthenticated is a required boolean
    children: PropTypes.node.isRequired, // Validate the presence of child components
  };

export default ProtectedRoute;
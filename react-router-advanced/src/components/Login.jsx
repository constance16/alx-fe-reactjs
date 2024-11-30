import useAuth from '../hooks/useAuth';

const Login = () => {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <>
          <p>You are logged in!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
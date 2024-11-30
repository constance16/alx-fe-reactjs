import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  const isAuthenticated = false; // Simulate authentication

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Blog Route */}
        <Route path="/profile/*" element={
           <ProtectedRoute isAuthenticated={isAuthenticated}>
             <Profile />
           </ProtectedRoute>
         }
          />
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
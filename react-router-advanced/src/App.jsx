import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';

function App() {
  // Simulating authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> | 
          <a href="/profile">Profile</a> | 
          <a href="/blog/1">Blog Post 1</a> | 
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </nav>

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Route for Profile */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isLoggedIn} element={Profile} />
            }
          >
            {/* Nested Routes inside Profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route for Blog Posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

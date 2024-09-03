import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/*ProtectedRoute*/}
        <Route 
        path='/profile/*'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
   />
      </Routes>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { searchGitHubUser } from './services/githubAPI';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await searchGitHubUser(username);
      setUserData(data);
      setError(null);  // Clear any previous error
    } catch (err) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

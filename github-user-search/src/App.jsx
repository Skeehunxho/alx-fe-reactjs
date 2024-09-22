import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/Searchbar';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = async (username) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${username}`);
      setUsers(response.data.items);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4 text-center">GitHub User Search</h1>
      <SearchBar onSearch={searchUsers} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
};

export default App;

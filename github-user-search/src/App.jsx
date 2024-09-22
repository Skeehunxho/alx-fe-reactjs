import { useState } from 'react';
import SearchBar from './components/Searchbar';
import UserList from './components/UserList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { searchUsers } from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <UserList users={users} />}
    </div>
  );
};

export default App;

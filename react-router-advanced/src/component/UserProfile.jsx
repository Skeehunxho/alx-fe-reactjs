import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams(); // Get userId from the URL

  return (
    <div>
      <h1>User Profile</h1>
      <p>Viewing profile of user with ID: {userId}</p>
    </div>
  );
};

export default UserProfile;

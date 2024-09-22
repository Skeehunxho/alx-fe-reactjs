import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="border rounded p-4 mb-4 shadow">
      <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mx-auto" />
      <h2 className="text-xl mt-4 text-center">{user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-center block mt-2">
        View Profile
      </a>
      <p className="text-center mt-2">Repositories: {user.public_repos}</p>
    </div>
  );
};

export default UserCard;

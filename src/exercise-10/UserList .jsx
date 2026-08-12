import { useState } from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "hassan", email: "hassan@gmail.com" },
    { id: 2, name: "yaxye", email: "yaxye@gmail.com" },
  ];

  return (
    <div>
      <h2>User List</h2>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
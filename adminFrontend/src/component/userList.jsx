import React, { useEffect } from 'react';
import { useGetStore } from "../store/usePostStore.js";

const userList = () => {
  const { users, getUsers, isUsersLoading } = useGetStore();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">Registered Users</h2>

      {isUsersLoading ? (
        <div className="loading-message">Loading users...</div>
      ) : users?.length === 0 ? (
        <div className="empty-message">No registered users found.</div>
      ) : (
        <div className="user-grid">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <h3 className="user-name">{user.fullName}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Membership:</strong> {user.membership}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default userList;

// Inject CSS Styles
const styles = `
.user-list-container {
  padding: 2rem;
  background-color: #f9fafb;
}

.user-list-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
}

.loading-message,
.empty-message {
  text-align: center;
  font-size: 1.1rem;
  color: #718096;
}

.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.user-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.user-card:hover {
  transform: translateY(-5px);
}

.user-name {
  font-size: 1.25rem;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.user-card p {
  margin: 0.4rem 0;
  color: #4a5568;
}

@media (max-width: 768px) {
  .user-list-container {
    padding: 1.5rem;
  }
}
`;

const styleEl = document.createElement('style');
styleEl.innerHTML = styles;
document.head.appendChild(styleEl);

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuthStore } from '../store/useAuthStore';
import './AdminProfile.css';

const AdminProfile = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    role: '',
    joinDate: '',
    lastLogin: '',
    bio: '',
    profileImage: ''
  });

  const [tempData, setTempData] = useState({ ...adminData });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    emailNotifications: true,
    loginAlerts: true
  });

  useEffect(() => {
    if (authUser) {
      const data = {
        name: authUser.fullName || 'Admin User',
        email: authUser.email || 'admin@example.com',
        role: authUser.role || 'Super Admin',
        joinDate: authUser.joinDate || '2023-01-15',
        lastLogin: authUser.updatedAt || new Date().toISOString(),
        bio: authUser.bio || 'System administrator with full privileges',
        profileImage: authUser.profile || null
      };
      setAdminData(data);
      setTempData(data);
    }
  }, [authUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setAdminData(tempData);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
    // TODO: Send PATCH request to backend to persist changes
  };

  const handleCancel = () => {
    setTempData(adminData);
    setIsEditing(false);
  };

  const handleSecurityChange = (setting) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
    toast.success(`Security setting updated!`);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      toast.success('Account deleted successfully');
      navigate('/');
    }
  };

  return (
    <div className="admin-profile-container">
      <div className="admin-profile-sidebar">
        <div className="profile-header">
          <img 
             src={adminData.profileImage || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="Admin Profile" 
            className="profile-image"
          />
          <h3>{adminData.name}</h3>
          <p className="role-badge">{adminData.role}</p>
        </div>

        <nav className="profile-nav">
          <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
            <i className="bi bi-person-fill"></i> Profile
          </button>
          <button className={`nav-item ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>
            <i className="bi bi-shield-lock"></i> Security
          </button>
          <button className={`nav-item ${activeTab === 'activity' ? 'active' : ''}`} onClick={() => setActiveTab('activity')}>
            <i className="bi bi-clock-history"></i> Activity Log
          </button>
          <button className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
            <i className="bi bi-gear-fill"></i> Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </div>

      <div className="admin-profile-content">
        {/* === Profile Tab === */}
        {activeTab === 'profile' && (
          <div className="profile-tab">
            <div className="tab-header">
              <h2>Profile Information</h2>
              {!isEditing ? (
                <button className="edit-button" onClick={() => setIsEditing(true)}>
                  <i className="bi bi-pencil-fill"></i> Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-button" onClick={handleSave}>Save Changes</button>
                  <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                </div>
              )}
            </div>

            <div className="profile-info">
              <div className="info-group">
                <label>Full Name</label>
                {isEditing ? (
                  <input name="name" value={tempData.name} onChange={handleInputChange} />
                ) : <p>{adminData.name}</p>}
              </div>

              <div className="info-group">
                <label>Email</label>
                {isEditing ? (
                  <input name="email" value={tempData.email} onChange={handleInputChange} />
                ) : <p>{adminData.email}</p>}
              </div>

              <div className="info-group">
                <label>Role</label>
                <p>{adminData.role}</p>
              </div>

              <div className="info-group">
                <label>Joined On</label>
                <p>{new Date(adminData.joinDate).toLocaleDateString()}</p>
              </div>

              <div className="info-group">
                <label>Last Login</label>
                <p>{new Date(adminData.lastLogin).toLocaleString()}</p>
              </div>

              <div className="info-group">
                <label>Bio</label>
                {isEditing ? (
                  <textarea name="bio" value={tempData.bio} onChange={handleInputChange} rows="3" />
                ) : <p>{adminData.bio || 'No bio provided'}</p>}
              </div>

              {isEditing && (
                <div className="info-group">
                  <label>Profile Image URL</label>
                  <input name="profileImage" value={tempData.profileImage} onChange={handleInputChange} />
                </div>
              )}
            </div>
          </div>
        )}

        {/* === Security Tab === */}
        {activeTab === 'security' && (
          <div className="security-tab">
            <h2>Security Settings</h2>
            {['twoFactorAuth', 'emailNotifications', 'loginAlerts'].map((setting) => (
              <div key={setting} className="security-item">
                <div>
                  <h3>{setting.replace(/([A-Z])/g, ' $1')}</h3>
                  <p>Manage your {setting.replace(/([A-Z])/g, ' $1').toLowerCase()}</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={securitySettings[setting]}
                    onChange={() => handleSecurityChange(setting)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            ))}

            <div className="password-reset">
              <h3>Change Password</h3>
              <input type="password" placeholder="Current Password" />
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm New Password" />
              <button className="update-password-button">Update Password</button>
            </div>
          </div>
        )}

        {/* === Activity Tab === */}
        {activeTab === 'activity' && (
          <div className="activity-tab">
            <h2>Recent Activity</h2>
            <div className="activity-log">
              <div className="activity-item"><i className="bi bi-person-check"></i> Approved a user <small>Today</small></div>
              <div className="activity-item"><i className="bi bi-trash"></i> Deleted spam <small>Yesterday</small></div>
              <div className="activity-item"><i className="bi bi-gear"></i> Updated settings <small>2 days ago</small></div>
            </div>
          </div>
        )}

        {/* === Settings Tab === */}
        {activeTab === 'settings' && (
          <div className="settings-tab">
            <h2>Account Settings</h2>
            <div className="danger-item">
              <h4>Delete Account</h4>
              <p>This cannot be undone!</p>
              <button className="delete-account-button" onClick={handleDeleteAccount}>Delete</button>
            </div>
            <div className="danger-item">
              <h4>Export Data</h4>
              <p>Download your account data</p>
              <button className="export-button">Export</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;

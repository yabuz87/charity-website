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
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Super Admin',
    joinDate: '2023-01-15',
    lastLogin: '2023-06-20 14:30',
    bio: 'System administrator with full privileges',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
  });
  
  const [tempData, setTempData] = useState({ ...adminData });
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    emailNotifications: true,
    loginAlerts: true
  });

  // Fetch admin data on component mount
  useEffect(() => {
    // In a real app, you would fetch this from your API
    const fetchAdminData = async () => {
      // Simulate API call
      setTimeout(() => {
        // This would come from your backend
        const data = {
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'Super Admin',
          joinDate: '2023-01-15',
          lastLogin: new Date().toISOString(),
          bio: 'System administrator with full privileges',
          profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
        };
        setAdminData(data);
        setTempData(data);
      }, 500);
    };
    
    fetchAdminData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setAdminData(tempData);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
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

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your admin account? This action cannot be undone.')) {
      // Add account deletion logic here
      toast.success('Account deleted successfully');
      navigate('/');
    }
  };

  return (
    <div className="admin-profile-container">
      <div className="admin-profile-sidebar">
        <div className="profile-header">
          <img 
            src={adminData.profileImage} 
            alt="Admin Profile" 
            className="profile-image"
          />
          <h3>{adminData.name}</h3>
          <p className="role-badge">{adminData.role}</p>
        </div>
        
        <nav className="profile-nav">
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <i className="bi bi-person-fill"></i> Profile
          </button>
          <button 
            className={`nav-item ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <i className="bi bi-shield-lock"></i> Security
          </button>
          <button 
            className={`nav-item ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <i className="bi bi-clock-history"></i> Activity Log
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
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
        {activeTab === 'profile' && (
          <div className="profile-tab">
            <div className="tab-header">
              <h2>Profile Information</h2>
              {!isEditing ? (
                <button 
                  className="edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  <i className="bi bi-pencil-fill"></i> Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-button" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="cancel-button" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
            
            <div className="profile-info">
              <div className="info-group">
                <label>Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={tempData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{adminData.name}</p>
                )}
              </div>
              
              <div className="info-group">
                <label>Email Address</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={tempData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{adminData.email}</p>
                )}
              </div>
              
              <div className="info-group">
                <label>Role</label>
                <p>{adminData.role}</p>
              </div>
              
              <div className="info-group">
                <label>Member Since</label>
                <p>{new Date(adminData.joinDate).toLocaleDateString()}</p>
              </div>
              
              <div className="info-group">
                <label>Last Login</label>
                <p>{new Date(adminData.lastLogin).toLocaleString()}</p>
              </div>
              
              <div className="info-group">
                <label>Bio</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={tempData.bio}
                    onChange={handleInputChange}
                    rows="3"
                  />
                ) : (
                  <p>{adminData.bio || 'No bio provided'}</p>
                )}
              </div>
              
              {isEditing && (
                <div className="info-group">
                  <label>Profile Image URL</label>
                  <input
                    type="text"
                    name="profileImage"
                    value={tempData.profileImage}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        
        {activeTab === 'security' && (
          <div className="security-tab">
            <h2>Security Settings</h2>
            
            <div className="security-card">
              <div className="security-item">
                <div>
                  <h3>Two-Factor Authentication</h3>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={securitySettings.twoFactorAuth}
                    onChange={() => handleSecurityChange('twoFactorAuth')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              
              <div className="security-item">
                <div>
                  <h3>Email Notifications</h3>
                  <p>Receive important account notifications via email</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={securitySettings.emailNotifications}
                    onChange={() => handleSecurityChange('emailNotifications')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              
              <div className="security-item">
                <div>
                  <h3>Login Alerts</h3>
                  <p>Get notified when someone logs into your account</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={securitySettings.loginAlerts}
                    onChange={() => handleSecurityChange('loginAlerts')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            
            <div className="password-reset">
              <h3>Change Password</h3>
              <div className="password-fields">
                <input type="password" placeholder="Current Password" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm New Password" />
              </div>
              <button className="update-password-button">
                Update Password
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'activity' && (
          <div className="activity-tab">
            <h2>Recent Activity</h2>
            
            <div className="activity-log">
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="bi bi-person-check"></i>
                </div>
                <div className="activity-details">
                  <p>Approved new user registration</p>
                  <small>Today at 2:45 PM</small>
                </div>
              </div>
              
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="bi bi-trash"></i>
                </div>
                <div className="activity-details">
                  <p>Deleted spam user account</p>
                  <small>Yesterday at 11:30 AM</small>
                </div>
              </div>
              
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="bi bi-gear"></i>
                </div>
                <div className="activity-details">
                  <p>Updated system settings</p>
                  <small>June 18 at 9:15 AM</small>
                </div>
              </div>
              
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="bi bi-lock"></i>
                </div>
                <div className="activity-details">
                  <p>Changed password</p>
                  <small>June 15 at 4:20 PM</small>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div className="settings-tab">
            <h2>Account Settings</h2>
            
            <div className="settings-card">
              <h3>Danger Zone</h3>
              
              <div className="danger-item">
                <div>
                  <h4>Delete Account</h4>
                  <p>Permanently delete your admin account and all associated data</p>
                </div>
                <button 
                  className="delete-account-button"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </button>
              </div>
              
              <div className="danger-item">
                <div>
                  <h4>Export Data</h4>
                  <p>Download all your account data in JSON format</p>
                </div>
                <button className="export-button">
                  Export Data
                </button>
              </div>
            </div>
            
            <div className="notification-settings">
              <h3>Notification Preferences</h3>
              
              <div className="notification-item">
                <div>
                  <h4>Email Notifications</h4>
                  <p>Receive important updates via email</p>
                </div>
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={securitySettings.emailNotifications}
                    onChange={() => handleSecurityChange('emailNotifications')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              
              <div className="notification-item">
                <div>
                  <h4>Push Notifications</h4>
                  <p>Get real-time alerts on your device</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" checked />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
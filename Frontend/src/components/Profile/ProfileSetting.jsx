import React, { useEffect, useState } from 'react';
import "../../assets/profile/profile.scss";
import userServices from "../../Services/userServices.js";
import handleApiResponse from "../../helpers/responseHandler.js";
import UserServices from "../../Services/userServices.js";

const ProfileSetting = () => {
  const [user, setUser] = useState({});
  const [activeTab, setActiveTab] = useState('account-details');

  // Fetch loggedIn user account details
  const fetchProfileDetails = async () => {
    try {
      const userDetails = await userServices.getProfile();
      setUser(userDetails.data.data);
    } catch (error) {
      handleApiResponse(error);
    }
  };

  useEffect(() => {
    if (activeTab === 'account-details') {
      fetchProfileDetails();
    }
  }, [activeTab]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle Update profile
  const updateProfile = handleApiResponse(async (e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("country", user.country);
    formData.append("state", user.state);
    formData.append("city", user.city);
    formData.append("company", user.company);

    return await UserServices.updateUser(formData);
  });

  // Handle change password
  const handleChangePassword = handleApiResponse(async (e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("password", e.target.password.value);
    formData.append("confirm_password", e.target.confirmPassword.value);
    formData.append("current_password", e.target.currentPassword.value);
    // Reset the form
    e.target.reset();
    return await UserServices.changePassword(formData);
  });

  return (
      <main className="col-md-9 py-4 profile_Setting">
        <h3 className="settings-title">Account Settings</h3>
        {/* Tabs for Account Settings */}
        <ul className="nav nav-tabs" id="accountSettingsTabs" role="tablist">
          <li className="nav-item">
            <a
                className={`nav-link ${activeTab === 'account-details' ? 'active' : ''}`}
                id="account-details-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="account-details"
                aria-selected={activeTab === 'account-details'}
                onClick={() => setActiveTab('account-details')}
            >
              <i className="fa fa-user mr-2" />
              Account Details
            </a>
          </li>
          <li className="nav-item">
            <a
                className={`nav-link ${activeTab === 'change-password' ? 'active' : ''}`}
                id="change-password-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="change-password"
                aria-selected={activeTab === 'change-password'}
                onClick={() => setActiveTab('change-password')}
            >
              <i className="fa fa-key mr-2" />
              Change Password
            </a>
          </li>
          <li className="nav-item">
            <a
                className={`nav-link ${activeTab === 'upgrade-plan' ? 'active' : ''}`}
                id="upgrade-plan-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="upgrade-plan"
                aria-selected={activeTab === 'upgrade-plan'}
                onClick={() => setActiveTab('upgrade-plan')}
            >
              <i className="fa fa-arrow-up mr-2" />
              Upgrade Plan
            </a>
          </li>
        </ul>
        <div className="tab-content" id="accountSettingsTabsContent">
          {/* Account Details Tab */}
          <div
              className={`tab-pane fade ${activeTab === 'account-details' ? 'show active' : ''}`}
              id="account-details"
              role="tabpanel"
              aria-labelledby="account-details-tab"
          >
            <div className="form-section">
              <form onSubmit={updateProfile}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="name"
                        value={user.name || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={user.email || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        id="mobileNumber"
                        value={user.phoneNumber || ''}
                        disabled
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="country">Country</label>
                    <select
                        className="form-control"
                        id="country"
                        name="country"
                        value={user.country || ''}
                        onChange={handleInputChange}
                    >
                      <option value={1}>India</option>
                      <option value={2}>USA</option>
                      <option value={3}>UK</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="state">State</label>
                    <select
                        className="form-control"
                        id="state"
                        name="state"
                        value={user.state || ''}
                        onChange={handleInputChange}
                    >
                      <option value={7}>State 7</option>
                      <option value={8}>State 8</option>
                      <option value={9}>State 9</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <select
                        className="form-control"
                        id="city"
                        name="city"
                        value={user.city || ''}
                        onChange={handleInputChange}
                    >
                      <option value={8}>City 8</option>
                      <option value={9}>City 9</option>
                      <option value={10}>City 10</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company"
                        name="company"
                        value={user.company || ''}
                        onChange={handleInputChange}
                        placeholder="Enter your company"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="userType">User Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userType"
                        name="userType"
                        value={user.userType || ''}
                        disabled
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          {/* Change Password Tab */}
          <div
              className={`tab-pane ${activeTab === 'change-password' ? 'show active' : ''}`}
              id="change-password"
              role="tabpanel"
              aria-labelledby="change-password-tab"
          >
            <div className="form-section">
              <form onSubmit={handleChangePassword}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        name="currentPassword"
                        placeholder="Enter current password"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        name="password"
                        placeholder="Enter new password"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm new password"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          {/* Upgrade Plan Tab */}
          <div
              className={`tab-pane ${activeTab === 'upgrade-plan' ? 'show active' : ''}`}
              id="upgrade-plan"
              role="tabpanel"
              aria-labelledby="upgrade-plan-tab"
          >
            <div className="form-section">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="memberId">Member ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="memberId"
                        placeholder="Enter Member ID"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="activeMembership">Active Membership</label>
                    <select className="form-control" id="activeMembership">
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="validDate">Valid Date</label>
                    <input type="date" className="form-control" id="validDate" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
  );
};

export default ProfileSetting;
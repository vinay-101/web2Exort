import React from 'react'
import "../../assets/profile/profile.scss"

const ProfileSetting = () => {
  return (
<main className="col-md-9 py-4 profile_Setting">
  <h3 className="settings-title">Account Settings</h3>
  {/* Tabs for Account Settings */}
  <ul className="nav nav-tabs" id="accountSettingsTabs" role="tablist">
    <li className="nav-item">
      <a
        className="nav-link active"
        id="account-details-tab"
        data-toggle="tab"
        href="#account-details"
        role="tab"
        aria-controls="account-details"
        aria-selected="true"
      >
        <i className="fa fa-user mr-2" />
        Account Details
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        id="change-password-tab"
        data-toggle="tab"
        href="#change-password"
        role="tab"
        aria-controls="change-password"
        aria-selected="false"
      >
        <i className="fa fa-key mr-2" />
        Change Password
      </a>
    </li>
    <li className="nav-item">
      <a
        className="nav-link"
        id="upgrade-plan-tab"
        data-toggle="tab"
        href="#upgrade-plan"
        role="tab"
        aria-controls="upgrade-plan"
        aria-selected="false"
      >
        <i className="fa fa-arrow-up mr-2" />
        Upgrade Plan
      </a>
    </li>
  </ul>
  <div className="tab-content" id="accountSettingsTabsContent">
    {/* Account Details Tab */}
    <div
      className="tab-pane fade show active"
      id="account-details"
      role="tabpanel"
      aria-labelledby="account-details-tab"
    >
      <div className="form-section">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
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
                id="mobileNumber"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="country">Country</label>
              <select className="form-control" id="country">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="postalCode">Zip/Postal Code</label>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                placeholder="Enter your zip/postal code"
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
      className="tab-pane fade"
      id="change-password"
      role="tabpanel"
      aria-labelledby="change-password-tab"
    >
      <div className="form-section">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                placeholder="Enter current password"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
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
      className="tab-pane fade"
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

  )
}

export default ProfileSetting

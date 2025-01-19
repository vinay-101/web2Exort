import React from 'react'
import "../../assets/profile/profile.scss"

function Membership() {
  return (
    <main className="col-md-9 py-4">
    <h3 className="main-title">Select Your Membership Plan</h3>
    <div className="row my-4">
      {/* Basic Plan Card */}
      <div className="col-md-4">
        <div className="card_profile">
          <div className="card-body">
            <h5 className="card_profile-title">Basic Plan</h5>
            <p className="card_profile-text">
              Perfect for small businesses looking to get started. Includes basic
              access to platform features.
            </p>
            <p className="price">$29/month</p>
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
      {/* Standard Plan Card */}
      <div className="col-md-4">
        <div className="card_profile">
          <div className="card-body">
            <h5 className="card_profile-title">Standard Plan</h5>
            <p className="card_profile-text">
              A great middle ground plan with access to advanced tools and better
              customer support.
            </p>
            <p className="price">$59/month</p>
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
      {/* Premium Plan Card */}
      <div className="col-md-4">
        <div className="card_profile">
          <div className="card-body">
            <h5 className="card_profile-title">Premium Plan</h5>
            <p className="card_profile-text">
              The ultimate plan for large businesses that need access to all
              features, priority support, and custom solutions.
            </p>
            <p className="price">$99/month</p>
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default Membership

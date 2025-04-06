import React, { useEffect, useState } from "react";
import "../../assets/profile/profile.scss";
import userService from "../../Services/userServices";
import handleApiResponse from "../../helpers/responseHandler";
import toast from "react-hot-toast";

function Membership() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState(false);
  const [activeSubscriptionId, setActiveSubscriptionId] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    async function getSubs() {
      try {
        setLoading(true);
        const res = await userService.getAllSubscription();
        setSubs(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getSubs();
  }, []);


  // create subs
  const handleSubmit = handleApiResponse(
    async (subscriptionId) => {
      setSubscribing(true);
      setActiveSubscriptionId(subscriptionId);
      // setMessage({ type: '', text: '' });
      
      const formData = new FormData();
      formData.append('subscriptionId', subscriptionId);
      
      const response = await userService.createSubscription(formData);
      return response;
    }, 
    (data) => {
      // Success callback
      // setMessage({ type: 'success', text: 'Subscription created successfully!' });
      setSubscribing(false);
      setActiveSubscriptionId(null);
    }, 
    (error) => {
      // Error callback
      console.log("Error in subscription:", error);
      // setMessage({ 
      //   type: 'danger', 
      //   text: error?.message || error?.error || 'Failed to create subscription. Please try again.' 
      // });
      setSubscribing(false);
      setActiveSubscriptionId(null);
    }
  );

  return (
    <main className="col-md-9 py-4">
      <div className="membership-header mb-4">
        <h3 className="main-title">Select Your Membership Plan</h3>
        <p className="text-muted">Choose the plan that best fits your business needs</p>
      </div>
      
      {message.text && (
        <div className={`alert alert-${message.type}`} role="alert">
          {message.text}
        </div>
      )}
      
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row my-4 g-4">
          {subs.length > 0 ? (
            subs.map((sub, index) => (
              <div className="col-md-4" key={index}>
                <div className={`card_profile subscription-card h-100 ${index === 1 ? 'featured' : ''}`}>
                  {index === 1 && <div className="ribbon">Popular</div>}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card_profile-title">{sub.name}</h5>
                    <div className="price-container mb-3">
                      <span className="currency">₹</span>
                      <span className="price-value">{Number(sub.price).toFixed(0)}</span>
                      <span className="price-period">/{Number(sub.duration)} days</span>
                    </div>
                    <div className="features-container mb-4">
                      {sub.features && sub.features.split(',').map((feature, idx) => (
                        <div className="feature-item" key={idx}>
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span>{feature.trim()}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      className={`btn ${index === 1 ? 'btn-primary' : 'btn-outline-primary'} mt-auto w-100`}
                      onClick={() => handleSubmit(sub.id)}
                      disabled={subscribing}
                    >
                      {subscribing && activeSubscriptionId === sub.id ? 'Processing...' : 'Subscribe Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <div className="empty-state p-5">
                <i className="bi bi-calendar-x fs-1 text-muted mb-3"></i>
                <p>No subscription plans available at the moment.</p>
                <p className="text-muted small">Please check back later or contact support.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default Membership;

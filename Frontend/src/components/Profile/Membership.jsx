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

  useEffect(() => {
    async function getSubscriptions() {
      try {
        setLoading(true);
        const res = await userService.getAllSubscription();
        setSubs(res.data.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load subscription plans");
      } finally {
        setLoading(false);
      }
    }
    getSubscriptions();
  }, []);

  // Handle subscription purchase
  const handleSubscribe = handleApiResponse(
    async (subscriptionId) => {
      setSubscribing(true);
      setActiveSubscriptionId(subscriptionId);
      
      const formData = new FormData();
      formData.append('subscriptionId', subscriptionId);
      
      const response = await userService.createSubscription(formData);
      return response;
    }, 
    (data) => {
      // toast.success("Subscription created successfully!");
      setSubscribing(false);
      setActiveSubscriptionId(null);
    }, 
    (error) => {
      console.log("Error in subscription:", error);
      // toast.error(error?.message || error?.error || 'Failed to create subscription. Please try again.');
      setSubscribing(false);
      setActiveSubscriptionId(null);
    }
  );

  // Helper functions for rendering features
  const renderCheckmark = (isAvailable) => {
    return isAvailable ? 
      <i className="fa fa-check check-icon"></i> : 
      <i className="fa fa-times x-icon"></i>;
  };

  const renderFeatureValue = (feature, plan) => {
    if (!plan || !plan.subscriptionFeatures) return renderCheckmark(false);
    
    const featureItem = plan.subscriptionFeatures.find(
      f => f.description.toLowerCase() === feature.toLowerCase()
    );
    
    if (!featureItem) return renderCheckmark(false);
    
    if (featureItem.count !== null) {
      return <span className="font-weight-bold">{featureItem.count}</span>;
    } else {
      return renderCheckmark(featureItem.isPresent);
    }
  };

  // Group features by category
  const featureCategories = {
    "Digital Services": [
      "Domain & Hosting",
      "SEO Friendly Website",
      "Responsive Site",
      "SSL",
      "Web Maintenance",
      "Social Media Linking",
      "Social Media Optimization",
      "Wordex Marketing",
      "Web Flipbook",
      "YouTube Promotion",
      "Professional Logo"
    ],
    "Manual Support": [
      "Customer Support Assistance",
      "Key Account Manager",
      "Export Import Consultant",
      "Product Research and Analysis",
      "Product HSN Code"
    ],
    "Advanced Features": [
      "Profile Listing on Web Export",
      "Buy Leads",
      "Global Support",
      "Buyers Performance Report",
      "Control Panel",
      "Unlimited Business Enquiries",
      "Upload Company Certifications",
      "Display No. of Products/Services on Website"
    ]
  };

  return (
    <main className="col-md-9 py-4">
      <div className="membership-container">
        <h2 className="text-center font-weight-bold mb-4">Subscription Plans</h2>
        <p className="text-center text-muted mb-5">Choose the plan that best fits your business needs</p>
      
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        ) : subs.length > 0 ? (
          <div className="card shadow-sm border-0 overflow-hidden">
            <div className="table-responsive">
              <table className="table table-borderless mb-0 subscription-table">
                <thead className="plan-table-header">
                  <tr>
                    <th className="align-middle features-column">Features</th>
                    {subs.map((plan, index) => (
                      <th key={plan.id} className={`text-center position-relative plan-header-cell${index === 2 ? ' plan-header-recommended' : ''}`}> 
                        {index === 2 && (
                          <div className="recommended-badge">
                            <span className="badge badge-pill badge-warning px-2 py-1">RECOMMENDED</span>
                          </div>
                        )}
                        <div className="plan-header-title">{plan.name}</div>
                        <div className="plan-header-price">
                          ₹{Number(plan.price).toLocaleString()}
                          <span className="plan-header-duration">/{plan.duration} days</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Render feature categories */}
                  {Object.entries(featureCategories).map(([category, features]) => (
                    <React.Fragment key={category}>
                      {/* Category header */}
                      <tr className="category-header">
                        <th colSpan={subs.length + 1} className="category-title text-center">
                          <div className="feature-category-title">
                            <i className="fa fa-star category-icon"></i>
                            {category}
                          </div>
                        </th>
                      </tr>
                      
                      {/* Features in this category */}
                      {features.map(feature => (
                        <tr key={feature} className="feature-row">
                          <td className="feature-name">{feature}</td>
                          {subs.map((plan, index) => (
                            <td 
                              key={`${plan.id}-${feature}`} 
                              className={`text-center feature-cell ${index === 2 ? 'plan-prime-plus' : ''}`}
                            >
                              {renderFeatureValue(feature, plan)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                  
                  {/* Purchase Buttons Row */}
                  <tr className="plan-footer">
                    <td className="feature-name"></td>
                    {subs.map((plan, index) => (
                      <td 
                        key={`purchase-${plan.id}`} 
                        className={`text-center p-3 ${index === 2 ? 'plan-prime-plus-footer' : ''}`}
                      >
                    <button 
                          className={`btn ${index === 2 ? 'btn-success prime-plus-btn' : 'btn-outline-primary'} action-btn`}
                          onClick={() => handleSubscribe(plan.id)}
                          disabled={subscribing && activeSubscriptionId === plan.id}
                        >
                          {subscribing && activeSubscriptionId === plan.id ? (
                            <>
                              <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                              Processing...
                            </>
                          ) : (
                            <>
                              Purchase {plan.name}<br/>
                              <small>₹{Number(plan.price).toFixed(0)}/{plan.duration} days</small>
                            </>
                          )}
                    </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
                </div>
              </div>
          ) : (
            <div className="col-12 text-center">
              <div className="empty-state p-5">
              <i className="fa fa-calendar-x fs-1 text-muted mb-3"></i>
                <p>No subscription plans available at the moment.</p>
                <p className="text-muted small">Please check back later or contact support.</p>
              </div>
            </div>
          )}
        </div>

      {/* Include the required CSS styles */}
      <style jsx>{`
        .membership-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px; /* Add horizontal padding */
        }
        
        .subscription-table {
          border-collapse: separate;
          border-spacing: 0; /* Remove default spacing */
        }

        .plan-table-header th {
          background: #eceff1;
          border: none;
          padding-top: 18px;
          padding-bottom: 12px;
          font-size: 1rem;
          color: #495057;
        }
        .plan-header-cell {
          background: #eceff1;
          border: none;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          padding: 12px 0 8px 0;
          min-width: 150px;
        }
        .plan-header-cell:first-child {
          border-top-left-radius: 10px;
        }
        .plan-header-cell:last-child {
          border-top-right-radius: 10px;
        }
        .plan-header-title {
          font-weight: 700;
          font-size: 1.08rem;
          margin-bottom: 2px;
          color: #23272b;
        }
        .plan-header-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #23272b;
          line-height: 1.1;
          letter-spacing: 0.5px;
        }
        .plan-header-duration {
          font-size: 0.95rem;
          color: #6c757d;
          font-weight: 400;
          margin-left: 2px;
        }
        .plan-header-recommended {
          position: relative;
        }
        .recommended-badge {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        
        .check-icon {
          color: #28a745; /* Green check */
          font-size: 1.2rem;
        }
        
        .x-icon {
          color: #dc3545; /* Red X */
          font-size: 1.2rem;
        }
        
        .category-header {
          background-color: #e9ecef; /* Slightly darker category header */
        }
        
        .category-title {
          color: #495057; /* Darker text color */
          font-weight: bold;
          padding: 10px 15px; /* Adjust padding */
          font-size: 1rem;
          text-transform: uppercase; /* Uppercase category titles */
          letter-spacing: 0.5px; /* Slight letter spacing */
        }
        
        .feature-row {
          border-bottom: 1px solid #f1f1f1; /* Subtle border between rows */
          transition: background-color 0.2s ease;
        }

        .feature-row:hover {
          background-color: #f8f9fa; /* Hover effect */
        }

        .feature-row:last-child {
          border-bottom: none;
        }
        
        .feature-name {
          font-weight: 500;
          padding: 1rem 1rem; /* Adjust padding */
          text-align: left;
        }

        .feature-cell {
          padding: 1rem 1rem; /* Consistent padding */
          vertical-align: middle;
        }
        
        .plan-prime-plus {
          background-color: rgba(40, 167, 69, 0.05); /* Subtle highlight */
        }
        
        .plan-footer {
          background-color: #f8f9fa;
          border-top: 2px solid #e9ecef;
        }

        .plan-prime-plus-footer {
           background-color: rgba(40, 167, 69, 0.05); /* Match highlight in footer */
        }
        
        .action-btn {
          width: 100%;
          padding: 10px 15px;
          transition: all 0.3s ease;
          border-radius: 4px;
          font-weight: 500;
          line-height: 1.4; /* Improve button text layout */
        }
        
        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .prime-plus-btn {
          background-color: #28a745;
          border-color: #28a745;
          box-shadow: 0 4px 6px rgba(40, 167, 69, 0.2);
        }
        
        .prime-plus-btn:hover {
          background-color: #218838;
          border-color: #1e7e34;
        }
        
        .empty-state {
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
      `}</style>
    </main>
  );
}

export default Membership;

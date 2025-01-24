import React, { useState } from "react";

const Enquiry = () => {
  const [activeTab, setActiveTab] = useState("Received");

  return (
    <div className=" col-lg-10 col-md-10 custom-chat-enquiry-body ">
      <div className="custom-chat-enquiry-container">
        <h1 className="custom-chat-enquiry-header">My Enquiries</h1>

        {/* Tabs */}
        <div className="custom-chat-enquiry-tabs">
          <button
            className={`custom-chat-enquiry-tab-button ${
              activeTab === "Received" ? "custom-chat-enquiry-active" : ""
            }`}
            onClick={() => setActiveTab("Received")}
          >
            Received
          </button>
          <button
            className={`custom-chat-enquiry-tab-button ${
              activeTab === "Sent" ? "custom-chat-enquiry-active" : ""
            }`}
            onClick={() => setActiveTab("Sent")}
          >
            Sent
          </button>
        </div>

        {/* Content */}
        <div className="custom-chat-enquiry-content">
          <div className="custom-chat-enquiry-icon">
            <div className="custom-chat-enquiry-clipboards">
              <span className="custom-chat-enquiry-clipboard"></span>
              <span className="custom-chat-enquiry-clipboard"></span>
            </div>
          </div>
          <p>No enquiries</p>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;

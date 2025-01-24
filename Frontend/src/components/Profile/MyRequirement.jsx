import React from 'react';
import { useState } from 'react';

const MyRequirements = () => {


  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
    <div className="custom-chat-Req-container col-lg-10">
      <h1 className="custom-chat-Req-title text-start mt-4 ">MY REQUIREMENTS
      <a
          href="/post-new-requirement"
          className="custom-chat-Req-post-link text-danger d-block text-start "
        >
          Post New Requirement
        </a>
      </h1>
      
      
      <div className="custom-chat-Req-card bg-light p-4 rounded shadow">
        <div className="custom-chat-Req-content text-center">
          <div className="custom-chat-Req-icon mb-3">
            <img
              src="icon-placeholder.png" // Replace with your icon's URL or path
              alt="Icon"
              className="img-fluid"
            />
          </div>
          <h4 className="custom-chat-Req-no-req-title">No Buying Requirements</h4>
          <p className="custom-chat-Req-description">
            Once created, your buying requirements will be displayed here.
          </p>
          <p className="custom-chat-Req-suggestion">
            Want To Post A Buying Requirement-
          </p>
          <button className="btn btn-danger custom-chat-Req-post-btn" onClick={handleOpenModal}>
            Post requirement
          </button>
         
        </div>
      </div>

    </div>

      {/* popup */}

       {/* Modal structure */}
       {showModal && (
        <div className="custom-chat-Req-modal d-flex align-items-start justify-content-center">
          <div className="custom-chat-Req-modal-content bg-light p-4 rounded shadow">
            <h3 className="custom-chat-Req-modal-title mb-3">WHAT ARE YOU LOOKING FOR?</h3>

            <form>
              <div className="form-group mb-3">
                <label htmlFor="productName" className="form-label">Product name *</label>
                <input
                  type="text"
                  id="productName"
                  className="form-control"
                  placeholder="Enter product name"
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-4 mb-3 mb-md-0">
                  <label htmlFor="quantity" className="form-label">Quantity *</label>
                  <input
                    type="text"
                    id="quantity"
                    className="form-control"
                    placeholder="Quantity"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label htmlFor="unitSelect" className="form-label">Select</label>
                  <select id="unitSelect" className="form-control">
                    <option value="">Select</option>
                    <option value="kg">Kg</option>
                    <option value="pcs">Pcs</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="shippingTerms" className="form-label">Select shipping terms</label>
                  <select id="shippingTerms" className="form-control">
                    <option value="">Select shipping terms</option>
                    <option value="FOB">FOB</option>
                    <option value="CIF">CIF</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Select Payment terms</label>
                <div className="form-row">
                  {["T/T", "D/A", "L/C", "D/P", "PayPal", "Western Union", "Money Gram"].map((term, index) => (
                    <div className="form-check mr-3" key={index}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`paymentTerm-${term}`}
                      />
                      <label htmlFor={`paymentTerm-${term}`} className="form-check-label">
                        {term}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="requirement" className="form-label">Describe your requirement *</label>
                <textarea
                  id="requirement"
                  className="form-control"
                  rows="4"
                  placeholder="Enter your requirement"
                ></textarea>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="submit"
                  className="btn btn-primary custom-chat-Req-post-inquiry-btn"
                >
                  Post inquiry
                </button>
                <button
                  type="button"
                  className="btn btn-link text-danger"
                  onClick={handleCloseModal}
                >
                  Not now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyRequirements;

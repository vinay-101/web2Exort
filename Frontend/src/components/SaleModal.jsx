import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './SaleModal.css'; // Import the CSS file

const SaleModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // Show modal after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show if the component is still mounted
      // and potentially add a check if it's already been shown in the session
      setShow(true);
    }, 15000); // Updated to 15 seconds
    
    // Clear the timer if the component unmounts before the timer fires
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered
      dialogClassName="sale-modal-dialog" // Use dialogClassName for modal sizing/styling if needed
      contentClassName="sale-modal-content" // Use contentClassName for inner content styling
    >
      <Modal.Body className="p-0 sale-modal-body">
        <div className="sale-content">
          <button 
            type="button" 
            className="close sale-close" 
            onClick={handleClose}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="sale-overlay">
            {/* Decorative elements */}
            <div className="decorative-element element-1"></div>
            <div className="decorative-element element-2"></div>
            <div className="decorative-element element-3"></div>
            <div className="decorative-element element-4"></div>
            
            <div className="star star-1">✦</div>
            <div className="star star-2">✦</div>
            <div className="star star-3">✦</div>
            <div className="star star-4">✦</div>
            <div className="star star-5">✦</div>
            
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            
            {/* Main content */}
            <div className="special-offer-text">FINAL SPECIAL OFFER</div>
            <h2 className="sale-title">SALE</h2>
            <div className="discount-text">UP TO <span className="percentage">80% OFF</span></div>
            
            {/* Add onClick handler if needed, e.g., onClick={handleClose} or redirect */}  
            <Button className="sale-btn">SHOP NOW</Button> 
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SaleModal; 
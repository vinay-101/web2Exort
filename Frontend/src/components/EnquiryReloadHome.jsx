import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to check the current route
import InquiryForm from "./RequirementForm";

const EnquiryReloadHome = () => {
  const location = useLocation(); // Get the current route

  // Open the modal after 5 seconds on home page reload
  useEffect(() => {
    // Check if the current route is the home page
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        // Use Bootstrap's JavaScript API to show the modal
        const modalElement = document.getElementById("enquiryModal");
        if (modalElement) {
          const modal = new window.bootstrap.Modal(modalElement);
          modal.show();
        }
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [location.pathname]); // Re-run effect when the route changes

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="enquiryModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="enquiryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: "500px" }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="enquiryModalLabel">
                Post Enquiry
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body"
              style={{
                padding: "0",
                margin: "0",
                border: "none",
                boxShadow: "none",
                borderRadius: "0",
              }}
            >
              <InquiryForm enquiryHeading={""} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryReloadHome;
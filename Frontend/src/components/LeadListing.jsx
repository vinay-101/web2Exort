import React from "react";
import '../assets/leadHome.scss'

const LeadListing = () => {
  return (
    <div className="container lead_home_wrapper mt-4">
      <div className="row mb-4">
        <div className="col-md-6">
          <h4 className="results-count">Total Results: 5,450</h4>
        </div>
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control search-box"
              placeholder="Search leads..."
            />
            <div className="input-group-append">
              <button className="btn search-btn" type="button">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Lead Card 1 */}
      <div className="card  lead-card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <span className="lead-id">Lead ID: 1675836106334</span>
              <h5 className="lead-title mt-1">
                I am interested in buying Rice Murukku
              </h5>
              <div className="lead-details">
                <div className="mb-2">
                  <strong>Payment Mode:</strong> RTGS &nbsp; | &nbsp;
                  <strong>Packaging Type:</strong> Packet &nbsp; | &nbsp;
                  <strong>Packaging Size:</strong> 400 Grams, 800 Grams, 1 Kg
                </div>
                <div className="mb-2">
                  <strong>Estimated Order Quantity:</strong> 1 Ton &nbsp; |
                  &nbsp;
                  <strong>Requirement Urgency:</strong> Within 2 Weeks
                </div>
                <div>
                  <strong>Purpose of Purchase:</strong> Reselling &nbsp; |
                  &nbsp;
                  <strong>Requirement Frequency:</strong> Regular
                </div>
              </div>
            </div>
            <div className="col-md-4 company-info">
              <div className="d-flex flex-column h-100 justify-content-between">
                <div>
                  <h6 className="font-weight-bold">Company</h6>
                  <p>Bhairav namkeen</p>
                  <h6 className="font-weight-bold mt-3">Country</h6>
                  <p>
                    <i className="fa fa-map-marker-alt mr-2" />
                    India
                  </p>
                </div>
                <button className="btn contact-btn align-self-start">
                  <i className="fa fa-paper-plane mr-2" />
                  CONTACT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lead Card 2 */}
      <div className="card lead-card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <span className="lead-id">Lead ID: 1675489713277</span>
              <h5 className="lead-title mt-1">Looking for fresh red onion</h5>
              <div className="lead-details">
                <div className="mb-2">
                  I am interested in buying fresh red onion.
                </div>
                <div className="mb-2">
                  <strong>Estimated Order Quantity:</strong> 200 Metric Ton
                </div>
                <div>
                  <strong>Contact Person:</strong> Tufail Hussain &nbsp; |
                  &nbsp;
                  <strong>Location:</strong> Dubai
                </div>
              </div>
            </div>
            <div className="col-md-4 company-info">
              <div className="d-flex flex-column h-100 justify-content-between">
                <div>
                  <h6 className="font-weight-bold">Company</h6>
                  <p>Tufail Hussain</p>
                  <h6 className="font-weight-bold mt-3">Country</h6>
                  <p>
                    <i className="fa fa-map-marker-alt mr-2" />
                    United Arab Emirates
                  </p>
                </div>
                <button className="btn contact-btn align-self-start">
                  <i className="fa fa-paper-plane mr-2" />
                  CONTACT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lead Card 3 */}
      <div className="card lead-card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              <span className="lead-id">Lead ID: 1675497804288</span>
              <h5 className="lead-title mt-1">
                Looking for semi husked coconuts
              </h5>
              <div className="lead-details">
                <div className="mb-2">
                  I am interested in buying semi husked coconuts.
                </div>
                <div className="mb-2">
                  <strong>Estimated Order Quantity:</strong> 1 Container
                </div>
                <div>
                  <strong>Contact Person:</strong> solesse &nbsp; | &nbsp;
                  <strong>Location:</strong> saint leu
                </div>
              </div>
            </div>
            <div className="col-md-4 company-info">
              <div className="d-flex flex-column h-100 justify-content-between">
                <div>
                  <h6 className="font-weight-bold">Company</h6>
                  <p>solesse</p>
                  <h6 className="font-weight-bold mt-3">Country</h6>
                  <p>
                    <i className="fa fa-map-marker-alt mr-2" />
                    Réunion
                  </p>
                </div>
                <button className="btn contact-btn align-self-start">
                  <i className="fa fa-paper-plane mr-2" />
                  CONTACT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <nav aria-label="Page navigation" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a
              className="page-link"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              545
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeadListing;

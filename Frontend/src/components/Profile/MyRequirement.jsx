import React, { useEffect, useState } from "react";
import userService from "../../Services/userServices";
import handleApiResponse from "../../helpers/responseHandler";
import InquiryForm from "../RequirementForm";
import moment from "moment";

const MyRequirements = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const itemsPerPage = 8; // Number of items per page

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await userService.allEnquiry(currentPage, itemsPerPage);
        setEnquiries(res.data.data.enquiry);
        setTotalPages(res.data.data.totalPages);
        setTotalRecords(res.data.data.totalRecords);
      } catch (error) {
        handleApiResponse(error);
      }
    };
    fetchEnquiries();
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate pagination buttons
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              «
            </button>
          </li>
          {pages}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              »
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="container col-md-10 my-4 profile_Equiry">
      <h2 className="mb-4">My Requirements</h2>
      <div className="card shadow-sm mr-2">
        <div className="card-body">
          <button
            className="btn btn-success mb-2"
            data-toggle="modal"
            data-target="#enquiryModal"
          >
            <i className="fa fa-plus-circle mr-2" />
            Post Requirement
          </button>
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>Requirement</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Company Name</th>
                <th>Type</th>
                <th>Created At</th>
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {enquiries.length > 0 ? enquiries.map((item, index) => (
                <tr key={item.id}>
                  <td style={{maxWidth:"150px"}}>{item.requirement}</td>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.companyName}</td>
                  <td>{item.userType}</td>
                  <td>{moment(item.createdAt).format("DD-MM-YYYY")}</td>

                  {/* <td className="row btn_wrapper">
                    <button className="btn btn-sm btn-primary me-2">
                      <i className="fa fa-edit" /> Edit
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash" /> Delete
                    </button>
                  </td> */}
                </tr>
              )): (<h6 style={{padding: "5px"}}>No Data found.</h6>)}
        
            </tbody>
          </table>

          {/* Pagination */}
          {renderPagination()}
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="enquiryModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="enquiryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: '500px' }} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="enquiryModalLabel">
                Post Requirement
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
    </div>
  );
};

export default MyRequirements;
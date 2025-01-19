import React from 'react'
import "../../assets/profile/profile.scss"


const ComplaintFeedback = () => {
  return (
    <main className="col-lg-9 col-md-8 complaint_and_feedback_container">
    <h3 className="settings-title">Feedback &amp; Complaints</h3>
    <ul className="nav nav-tabs" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link active"
          href="#your-feedback"
          role="tab"
          data-toggle="tab"
        >
          Your Feedback
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#complaint" role="tab" data-toggle="tab">
          Complaint
        </a>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane active" id="your-feedback" role="tabpanel">
        <div className="form-section">
          <form>
            <div className="form-group">
              <label htmlFor="feedbackSubject">Subject</label>
              <input
                type="text"
                id="feedbackSubject"
                className="form-control"
                placeholder="Enter the subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedbackMessage">Message</label>
              <textarea
                id="feedbackMessage"
                rows={4}
                className="form-control"
                placeholder="Enter your feedback"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <div className="tab-pane" id="complaint" role="tabpanel">
        <div className="form-section">
          <form>
            <div className="form-group">
              <label htmlFor="complaintSubject">Subject</label>
              <input
                type="text"
                id="complaintSubject"
                className="form-control"
                placeholder="Enter the subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="complaintMessage">Message</label>
              <textarea
                id="complaintMessage"
                rows={4}
                className="form-control"
                placeholder="Enter your complaint"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default ComplaintFeedback

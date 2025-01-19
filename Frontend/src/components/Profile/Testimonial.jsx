import React from 'react'
import "../../assets/profile/profile.scss"

function Testimonial() {
  return (
    <main className="col-md-9 py-4">
    <h3 className="profile-settings-title">Submit Your Testimonial</h3>
    <div className="profile-form-section">
      <form>
        <div className="profile-form-group">
          <label htmlFor="testimonialMessage">Testimonial</label>
          <textarea
            className="form-control"
            id="testimonialMessage"
            rows={10}
            placeholder="Write your testimonial here"
            required=""
            defaultValue={""}
          />
        </div>
        <button type="submit" className="curvedbtn my-3">
          Submit Testimonial
        </button>
      </form>
    </div>
  </main>
  
  )
}

export default Testimonial

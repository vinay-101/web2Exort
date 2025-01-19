import "../../assets/profile/profile.scss"
import {Link} from "react-router-dom"

const DashboardSidebar = () => {
  return (
    <aside className="col-md-2 profile_sidebar py-3">
    <h5 style={{textAlign:"center"}}>Web2Export</h5>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/user/profile">
          <i className="fa fa-home mr-2" />
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-building mr-2" />
          Company Profile
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-archive mr-2" />
          Products
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-envelope mr-2" />
          My Enquiries
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-list mr-2" />
          My Requirements
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-check-circle mr-2" />
          Verified Buy Leads
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-globe mr-2" />
          Global Tenders
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user/profile/membership-plans">
          <i className="fa fa-id-badge mr-2" />
          Membership Details
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/user/profile/profile-setting">
          <i className="fa fa-cogs mr-2" />
          Account Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user/profile/complaint-feedback">
          <i className="fa fa-comment mr-2" />
          Feedback &amp; Complaints
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/user/profile/testimonial">
          <i className="fa fa-star mr-2" />
          Testimonail
        </Link>
      </li>
    </ul>
  </aside>
  
  )
}

export default DashboardSidebar

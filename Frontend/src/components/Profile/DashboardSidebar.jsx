import "../../assets/profile/profile.scss"
import { Link, useLocation } from "react-router-dom"
import AuthService from "../../Services/authService";

const DashboardSidebar = () => {
  const location = useLocation();

  const handleLogout = () => {
    AuthService.clearTokens();
  }

  return (
    <aside className="col-md-2 profile_sidebar py-3">
     <Link style={{color: "white", listStyle: "none", textDecoration:"none", }} to={"/"}> <h5>Web2Export</h5></Link>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/user/profile" ? "active" : ""}`}
            to="/user/profile"
          >
            <i className="fa fa-home mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className={`nav-link ${location.pathname === "/user/profile/company-profile" || location.pathname  === "/user/profile/company-profile" ? "active" : ""}`}
            to="/user/profile/company-profile"
          >
            <i className="fa fa-building mr-2" /> 
            Company Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/user/profile/product-listing" || location.pathname  === "/user/profile/add-product" ? "active" : ""}`}
            to="/user/profile/product-listing"
          >
            <i className="fa fa-archive mr-2" />
            Products
          </Link>
        </li>
        {/* <li className="nav-item">
        <Link
            className={`nav-link ${location.pathname === "/user/profile/enquiry" || location.pathname  === "/user/profile/enquiry" ? "active" : ""}`}
            to="/user/profile/enquiry"
          >
            <i className="fa fa-envelope mr-2" />
            My Enquiries
          </Link>
        </li> */}
        <li className="nav-item">
        <Link
            className={`nav-link ${location.pathname === "/user/profile/my-requirement" || location.pathname  === "/user/profile/my-requirement" ? "active" : ""}`}
            to="/user/profile/my-requirement"
          >
            <i className="fa fa-list mr-2" />
            My Requirements
          </Link>
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
          <Link
            className={`nav-link ${location.pathname === "/user/profile/membership-plans" ? "active" : ""}`}
            to="/user/profile/membership-plans"
          >
            <i className="fa fa-id-badge mr-2" />
            Membership Details
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/user/profile/profile-setting" ? "active" : ""}`}
            to="/user/profile/profile-setting"
          >
            <i className="fa fa-cogs mr-2" />
            Account Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/user/profile/complaint-feedback" ? "active" : ""}`}
            to="/user/profile/complaint-feedback"
          >
            <i className="fa fa-comment mr-2" />
            Feedback & Complaints
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${location.pathname === "/user/profile/testimonial" ? "active" : ""}`}
            to="/user/profile/testimonial"
          >
            <i className="fa fa-star mr-2" />
            Testimonial
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/"
            onClick={handleLogout}
          >
            <i className="fa fa-sign-out mr-2" />
            Logout
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default DashboardSidebar

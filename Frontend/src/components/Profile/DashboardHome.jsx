
import { useEffect, useState } from "react"
import "../../assets/profile/profile.scss"
import handleApiResponse from "../../helpers/responseHandler"
import axios from "axios"
import productService from "../../Services/productService"
import { Link } from "react-router-dom"

function DashboardHome() {
const [dashboardData, setDashboardData] = useState({})
  useEffect(()=>{
    const dashboard = async()=>{
      try{
        let res = await productService.fetchDashboardData();
        // console.log(res.data.data);
        setDashboardData(res.data.data);
      }catch(error){
        handleApiResponse(error)
      }
    }
    dashboard();
  }, [])

  return (
<main className="col-md-10 py-3">
  <div className="row mb-4">
    <div className="col-md-12">
      <h3 className="dashboard-title">Dashboard</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-md-3 mb-4">
      <div className="card_profile text-center card-success">
        <div className="card-body">
          <h2 className="card_profile-title">{dashboardData.totalEnquiries || 0}</h2>
          <p className="card_profile-text">Total Enquiries</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card_profile text-center card-info">
        <div className="card-body">
          <h2 className="card_profile-title">{dashboardData.totalProduct || 0}</h2>
          <p className="card_profile-text">Total Products</p>
        </div>
      </div>
    </div>
    {/* <div className="col-md-3 mb-4">
      <div className="card_profile text-center card-warning">
        <div className="card-body">
          <h2 className="card_profile-title">0/0</h2>
          <p className="card_profile-text">Purchased Leads</p>
        </div>
      </div>
    </div> */}
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="card_profile">
        <div className="card-body">
          <h5 className="card_profile-title">Catalog URL</h5>
          <Link
            to={`/member/${dashboardData.companySlug}`}
            className="card-link"
          >
            View Catalog
          </Link>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card_profile">
        <div className="card-body">
          <h5 className="card_profile-title">Recent Enquiries</h5>
          <p>No recent enquiries available.</p>
          <a href="#" className="btn btn-link">
            View All
          </a>
        </div>
      </div>
    </div>
  </div>
</main>

  
  )
}

export default DashboardHome

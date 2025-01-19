
import "../../assets/profile/profile.scss"

function DashboardHome() {

  return (
<main className="col-md-10 py-3">
  <div className="row mb-4">
    <div className="col-md-12">
      <h3 className="dashboard-title">Dashboard</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-md-3 mb-4">
      <div className="card_profile text-center card-primary">
        <div className="card-body">
          <h2 className="card_profile-title">100</h2>
          <p className="card_profile-text">Profile Score</p>
          <a href="#" className="btn btn-link text-white">
            View score details
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card_profile text-center card-success">
        <div className="card-body">
          <h2 className="card_profile-title">0</h2>
          <p className="card_profile-text">Total Enquiries</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card_profile text-center card-info">
        <div className="card-body">
          <h2 className="card_profile-title">2</h2>
          <p className="card_profile-text">Total Products</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card_profile text-center card-warning">
        <div className="card-body">
          <h2 className="card_profile-title">0/0</h2>
          <p className="card_profile-text">Purchased Leads</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="card_profile">
        <div className="card-body">
          <h5 className="card_profile-title">Catalog URL</h5>
          <a
            href="https://globaltradeplaza.com/member/maxtra-technologies-pvt-ltd"
            target="_blank"
            className="card-link"
          >
            https://globaltradeplaza.com/member/maxtra-technologies-pvt-ltd
          </a>
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

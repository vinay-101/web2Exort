import React from 'react'
import CompanyProfileForm from '../components/Profile/CompanyProfile'
import DashboardSidebar from '../components/Profile/DashboardSidebar'

const CompanyProfilePage = () => {
  return (
      <>
              <div className="">
    <div className="row">
     <DashboardSidebar/>
     <CompanyProfileForm />
     
  </div>
  </div>
      </>
  )
}

export default CompanyProfilePage
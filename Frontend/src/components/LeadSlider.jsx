import React, { useEffect, useState } from 'react'
import '../assets/lead.scss'
import ReactCountryFlag from "react-country-flag";
import productService from '../Services/productService';
import { Link } from 'react-router-dom';
const LeadSlider = () => {
  const [buyerLeads, setBuyerLeads] = useState([]);
  const [sellerLeads, setSellerLeads] = useState([]);
  // for buyer leads
  useEffect(() => {
    productService.fetchHomeLeads('Buyer').then((res) => {
      setBuyerLeads(res.data.data);
    });
  }, []);


  // for seller leads
  useEffect(() => {
    productService.fetchHomeLeads('Seller').then((res) => {
      setSellerLeads(res.data.data);
    });
  }, []);



  return (
<div className="container-fluid body_country ">
  <div className="country-lead-container">
    <div className="col-xl-6 col-lg-6">
      <div className="country-lead-header">
        <h3 className="se">Latest Buy Leads</h3>
        <Link to="/lead-home">View All Leads</Link>
      </div>
      <div className="country-lead-column">
        <div className="country-lead-list">
          { buyerLeads.length > 0 && buyerLeads.map((lead) => (
          <div className="country-lead-item">
            <a><img src="https://flagcdn.com/w40/in.png" alt="Sudan" /></a>
            <a className="lead-anchor">{lead.country} - {lead.title} - { new Date(lead.createdAt).toLocaleDateString()}</a>
          </div>
          ))}
        </div>
      </div>
      <div className="country-lead-footer">
      <Link to="/lead-home">View All Leads</Link>
      </div>
    </div>
 
 
    <div className="col-xl-6 col-lg-6">
      <div className="country-lead-header">
        <h3 className="se">Latest Seller Leads</h3>
        <Link to="/lead-home">View All Leads</Link>
      </div>
      <div className="country-lead-column">
      <div className="country-lead-list">
          { sellerLeads.length > 0 && sellerLeads.map((lead) => (
          <div className="country-lead-item">
            <a><img src="https://flagcdn.com/w40/in.png" alt="Sudan" /></a>
            <a className="lead-anchor">{lead.country} - {lead.title} - { new Date(lead.createdAt).toLocaleDateString()}</a>
          </div>
          ))}
        </div>
      </div>
      <div className="country-lead-footer">
      <Link to="/lead-home">View All Leads</Link>
      </div>
    </div>

   
  </div>
</div>
  )
}

export default LeadSlider

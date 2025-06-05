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

  // Helper function to get country code from country name
  const getCountryCode = (countryName) => {
    // This is a simplified mapping - in production you'd want a more complete list
    const countryCodes = {
      'India': 'in',
      'United States': 'us',
      'China': 'cn',
      'United Kingdom': 'gb',
      // Add more countries as needed
    };
    return countryCodes[countryName] || 'in'; // Default to India if not found
  };

  // Format date in a more readable way
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container-fluid body_country">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">LEADS</h2>
          <div className="section-underline"></div>
        </div>
      </div>
      <div className="country-lead-container">
        <div className="col-xl-6 col-lg-6">
          <div className="country-lead-header">
            <h3 className="se">Latest Buy Leads</h3>
            <Link to="/lead-home">View All Leads</Link>
          </div>
          <div className="country-lead-column">
            <div className="country-lead-list-outer">
              <div className="country-lead-list smooth-slider">
                {buyerLeads.concat(buyerLeads).map((lead, idx) => (
                  <div className="country-lead-item" key={idx}>
                    <ReactCountryFlag 
                      countryCode={getCountryCode(lead.country)}
                      svg
                      style={{
                        width: '30px',
                        height: '20px'
                      }}
                      title={lead.country}
                    />
                    <a className="lead-anchor">{lead.country} - {lead.title} - {formatDate(lead.createdAt)}</a>
                  </div>
                ))}
              </div>
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
            <div className="country-lead-list-outer">
              <div className="country-lead-list smooth-slider">
                {sellerLeads.concat(sellerLeads).map((lead, idx) => (
                  <div className="country-lead-item" key={idx}>
                    <ReactCountryFlag 
                      countryCode={getCountryCode(lead.country)}
                      svg
                      style={{
                        width: '30px',
                        height: '20px'
                      }}
                      title={lead.country}
                    />
                    <a className="lead-anchor">{lead.country} - {lead.title} - {formatDate(lead.createdAt)}</a>
                  </div>
                ))}
              </div>
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

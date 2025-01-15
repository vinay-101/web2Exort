import React from 'react';
import { useState } from 'react';
import AllProducts from './AllProduct';
import AddProductForm from './AddProductForm';
import FeaturedProducts from './FeaturedProducts';
import BulkAction from './BulkAction';

const RightContent = () => {


    const [activeTab, setActiveTab] = useState('allProducts');

    const renderContent = () => {
        switch (activeTab) {
            case 'allProducts':
                return <AllProducts />;
            case 'addProduct':
                return <AddProductForm />;
            case 'featuredProducts':
                return <FeaturedProducts />;
            case 'bulkAction':
                return <BulkAction />;
            default:
                return null;
        }
    }



  return (
      <div className="product-page-right-content">
        <div className="product-page-user-section">
          <button className="product-page-help-btn">Help</button>
          <span className="product-page-user-name">User Name</span>
        </div>
      <div className="product-page-header">
        <button className="product-page-header-btn" onClick={() => setActiveTab('allProducts')}>All products</button>
        <button className="product-page-header-btn" onClick={() => setActiveTab('featuredProducts')}>Featured products</button>
        <button className="product-page-header-btn" onClick={() => setActiveTab('addProduct')}>Add new product</button>
        <button className="product-page-header-btn" onClick={() => setActiveTab('bulkAction')}>Bulk Import</button>
        
          </div>
          
      <div className="product-page-products-section">
        <div className="product-page-search-bar">
          <input
            type="text"
            placeholder="Search"
            className="product-page-search-input"
          />
          <button className="product-page-search-btn">Search</button>
          <button className="product-page-reset-btn">Reset</button>
          <select className="product-page-status-select">
            <option>Status</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default RightContent;

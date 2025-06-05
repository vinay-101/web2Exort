import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import productService from '../Services/productService';
import userService from '../Services/userServices';

const ProductListingByCategory = () => {
  const { categoryId, microCategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0
  });
  const [categoryInfo, setCategoryInfo] = useState({
    categoryName: '',
    subCategoryName: '',
    microCategoryName: ''
  });
  
  // State for buyer and seller leads
  const [buyerLeads, setBuyerLeads] = useState([]);
  const [sellerLeads, setSellerLeads] = useState([]);
  const [loadingBuyerLeads, setLoadingBuyerLeads] = useState(false);
  const [loadingSellerLeads, setLoadingSellerLeads] = useState(false);
  const [buyerLeadsError, setBuyerLeadsError] = useState(null);
  const [sellerLeadsError, setSellerLeadsError] = useState(null);
  const [activeTab, setActiveTab] = useState('product');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [enquiryForm, setEnquiryForm] = useState({
    requirement: '',
    fullname: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    userType: 'Seller'
  });
  const [loadingEnquiry, setLoadingEnquiry] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch category information for breadcrumbs
  useEffect(() => {
    const fetchCategoryInfo = async () => {
      try {
        // Fetch main category info
        const categoryResponse = await productService.fetchHomeCategory(categoryId);
        if (categoryResponse.data && categoryResponse.data.success) {
          const categoryData = categoryResponse.data.data;
          setCategoryInfo(prev => ({
            ...prev,
            categoryName: categoryData.name || ''
          }));
        }

        // Fetch micro category info
        const microResponse = await productService.fetchMicroCategories(categoryId);
        if (microResponse.data && microResponse.data.success) {
          const microCategory = microResponse.data.data.find(
            micro => micro.id === parseInt(microCategoryId)
          );
          if (microCategory) {
            setCategoryInfo(prev => ({
              ...prev,
              microCategoryName: microCategory.name || ''
            }));
          }
        }
      } catch (error) {
        console.error('Error fetching category information:', error);
      }
    };

    if (categoryId && microCategoryId) {
      fetchCategoryInfo();
    }
  }, [categoryId, microCategoryId]);
  
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productService.fetchProductsByMicroCategory(
          categoryId, 
          microCategoryId,
          pagination.currentPage
        );
        
        if (response.data && response.data.success) {
          setProducts(response.data.data.products || []);
          setFilteredProducts(response.data.data.products || []);
          setPagination({
            currentPage: pagination.currentPage,
            totalPages: response.data.data.totalPages || 1,
            totalRecords: response.data.data.totalRecords || 0
          });
        } else {
          setError('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('An error occurred while fetching products');
      } finally {
        setLoading(false);
      }
    };

    if (categoryId && microCategoryId) {
      fetchProducts();
    }
  }, [categoryId, microCategoryId, pagination.currentPage]);

  // Filter products when search query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts(products);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(product => {
      return (
        (product.title && product.title.toLowerCase().includes(query)) ||
        (product.businessType && product.businessType.toLowerCase().includes(query)) ||
        (product.User && product.User.company && product.User.company.toLowerCase().includes(query)) ||
        (product.User && product.User.country && product.User.country.toString().toLowerCase().includes(query))
      );
    });
    
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  // Fetch buyer leads
  const fetchBuyerLeads = async () => {
    try {
      setLoadingBuyerLeads(true);
      setBuyerLeadsError(null);
      const response = await productService.fetchLeadsByCategory(categoryId, 'Buyer');
      
      if (response.data && response.data.success) {
        setBuyerLeads(response.data.data.leads || []);
      } else {
        setBuyerLeadsError('Failed to fetch buyer leads');
      }
    } catch (error) {
      console.error('Error fetching buyer leads:', error);
      setBuyerLeadsError('An error occurred while fetching buyer leads');
    } finally {
      setLoadingBuyerLeads(false);
    }
  };

  // Fetch seller leads
  const fetchSellerLeads = async () => {
    try {
      setLoadingSellerLeads(true);
      setSellerLeadsError(null);
      const response = await productService.fetchLeadsByCategory(categoryId, 'Seller');
      
      if (response.data && response.data.success) {
        setSellerLeads(response.data.data.leads || []);
      } else {
        setSellerLeadsError('Failed to fetch supplier leads');
      }
    } catch (error) {
      console.error('Error fetching supplier leads:', error);
      setSellerLeadsError('An error occurred while fetching supplier leads');
    } finally {
      setLoadingSellerLeads(false);
    }
  };

  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    
    if (tabId === 'buyer' && buyerLeads.length === 0 && !loadingBuyerLeads) {
      fetchBuyerLeads();
    } else if (tabId === 'supplier' && sellerLeads.length === 0 && !loadingSellerLeads) {
      fetchSellerLeads();
    }
  };

  // Handle pagination
  const handlePageChange = (newPage) => {
    setPagination({
      ...pagination,
      currentPage: newPage
    });
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle enquiry form input changes
  const handleEnquiryInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle enquiry form submission
  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    try {
      setLoadingEnquiry(true);
      setError(null);
      const response = await userService.createEnquiry(enquiryForm);
      if (response.data && response.data.success) {
        setSuccessMessage('Enquiry submitted successfully!');
        setShowEnquiryModal(false);
        // Reset form
        setEnquiryForm({
          requirement: '',
          fullname: '',
          email: '',
          phoneNumber: '',
          companyName: '',
          userType: 'Seller'
        });
      } else {
        setError('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while submitting the enquiry');
    } finally {
      setLoadingEnquiry(false);
    }
  };

  // Function to open modal with product details
  const handleContactClick = (product) => {
    setSelectedProduct(product);
    setShowEnquiryModal(true);
  };

  return (
    <>
      <TopHeader />
      {/* <Navbar /> */}
      
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modern Product Listing</title>
  {/* Bootstrap 4 CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  {/* Font Awesome for icons */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: `
        :root {
          --primary-color: #3498db;
          --secondary-color: #f8f9fa;
          --accent-color: #e74c3c;
          --text-color: #333;
          --light-text: #6c757d;
          --border-color: #e0e0e0;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: var(--text-color);
          background-color: #f5f7fa;
          padding-top: 20px;
        }
        
        .product-header {
          background-color: white;
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          margin-bottom: 30px;
          border-radius: 8px;
        }
        
        .content-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .nav-tabs {
          margin-bottom: 20px;
        }
        
        .nav-tabs .nav-link {
          color: var(--light-text);
          font-weight: 500;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 10px 20px;
        }
        
        .nav-tabs .nav-link.active {
          color: var(--primary-color);
          border-bottom-color: var(--primary-color);
          background: none;
        }
        
        .product-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          margin-bottom: 20px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
        }
        
        .product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        
        .product-image {
          height: 220px;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          position: relative;
          border-bottom: 1px solid #eee;
        }
        
        .product-image img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .product-image:hover img {
          transform: scale(1.05);
        }
        
        .product-title {
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
          font-size: 1.1rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .product-details {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .badge-tag {
          background-color: #f8f9fa;
          color: #666;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.85rem;
          margin-right: 6px;
          margin-bottom: 6px;
          display: inline-block;
          border: 1px solid #e0e0e0;
        }
        
        .badge-tag i {
          color: #999;
          margin-right: 4px;
        }
        
        .supplier-info {
          border-top: 1px solid #eee;
          padding: 12px 15px;
          background-color: #fcfcfc;
        }
        
        .supplier-name {
          font-weight: 500;
          margin-bottom: 4px;
          font-size: 1rem;
          color: #444;
        }
        
        .btn-contact {
          background-color: #2979ff;
          color: white;
          border-radius: 4px;
          font-weight: 500;
          padding: 6px 16px;
          transition: all 0.2s;
          font-size: 0.9rem;
          border: none;
        }
        
        .btn-contact:hover {
          background-color: #2962ff;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(41, 121, 255, 0.3);
        }
        
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .product-meta {
          margin-top: auto;
          padding-top: 10px;
        }
        
        .price-tag {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2979ff;
          margin-bottom: 8px;
        }
        
        .moq-tag {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 12px;
        }
        
        .pagination {
          justify-content: center;
          margin-top: 20px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .search-container {
          background-color: transparent;
          padding: 0;
          border-radius: 0;
          box-shadow: none;
          margin-bottom: 0;
          display: flex;
          align-items: center;
        }

        .search-input {
          border-radius: 4px;
          padding: 10px 12px;
          border: 1px solid var(--border-color);
          box-shadow: none;
          transition: all 0.3s;
          background-color: transparent;
          height: 36px;
        }

        .search-btn {
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 15px;
          margin-left: 10px;
        }

        .nav-tabs {
          margin-top: 20px;
        }

        .product-header .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-header .row {
          width: 100%;
          margin: 0;
        }

        .breadcrumb {
          margin: 0;
          padding: 0;
          background: transparent;
        }

        .lead-card {
          background: white;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .lead-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }

        .lead-title {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: var(--primary-color);
        }

        .lead-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 0.85rem;
          color: var(--light-text);
        }

        .lead-country {
          display: inline-flex;
          align-items: center;
        }

        .lead-country i {
          margin-right: 5px;
        }

        .lead-date {
          display: inline-flex;
          align-items: center;
        }

        .lead-date i {
          margin-right: 5px;
        }

        .lead-action {
          text-align: right;
          margin-top: 10px;
        }

        .empty-message {
          text-align: center;
          padding: 30px 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .empty-message i {
          font-size: 3rem;
          color: #e0e0e0;
          margin-bottom: 15px;
          display: block;
        }

        /* Enquiry Modal Styles */
        .modal-content {
          border: none;
          border-radius: 8px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }

        .modal-header {
          border-bottom: 1px solid #eee;
          padding: 1rem 1.5rem;
          background-color: #fff;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .modal-title {
          font-weight: 600;
          color: #333;
          font-size: 1.25rem;
        }

        .modal-body {
          padding: 1.5rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-control {
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .form-control:focus {
          border-color: #2979ff;
          box-shadow: 0 0 0 0.2rem rgba(41, 121, 255, 0.15);
        }

        .form-control::placeholder {
          color: #999;
        }

        .btn-primary {
          background-color: #2979ff;
          border: none;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background-color: #2962ff;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(41, 121, 255, 0.3);
        }

        .btn-primary:disabled {
          background-color: #2979ff;
          opacity: 0.7;
        }

        .close {
          font-size: 1.5rem;
          color: #666;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .close:hover {
          opacity: 1;
        }

        .alert {
          border-radius: 4px;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          border: none;
        }

        .alert-success {
          background-color: #e8f5e9;
          color: #2e7d32;
        }

        .alert-danger {
          background-color: #ffebee;
          color: #c62828;
        }

        .modal-backdrop.show {
          opacity: 0.5;
        }

        @media (max-width: 576px) {
          .modal-dialog {
            margin: 1rem;
          }
        }
      `
    }}
  />
  <header className="product-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h4 className="mb-0">{categoryInfo.microCategoryName || 'Products'}</h4>
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-end">
            <div className="search-container">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search products by name, supplier, type..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary search-btn" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-end mb-0 bg-transparent">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href={`/categories/${categoryId}`}>{categoryInfo.categoryName || 'Categories'}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {categoryInfo.microCategoryName || 'Products'}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="content-container">
    {/* Tabs navigation */}
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'product' ? 'active' : ''}`}
          id="product-tab"
          data-toggle="tab"
          href="#product"
          role="tab"
          aria-controls="product"
          aria-selected={activeTab === 'product'}
          onClick={() => handleTabClick('product')}
        >
          Product
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'buyer' ? 'active' : ''}`}
          id="buyer-tab"
          data-toggle="tab"
          href="#buyer"
          role="tab"
          aria-controls="buyer"
          aria-selected={activeTab === 'buyer'}
          onClick={() => handleTabClick('buyer')}
        >
          Buyer
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'supplier' ? 'active' : ''}`}
          id="supplier-tab"
          data-toggle="tab"
          href="#supplier"
          role="tab"
          aria-controls="supplier"
          aria-selected={activeTab === 'supplier'}
          onClick={() => handleTabClick('supplier')}
        >
          Supplier
        </a>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div
        className={`tab-pane fade ${activeTab === 'product' ? 'show active' : ''}`}
        id="product"
        role="tabpanel"
        aria-labelledby="product-tab"
      >
        {loading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="alert alert-info" role="alert">
            {searchQuery ? 'No products found matching your search.' : 'No products found for this category.'}
          </div>
        ) : (
          <>
            {searchQuery && (
              <div className="mb-3 mt-2">
                <small className="text-muted">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} 
                  {searchQuery ? ` for "${searchQuery}"` : ''}
                </small>
              </div>
            )}
            <div className="product-list" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              {filteredProducts.map((product) => (
                <div className="product-card" style={{
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  border: '1px solid #eee',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }} key={product.id}>
                  <div style={{
                    height: '220px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '15px',
                    borderBottom: '1px solid #eee'
                  }}>
                    {product.productImages && product.productImages.length > 0 ? (
                      <img 
                        src={`http://localhost:5000/${product.productImages[0].image}`}
                        alt={product.title}
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    ) : (
                      <i className="fas fa-box fa-3x text-muted" />
                    )}
                  </div>
                  <div style={{padding: '15px', flexGrow: 1}}>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '10px',
                      lineHeight: 1.4,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>{product.title}</h4>
                    
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#2979ff',
                      marginBottom: '8px'
                    }}>
                      Rs {product.price ? product.price.toFixed(2) : '0.00'} / {product.unitType || 'piece'}
                    </div>
                    
                    {product.minQuantity && (
                      <div style={{fontSize: '0.85rem', color: '#666', marginBottom: '12px'}}>
                        MOQ: {product.minQuantity} {product.unitType || 'pieces'}
                      </div>
                    )}
                    
                    <div style={{marginTop: 'auto', paddingTop: '10px'}}>
                      {product.packageQuantity && product.packageUnit && (
                        <span className="badge-tag" style={{
                          backgroundColor: '#f8f9fa',
                          color: '#666',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          marginRight: '6px',
                          marginBottom: '6px',
                          display: 'inline-block',
                          border: '1px solid #e0e0e0'
                        }}>
                          <i className="fas fa-box-open" style={{color: '#999', marginRight: '4px'}}></i>
                          {product.packageQuantity} {product.packageUnit}
                        </span>
                      )}
                      {product.User && product.User.country && (
                        <span className="badge-tag" style={{
                          backgroundColor: '#f8f9fa',
                          color: '#666',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '0.85rem',
                          marginRight: '6px',
                          marginBottom: '6px',
                          display: 'inline-block',
                          border: '1px solid #e0e0e0'
                        }}>
                          <i className="fas fa-map-marker-alt" style={{color: '#999', marginRight: '4px'}}></i>
                          {product.User.country}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{
                    borderTop: '1px solid #eee',
                    padding: '12px 15px',
                    backgroundColor: '#fcfcfc'
                  }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 style={{
                          fontWeight: 500,
                          marginBottom: '4px',
                          fontSize: '1rem',
                          color: '#444'
                        }}>
                          {product.User ? product.User.company : 'Unknown Supplier'}
                        </h5>
                        <small className="text-muted">
                          <i className="fas fa-shield-alt"></i> Verified Supplier
                        </small>
                      </div>
                      {/* import modal for enquiry */}
                      <button 
                        className="btn" 
                        style={{
                          backgroundColor: '#2979ff',
                          color: 'white',
                          borderRadius: '4px',
                          fontWeight: 500,
                          padding: '6px 16px',
                          fontSize: '0.9rem',
                          border: 'none',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => handleContactClick(product)}
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        {/* Pagination - only show when we're not filtering by search */}
        {!loading && !error && !searchQuery && filteredProducts.length > 0 && (
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${pagination.currentPage === 1 ? 'disabled' : ''}`}>
                <a 
                  className="page-link" 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (pagination.currentPage > 1) {
                      handlePageChange(pagination.currentPage - 1);
                    }
                  }}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page} className={`page-item ${pagination.currentPage === page ? 'active' : ''}`}>
                  <a 
                    className="page-link" 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                  >
                    {page}
                  </a>
                </li>
              ))}
              
              <li className={`page-item ${pagination.currentPage === pagination.totalPages ? 'disabled' : ''}`}>
                <a 
                  className="page-link" 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (pagination.currentPage < pagination.totalPages) {
                      handlePageChange(pagination.currentPage + 1);
                    }
                  }}
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div
        className={`tab-pane fade ${activeTab === 'buyer' ? 'show active' : ''}`}
        id="buyer"
        role="tabpanel"
        aria-labelledby="buyer-tab"
      >
        <div className="mb-4">
          <h4>Buyer Requirements</h4>
          <p className="text-muted">Find buyers interested in {categoryInfo.microCategoryName || 'products'} from this category</p>
        </div>
        
        {loadingBuyerLeads ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : buyerLeadsError ? (
          <div className="alert alert-danger" role="alert">
            {buyerLeadsError}
          </div>
        ) : buyerLeads.length === 0 ? (
          <div className="empty-message">
            <i className="fas fa-search"></i>
            <p className="mb-0">No buyer requirements found for this category</p>
            <p className="text-muted small mt-2">Check back later or browse other categories</p>
          </div>
        ) : (
          <div className="buyer-leads-list">
            {buyerLeads.map(lead => (
              <div className="lead-card" key={lead.id}>
                <div className="lead-title">{lead.title}</div>
                <div className="lead-meta">
                  <div className="lead-country">
                    <i className="fas fa-map-marker-alt"></i> {lead.country}
                  </div>
                  <div className="lead-date">
                    <i className="far fa-calendar-alt"></i> {formatDate(lead.createdAt)}
                  </div>
                </div>
                <div className="lead-action">
                  <button className="btn btn-contact btn-sm">
                    <i className="fas fa-envelope mr-1"></i> Contact Buyer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={`tab-pane fade ${activeTab === 'supplier' ? 'show active' : ''}`}
        id="supplier"
        role="tabpanel"
        aria-labelledby="supplier-tab"
      >
        <div className="mb-4">
          <h4>Supplier Offerings</h4>
          <p className="text-muted">Find suppliers offering {categoryInfo.microCategoryName || 'products'} from this category</p>
        </div>
        
        {loadingSellerLeads ? (
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : sellerLeadsError ? (
          <div className="alert alert-danger" role="alert">
            {sellerLeadsError}
          </div>
        ) : sellerLeads.length === 0 ? (
          <div className="empty-message">
            <i className="fas fa-store"></i>
            <p className="mb-0">No supplier offerings found for this category</p>
            <p className="text-muted small mt-2">Check back later or browse other categories</p>
          </div>
        ) : (
          <div className="seller-leads-list">
            {sellerLeads.map(lead => (
              <div className="lead-card" key={lead.id}>
                <div className="lead-title">{lead.title}</div>
                <div className="lead-meta">
                  <div className="lead-country">
                    <i className="fas fa-map-marker-alt"></i> {lead.country}
                  </div>
                  <div className="lead-date">
                    <i className="far fa-calendar-alt"></i> {formatDate(lead.createdAt)}
                  </div>
                </div>
                <div className="lead-action">
                  <button className="btn btn-contact btn-sm">
                    <i className="fas fa-envelope mr-1"></i> Contact Supplier
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
  {/* Bootstrap JS and dependencies */}
</>

      
      <Footer />

      {/* Enquiry Modal */}
      <div className={`modal fade ${showEnquiryModal ? 'show' : ''}`} 
           style={{ 
             display: showEnquiryModal ? 'block' : 'none',
             backgroundColor: 'rgba(0,0,0,0.5)'
           }}
           tabIndex="-1" 
           role="dialog"
           aria-labelledby="enquiryModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" style={{ 
          margin: '1.75rem auto',
          maxWidth: '400px',
          width: '95%'
        }}>
          <div className="modal-content" style={{ 
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
          }}>
            <div className="modal-header" style={{
              borderBottom: '1px solid #eee',
              padding: '1rem 1.5rem',
              backgroundColor: '#fff',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px'
            }}>
              <h5 className="modal-title" style={{
                fontWeight: 600,
                color: '#333',
                fontSize: '1.25rem'
              }}>Post Enquiry</h5>
              <button type="button" 
                      className="close" 
                      onClick={() => setShowEnquiryModal(false)}
                      style={{
                        fontSize: '1.5rem',
                        color: '#666',
                        opacity: 0.7,
                        border: 'none',
                        background: 'none',
                        padding: '0',
                        cursor: 'pointer'
                      }}
                      aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ padding: '1.5rem' }}>
              {error && (
                <div style={{
                  backgroundColor: '#ffebee',
                  color: '#c62828',
                  padding: '0.75rem 1rem',
                  marginBottom: '1rem',
                  borderRadius: '4px'
                }} role="alert">
                  {error}
                </div>
              )}
              {successMessage && (
                <div style={{
                  backgroundColor: '#e8f5e9',
                  color: '#2e7d32',
                  padding: '0.75rem 1rem',
                  marginBottom: '1rem',
                  borderRadius: '4px'
                }} role="alert">
                  {successMessage}
                </div>
              )}
              <form onSubmit={handleEnquirySubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      transition: 'all 0.2s'
                    }}
                    placeholder="Enter Requirement"
                    name="requirement"
                    value={enquiryForm.requirement}
                    onChange={handleEnquiryInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      transition: 'all 0.2s'
                    }}
                    placeholder="Full Name"
                    name="fullname"
                    value={enquiryForm.fullname}
                    onChange={handleEnquiryInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="email"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      transition: 'all 0.2s'
                    }}
                    placeholder="name@company.com"
                    name="email"
                    value={enquiryForm.email}
                    onChange={handleEnquiryInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="tel"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      transition: 'all 0.2s'
                    }}
                    placeholder="Phone No"
                    name="phoneNumber"
                    value={enquiryForm.phoneNo}
                    onChange={handleEnquiryInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      transition: 'all 0.2s'
                    }}
                    placeholder="Company Name"
                    name="companyName"
                    value={enquiryForm.companyName}
                    onChange={handleEnquiryInputChange}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <select
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.95rem',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                      backgroundColor: '#fff'
                    }}
                    name="userType"
                    value={enquiryForm.type}
                    onChange={handleEnquiryInputChange}
                    required
                  >
                    <option value="Seller">Seller</option>
                    <option value="Buyer">Buyer</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    backgroundColor: '#2979ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  disabled={loadingEnquiry}
                >
                  {loadingEnquiry ? (
                    <span>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {' '}Submitting...
                    </span>
                  ) : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal backdrop */}
      {showEnquiryModal && (
        <div className="modal-backdrop fade show"></div>
      )}
    </>
  );
};

export default ProductListingByCategory; 
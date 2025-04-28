import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import productService from '../Services/productService';

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

  return (
    <>
      <TopHeader />
      <Navbar />
      
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
      __html:
        "\n        :root {\n            --primary-color: #3498db;\n            --secondary-color: #f8f9fa;\n            --accent-color: #e74c3c;\n            --text-color: #333;\n            --light-text: #6c757d;\n            --border-color: #e0e0e0;\n        }\n        \n        body {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            color: var(--text-color);\n            background-color: #f5f7fa;\n            padding-top: 20px;\n        }\n        \n        .product-header {\n            background-color: white;\n            padding: 15px 0;\n            box-shadow: 0 2px 10px rgba(0,0,0,0.05);\n            margin-bottom: 30px;\n            border-radius: 8px;\n        }\n        \n        .content-container {\n            max-width: 900px;\n            margin: 0 auto;\n            padding: 0 15px;\n        }\n        \n        .nav-tabs {\n            margin-bottom: 20px;\n        }\n        \n        .nav-tabs .nav-link {\n            color: var(--light-text);\n            font-weight: 500;\n            border: none;\n            border-bottom: 2px solid transparent;\n            padding: 10px 20px;\n        }\n        \n        .nav-tabs .nav-link.active {\n            color: var(--primary-color);\n            border-bottom-color: var(--primary-color);\n            background: none;\n        }\n        \n        .product-card {\n            background: white;\n            border-radius: 8px;\n            box-shadow: 0 4px 12px rgba(0,0,0,0.05);\n            margin-bottom: 25px;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n        }\n        \n        .product-card:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 8px 20px rgba(0,0,0,0.1);\n        }\n        \n        .product-image {\n            height: 180px;\n            background-color: #f8f9fa;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: var(--light-text);\n            border-top-left-radius: 8px;\n            border-top-right-radius: 8px;\n        }\n        \n        .product-title {\n            font-weight: 600;\n            color: var(--primary-color);\n            margin-bottom: 10px;\n            font-size: 1.2rem;\n        }\n        \n        .product-details {\n            padding: 20px;\n            flex-grow: 1;\n        }\n        \n        .product-meta {\n            font-size: 0.9rem;\n            color: var(--light-text);\n            margin-bottom: 15px;\n            display: none;\n        }\n        \n        .product-meta span {\n            margin-right: 15px;\n        }\n        \n        .product-meta i {\n            margin-right: 5px;\n            width: 16px;\n            text-align: center;\n        }\n        \n        .supplier-info {\n            border-top: 1px solid var(--border-color);\n            padding: 15px 20px;\n            background-color: var(--secondary-color);\n            border-bottom-left-radius: 8px;\n            border-bottom-right-radius: 8px;\n        }\n        \n        .supplier-name {\n            font-weight: 600;\n            margin-bottom: 5px;\n            font-size: 1.1rem;\n        }\n        \n        .badge-tag {\n            background-color: #e8f4fd;\n            color: var(--primary-color);\n            padding: 5px 10px;\n            border-radius: 4px;\n            font-size: 0.8rem;\n            margin-right: 8px;\n            margin-bottom: 8px;\n            display: inline-block;\n        }\n        \n        .show-more {\n            color: var(--primary-color);\n            font-size: 0.9rem;\n            cursor: pointer;\n            text-decoration: underline;\n        }\n        \n        .member-badge {\n            font-size: 0.8rem;\n            padding: 3px 8px;\n            background-color: #e0e0e0;\n            color: var(--light-text);\n            border-radius: 4px;\n        }\n        \n        .btn-contact {\n            background-color: var(--primary-color);\n            color: white;\n            border-radius: 4px;\n            font-weight: 500;\n            padding: 8px 20px;\n            transition: all 0.3s;\n            font-size: 0.9rem;\n        }\n        \n        .btn-contact:hover {\n            background-color: #2980b9;\n            transform: translateY(-2px);\n            box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);\n        }\n        \n        .pagination {\n            justify-content: center;\n            margin-top: 20px;\n        }\n\n        .search-container {\n            background-color: white;\n            padding: 20px;\n            border-radius: 8px;\n            box-shadow: 0 2px 10px rgba(0,0,0,0.05);\n            margin-bottom: 20px;\n        }\n\n        .search-input {\n            border-radius: 30px;\n            padding: 10px 20px;\n            border: 1px solid var(--border-color);\n            box-shadow: none;\n            transition: all 0.3s;\n        }\n\n        .search-input:focus {\n            border-color: var(--primary-color);\n            box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);\n        }\n\n        .search-btn {\n            border-radius: 30px;\n            padding: 10px 20px;\n            background-color: var(--primary-color);\n            border: none;\n            color: white;\n            transition: all 0.3s;\n        }\n\n        .search-btn:hover {\n            background-color: #2980b9;\n            transform: translateY(-2px);\n        }\n\n        .lead-card {\n            background: white;\n            border-radius: 8px;\n            padding: 16px;\n            margin-bottom: 16px;\n            box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n            transition: all 0.3s ease;\n        }\n\n        .lead-card:hover {\n            transform: translateY(-3px);\n            box-shadow: 0 6px 15px rgba(0,0,0,0.1);\n        }\n\n        .lead-title {\n            font-weight: 600;\n            font-size: 1.1rem;\n            margin-bottom: 8px;\n            color: var(--primary-color);\n        }\n\n        .lead-meta {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 12px;\n            font-size: 0.85rem;\n            color: var(--light-text);\n        }\n\n        .lead-country {\n            display: inline-flex;\n            align-items: center;\n        }\n\n        .lead-country i {\n            margin-right: 5px;\n        }\n\n        .lead-date {\n            display: inline-flex;\n            align-items: center;\n        }\n\n        .lead-date i {\n            margin-right: 5px;\n        }\n\n        .lead-action {\n            text-align: right;\n            margin-top: 10px;\n        }\n\n        .empty-message {\n            text-align: center;\n            padding: 30px 20px;\n            background: white;\n            border-radius: 8px;\n            box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n        }\n\n        .empty-message i {\n            font-size: 3rem;\n            color: #e0e0e0;\n            margin-bottom: 15px;\n            display: block;\n        }\n    "
    }}
  />
  <header className="product-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          {/* <h2 className="mb-0">Products Marketplace</h2> */}
        </div>
        <div className="col-md-6 text-right">
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
  </header>
  <div className="content-container">
    {/* Search box - only show on products tab */}
    {activeTab === 'product' && (
      <div className="search-container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-3">{categoryInfo.microCategoryName || 'Products'}</h4>
            <div className="input-group">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search products by name, supplier, type..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="input-group-append">
                <button className="btn search-btn" type="button">
                  <i className="fas fa-search mr-2"></i>Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

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
            <div className="product-list">
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image">
                    {product.ProductImages && product.ProductImages.length > 0 ? (
                      <img 
                        src={`http://localhost:5000/${product.ProductImages[0].image}`} 
                        alt={product.title} 
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <i className="fas fa-box fa-4x" />
                    )}
                  </div>
                  <div className="product-details">
                    <h4 className="product-title">{product.title}</h4>
                    <div className="mb-3">
                      {product.packageQuantity && product.packageUnit && (
                        <span className="badge-tag">
                          <i className="fas fa-box-open" /> {product.packageQuantity} {product.packageUnit}
                        </span>
                      )}
                      {product.User && product.User.country && (
                        <span className="badge-tag">
                          <i className="fas fa-map-marker-alt" /> {product.User.country}
                        </span>
                      )}
                      {product.minQuantity && (
                        <span className="badge-tag">
                          <i className="fas fa-cubes" /> MOQ: {product.minQuantity} {product.unitType || 'pieces'}
                        </span>
                      )}
                      {product.price && (
                        <span className="badge-tag">
                          <i className="fas fa-tag" /> ${product.price}
                        </span>
                      )}
                    </div>
                    <p className="show-more">
                      <i className="fas fa-chevron-down" /> Show more details
                    </p>
                  </div>
                  <div className="supplier-info">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <h5 className="supplier-name mb-0">
                          {product.User ? product.User.company : 'Unknown Supplier'}
                        </h5>
                        <small className="text-muted">
                          <i className="fas fa-map-marker-alt" /> {product.User ? product.User.country : 'Unknown Location'}
                        </small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge-tag">
                        <i className="fas fa-store" /> {product.businessType || 'Distributor | Wholesaler'}
                      </span>
                      <button className="btn btn-contact btn-sm">Contact Now</button>
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
    </>
  );
};

export default ProductListingByCategory; 
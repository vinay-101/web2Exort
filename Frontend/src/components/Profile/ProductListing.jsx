import "../../assets/profile/profile.scss";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Include Bootstrap JS
import handleApiResponse from "../../helpers/responseHandler";
import productService from "../../Services/productService";
import { useEffect, useState } from "react";
import moment from "moment";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productCount, setProductCount] = useState(0);
  const [featuredProductCount, setFeaturedProductCount] = useState(0);
  const [activeTab, setActiveTab] = useState("all-products"); // Track active tab

  // Fetch products based on type (Featured or All)
  const fetchProducts = async (type = "all-products") => {
    try {
      const response = await productService.getAllProducts(
        currentPage,
        8,
        type === "featured-products" ? "Featured" : undefined
      );
      setProducts(response.data.data.products);
      setTotalPages(response.data.data.totalPages);
      setProductCount(response.data.data.productsCount);
      setFeaturedProductCount(response.data.data.featuredProductCount);
    } catch (error) {
      console.log(error);
      handleApiResponse(error);
    }
  };

  // Fetch products when the tab or page changes
  useEffect(() => {
    fetchProducts(activeTab);
  }, [currentPage, activeTab]);

  // Delete Product
  const deleteProduct = handleApiResponse(
    async (id) => {
      return await productService.deleteProduct(id);
    },
    () => {
      fetchProducts(activeTab); // Refresh the list after deletion
    }
  );

  // Make Product Featured
  const makeFeatured = handleApiResponse(
    async (id) => {
      return await productService.featureProduct(id);
    },
    () => {
      fetchProducts(activeTab); // Refresh the list after making featured
    }
  );

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to the first page when switching tabs
  };

  return (
    <div className="profile_product_listing">
      {/* Tabs Navigation */}
      <ul className="nav nav-tabs" id="productTabs" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "all-products" ? "active" : ""}`}
            id="all-products-tab"
            data-bs-toggle="tab"
            href="#all-products"
            role="tab"
            aria-controls="all-products"
            aria-selected={activeTab === "all-products"}
            onClick={() => handleTabChange("all-products")}
          >
            <i className="bi bi-box2-fill mr-2"></i>
            All Products ({productCount || 0})
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "featured-products" ? "active" : ""}`}
            id="featured-products-tab"
            data-bs-toggle="tab"
            href="#featured-products"
            role="tab"
            aria-controls="featured-products"
            aria-selected={activeTab === "featured-products"}
            onClick={() => handleTabChange("featured-products")}
          >
            <i className="bi bi-box-seam-fill mr-2"></i>
            Featured Products ({featuredProductCount || 0}) 
          </a>
        </li>
        {/* <li className="nav-item">
          <a
            className="nav-link"
            id="bulk-import-tab"
            data-bs-toggle="tab"
            href="#bulk-import"
            role="tab"
            aria-controls="bulk-import"
            aria-selected="false"
          >
            <i className="bi bi-file-earmark-arrow-up-fill mr-2"></i>
            Bulk Import
          </a>
        </li> */}
      </ul>

      {/* Tabs Content */}
      <div className="tab-content" id="productTabsContent">
        {/* All Products Tab */}
        <div
          className={`tab-pane fade ${activeTab === "all-products" ? "show active" : ""}`}
          id="all-products"
          role="tabpanel"
          aria-labelledby="all-products-tab"
        >
          <div className="mt-2 table-td">
            <NavLink to="/user/profile/add-product">
              <button className="btn btn-success mb-2">
                <i className="fa fa-plus-circle mr-2" />
                Add Product
              </button>
            </NavLink>
            {/* Table Component */}
            <div className="table-responsive">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Category</th>
                    <th>Price (Rs)</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 ? (
                    products.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            className="roundImage"
                            src={
                              `http://localhost:5000/${product?.productImages[0]?.image}` ||
                              "https://via.placeholder.com/60"
                            }
                            alt="Product"
                          />
                        </td>
                        <td>
                          <Link
                            className=" btn_"
                            to={`/user/profile/view-product/${product?.id}`}
                          >
                            {product?.title.length > 10
                              ? product?.title.slice(0, 10) + "..."
                              : product?.title}
                          </Link>
                        </td>
                        <td>
                          {product?.brand.length > 10
                            ? product?.brand.slice(0, 10) + "..."
                            : product?.brand}
                        </td>
                        <td>{product?.model}</td>
                        <td>{product?.category?.name}</td>
                        <td>{product?.price}</td>
                        <td>
                          {product?.status === true ? (
                            <span className="badge badge-success">Active</span>
                          ) : (
                            <span className="badge badge-danger">Inactive</span>
                          )}
                        </td>
                        <td>
                          {moment(product?.createdAt).format("DD-MM-YYYY")}
                        </td>
                        <td>
                          <Link
                            to={`/user/profile/view-product/${product?.id}`}
                            type="button"
                            className="btn btn-sm btn-primary me-1"
                          >
                            <i className="fa fa-eye mr-1" /> View
                          </Link>
                          <button className="btn btn-sm btn-info me-1">
                            <i className="fa fa-edit mr-1" /> Edit
                          </button>
                          <button
                            onClick={() => makeFeatured(product?.id)}
                            className="btn btn-sm btn-warning me-1"
                          >
                            <i className="fa fa-star mr-1" /> Featured
                          </button>
                          <button
                            onClick={() => deleteProduct(product?.id)}
                            className="btn btn-sm btn-danger"
                          >
                            <i className="fa fa-trash mr-1" /> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" style={{ textAlign: "center" }}>
                        No products found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <nav>
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    «
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    »
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Featured Products Tab */}
        <div
          className={`tab-pane fade ${activeTab === "featured-products" ? "show active" : ""}`}
          id="featured-products"
          role="tabpanel"
          aria-labelledby="featured-products-tab"
        >
          {/* Table Component */}
          <div className="table-responsive">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Category</th>
                  <th>Price (Rs)</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          className="roundImage"
                          src={
                            `http://localhost:5000/${product?.productImages[0]?.image}` ||
                            "https://via.placeholder.com/60"
                          }
                          alt="Product"
                        />
                      </td>
                      <td>
                        <Link
                          className=" btn_"
                          to={`/user/profile/view-product/${product?.id}`}
                        >
                          {product?.title.length > 10
                            ? product?.title.slice(0, 10) + "..."
                            : product?.title}
                        </Link>
                      </td>
                      <td>
                        {product?.brand.length > 10
                          ? product?.brand.slice(0, 10) + "..."
                          : product?.brand}
                      </td>
                      <td>{product?.model}</td>
                      <td>{product?.category?.name}</td>
                      <td>{product?.price}</td>
                      <td>
                        {product?.status === true ? (
                          <span className="badge badge-success">Active</span>
                        ) : (
                          <span className="badge badge-danger">Inactive</span>
                        )}
                      </td>
                      <td>
                        {moment(product?.createdAt).format("DD-MM-YYYY")}
                      </td>
                      <td>
                        <Link
                          to={`/user/profile/view-product/${product?.id}`}
                          type="button"
                          className="btn btn-sm btn-primary me-1"
                        >
                          <i className="fa fa-eye mr-1" /> View
                        </Link>
                        <button className="btn btn-sm btn-info me-1">
                          <i className="fa fa-edit mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => makeFeatured(product?.id)}
                          className="btn btn-sm btn-warning me-1"
                        >
                          <i className="fa fa-star mr-1" /> Featured
                        </button>
                        <button
                          onClick={() => deleteProduct(product?.id)}
                          className="btn btn-sm btn-danger"
                        >
                          <i className="fa fa-trash mr-1" /> Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" style={{ textAlign: "center" }}>
                      No featured products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <nav>
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  «
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  »
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bulk Import Tab */}
        <div
          className="tab-pane fade ml-2"
          id="bulk-import"
          role="tabpanel"
          aria-labelledby="bulk-import-tab"
        >
          <div className="bulk-import">
            <h5>Import Products in Bulk</h5>
            <p>Upload an Excel file to import products in bulk.</p>
            <input
              type="file"
              className="form-control-file col-md-4"
              accept=".xlsx, .xls"
            />
            <button className="btn btn-primary">
              <i className="fa fa-upload mr-2" /> Upload File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
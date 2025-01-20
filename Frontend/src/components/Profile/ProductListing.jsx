import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Include Bootstrap JS with dependencies
import "../../assets/profile/profile.scss";
import {Link, NavLink} from "react-router-dom"


const ProductListing = () => {
  return (
    <div className=" profile_product_listing">
      {/* Tabs Navigation */}
      <ul className="nav nav-tabs" id="productTabs" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="all-products-tab"
            data-bs-toggle="tab"
            href="#all-products"
            role="tab"
            aria-controls="all-products"
            aria-selected="true"
          >
            All Products
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="featured-products-tab"
            data-bs-toggle="tab"
            href="#featured-products"
            role="tab"
            aria-controls="featured-products"
            aria-selected="false"
          >
            Featured Products
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="bulk-import-tab"
            data-bs-toggle="tab"
            href="#bulk-import"
            role="tab"
            aria-controls="bulk-import"
            aria-selected="false"
          >
            Bulk Import
          </a>
        </li>
      </ul>

      {/* Tabs Content */}
      <div className="tab-content" id="productTabsContent">
        {/* All Products Tab */}
        <div
          className="tab-pane fade show active"
          id="all-products"
          role="tabpanel"
          aria-labelledby="all-products-tab"
        >
          <div className="mt-2 table-td">
            <NavLink to="/user/profile/add-product">
            <button className="btn btn-success mb-2">
              <i className="fas fa-plus-circle" /> 
              Add Product
              
            </button>
            </NavLink>
            {/* Table Component */}
            <div className="table-responsive">
              <table className="table table-striped ">
                <thead >
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img
                        src="https://via.placeholder.com/60"
                        alt="Product"
                      />
                    </td>
                    <td>
                      <Link className=" btn_" to="/user/profile/view-product">                       
                      Product_Name                
                      </Link>
                    </td>
                    <td>Electronics</td>
                    <td>$500</td>
                    <td>
                      <span className="badge badge-success">In Stock</span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        <i className="fas fa-edit" /> Edit
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <i className="fas fa-trash" /> Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#">
                    «
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    »
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Featured Products Tab */}
        <div
          className="tab-pane fade"
          id="featured-products"
          role="tabpanel"
          aria-labelledby="featured-products-tab"
        >
          <div className="mt-4">
            <button className="btn btn-success mb-3">
              <i className="fas fa-plus-circle" /> Add Featured Product
            </button>
            {/* Table Component */}
          </div>
        </div>

        {/* Bulk Import Tab */}
        <div
          className="tab-pane fade"
          id="bulk-import"
          role="tabpanel"
          aria-labelledby="bulk-import-tab"
        >
          <div className="bulk-import">
            <h5>Import Products in Bulk</h5>
            <p>Upload an Excel file to import products in bulk.</p>
            <input type="file" className="form-control-file" accept=".xlsx, .xls" />
            <button className="btn btn-primary">
              <i className="fas fa-upload" /> Upload File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

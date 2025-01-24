import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/profile/profile.scss";

const EnquiryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data
  const enquiries = [
    {
      id: 1,
      image: "Product",
      name: "Product_Name",
      category: "Electronics",
      price: "$500",
      stock: "In Stock",
    },
    {
      id: 2,
      image: "Product",
      name: "Item 2",
      category: "Clothing",
      price: "$100",
      stock: "Out of Stock",
    },
    {
      id: 3,
      image: "Product",
      name: "Item 3",
      category: "Books",
      price: "$20",
      stock: "In Stock",
    },
    {
      id: 4,
      image: "Product",
      name: "Item 4",
      category: "Toys",
      price: "$50",
      stock: "In Stock",
    },
    {
      id: 5,
      image: "Product",
      name: "Item 5",
      category: "Furniture",
      price: "$800",
      stock: "Out of Stock",
    },
    {
      id: 6,
      image: "Product",
      name: "Item 6",
      category: "Electronics",
      price: "$400",
      stock: "In Stock",
    },
    {
      id: 7,
      image: "Product",
      name: "Item 7",
      category: "Kitchenware",
      price: "$30",
      stock: "Out of Stock",
    },
    {
      id: 8,
      image: "Product",
      name: "Item 8",
      category: "Beauty",
      price: "$70",
      stock: "In Stock",
    },
  ];

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = enquiries.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container col-md-10 my-4 profile_Equiry">
      <h2 className="mb-4">My Enquires</h2>
      <div className="card shadow-sm mr-2">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
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
              {currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Product"
                      className="img-thumbnail"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.stock === "In Stock"
                          ? "badge-success"
                          : "badge-danger"
                      }`}
                    >
                      {item.stock}
                    </span>
                  </td>
                  <td className="row btn_wrapper">
                    <button className="btn btn-sm btn-primary me-2">
                      <i className="fa fa-edit" /> Edit
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="fa fa-trash" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
    </div>
  );
};

export default EnquiryTable;

import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import "../../assets/profile/profile.scss";
import handleApiResponse from "../../helpers/responseHandler";

const AddProduct = () => {
  // Jodit Editor
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    toolbarButtonSize: "middle",
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "eraser",
      "ul",
      "ol",
      "outdent",
      "indent",
      "font",
      "fontsize",
      "brush",
      "paragraph",
      "align",
      "undo",
      "redo",
      "hr",
      "table",
      "link",
      "source",
    ],
    removeButtons: ["image", "file"],
  };

  // Product Specifications
  const [specifications, setSpecifications] = useState([
    { id: Date.now(), attribute: "", value: "" },
  ]);

  const addSpecification = () => {
    setSpecifications([
      ...specifications,
      { id: Date.now(), attribute: "", value: "" },
    ]);
  };

  const removeSpecification = (id) => {
    setSpecifications(specifications.filter((spec) => spec.id !== id));
  };

  const handleSpecificationChange = (id, field, value) => {
    setSpecifications(
      specifications.map((spec) =>
        spec.id === id ? { ...spec, [field]: value } : spec
      )
    );
  };

  const handleSubmit = handleApiResponse(async (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append("categoryId", e.target.categoryId.value);
        // formData.append("subCategoryId", e.target.subCategoryId.value);
        // formData.append("subCategoryId", e.target.subCategoryId.value);
        // formData.append("subCategoryId", e.target.subCategoryId.value);
    },
    (data) => {}
  );

  return (
    <div className="col-xl-10 col-lg-10 profile_add_product">
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="form-section">
          <h5>Basic Information</h5>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Enter product name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="modelNumber">Model Number</label>
              <input
                type="text"
                className="form-control"
                id="modelNumber"
                placeholder="Enter model number"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productKeyword">Product Keyword</label>
              <input
                type="text"
                className="form-control"
                id="productKeyword"
                placeholder="Enter keywords"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productPrice">Price ($)</label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="Enter price"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productBrochure">
                Product Brochure (PDF/Max 5MB)
              </label>
              <input
                type="file"
                className="form-control-file"
                id="productBrochure"
              />
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="form-section">
          <h5>Detailed Description</h5>
          <div className="form-group">
            {/* <textarea
              className="form-control"
              rows={5}
              placeholder="Describe your product (max 500 characters)"
              id="description"
            /> */}
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
        </div>

        {/* Product Specification */}
        <div className="form-section">
          <h5>Product Specification</h5>
          {specifications.map((spec) => (
            <div className="form-row align-items-center mb-2" key={spec.id}>
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Attribute (e.g., Color)"
                  value={spec.attribute}
                  onChange={(e) =>
                    handleSpecificationChange(
                      spec.id,
                      "attribute",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Value (e.g., Red)"
                  value={spec.value}
                  onChange={(e) =>
                    handleSpecificationChange(spec.id, "value", e.target.value)
                  }
                />
              </div>
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-danger remove-specification"
                  onClick={() => removeSpecification(spec.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-success"
            onClick={addSpecification}
          >
            Add More
          </button>
        </div>

        {/* Trade Information */}
        <div className="form-section">
          <h5>Trade Information</h5>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="unitType">Unit Type</label>
              <select className="form-control" id="unitType">
                <option value="">Select</option>
                <option value="kg">Kilogram</option>
                <option value="pcs">Pieces</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="minQuantity">Min Quantity</label>
              <input type="number" className="form-control" id="minQuantity" />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="maxQuantity">Max Quantity</label>
              <input type="number" className="form-control" id="maxQuantity" />
            </div>
          </div>
          <div className="form-group">
            <label>Accepted Payment</label>
            <div className="checkbox-group">
              {["T/T", "L/C", "PayPal"].map((option, index) => (
                <div className="form-check" key={index}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`paymentOption${index}`}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`paymentOption${index}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logistics Information */}
        <div className="form-section">
          <h5>Logistics Information</h5>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="deliveryTime">Delivery Time (Days)</label>
              <input
                type="number"
                className="form-control"
                id="deliveryTime"
                placeholder="Enter delivery time"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="releasePorts">Release Ports</label>
              <select className="form-control" id="releasePorts">
                <option value="">Select</option>
                <option value="port1">Port 1</option>
                <option value="port2">Port 2</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

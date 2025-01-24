import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import "../../assets/profile/profile.scss";
import handleApiResponse from "../../helpers/responseHandler";

const AddProduct = () => {
  // Jodit Editor
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

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


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageURLs = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prev) => [...prev, ...imageURLs].slice(0, 20)); // Limit to 20 images
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };


  const handleSubmit = handleApiResponse(
    async (e) => {
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
            {/* Product Images */}

               {/* start  */}
               <div className="form-group col-md-12">
              <label htmlFor="productImages">Product Images</label>
              <input
                type="file"
                id="productImages"
                className="form-control-file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="image-preview-container mt-3 d-flex flex-wrap">
                {selectedImages.map((src, index) => (
                  <div key={index} className="image-preview mr-2 mb-2">
                    <img
                      src={src}
                      alt={`Preview ${index}`}
                      className="preview-img"
                      width={60}
                      height={60}
                    />
                    <i
                      type="button"
                      className="bi bi-x-circle-fill mt-1"
                      onClick={() => removeImage(index)}
                    >
                    </i>
                  </div>
                ))}
              </div>
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
              <label htmlFor="productPrice">Price (INR)</label>
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
            <div className="form-group col-md-6">
              <label htmlFor="productMaterial">Product Material</label>
              <input
                type="text"
                className="form-control"
                id="productMaterial"
                placeholder="Enter product material"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="placeOfOrigin">Place of Origin</label>
              <select className="form-control" id="placeOfOrigin">
                <option value="">Select</option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="form-section">
          <h5>Detailed Description</h5>
          <div className="form-group">
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
            <div className="form-row  mb-2" key={spec.id}>
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
              {[
                "T/T",
                "L/C",
                "D/P",
                "D/A",
                "MoneyGram",
                "Credit Card",
                "PayPal",
                "Western Union",
                "Cash",
                "Escrow",
              ].map((option, index) => (
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
          <div className="form-group">
            <label htmlFor="businessType">Business Type</label>
            <select className="form-control" id="businessType">
              <option value="">Select</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="tradingCompany">Trading Company</option>
              <option value="buyingOffice">Buying Office</option>
              <option value="agent">Agent</option>
              <option value="distributor">Distributor/Wholesaler</option>
              <option value="government">
                Government ministry/Bureau/Commission
              </option>
              <option value="association">Association</option>
              <option value="businessService">
                Business Service (Transportation, finance, travel, Ads, etc)
              </option>
              <option value="other">Other</option>
            </select>
          </div>

            {/* Processing time  */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="unitType">Processing Time</label>
              <input type="number" className="form-control" id="minQuantity" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="minQuantity">Time Unit</label>
              <select className="form-control" id="unitType">
                <option value="Day">Day</option>
                <option value="Week">Week</option>
                <option value="Month">Month</option>
                <option value="Quarter">Quarter</option>
                <option value="Year">Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Packaging Information */}
        <div className="form-section">
          <h5>Packaging Information</h5>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="package">Package</label>
              <select className="form-control" id="package">
                <option value="">Select</option>
                <option value="package1">Package 1</option>
                <option value="package2">Package 2</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="quantity">Quantity</label>
              <input type="number" className="form-control" id="quantity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="package">Unit</label>
              <select className="form-control" id="package">
                <option value="">Select</option>
                <option value="package1">Package 1</option>
                <option value="package2">Package 2</option>
              </select>
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

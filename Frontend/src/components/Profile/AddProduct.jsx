import React, { useRef, useState, useEffect, useMemo } from "react";
import JoditEditor from "jodit-react";
import "../../assets/profile/profile.scss";
import handleApiResponse from "../../helpers/responseHandler";
import productService from "../../Services/productService";
import debounce from "lodash.debounce";

const AddProduct = () => {
  // Jodit Editor
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [dropdownData, setDropdownData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const formRef = useRef(null);

  const config = useMemo(() => ({
    toolbarButtonSize: 'middle',
    buttons: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'eraser',
      'ul',
      'ol',
      'outdent',
      'indent',
      'font',
      'fontsize',
      'brush',
      'paragraph',
      'align',
      'undo',
      'redo',
      'hr',
      'table',
      'link',
      'source',
    ],
    removeButtons: ['image', 'file'],
  }), []);


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
    const newImages = files.map((file) => ({
      file, // Store file object
      url: URL.createObjectURL(file), // Create URL for preview
    }));

    // Update selectedImages with the new files
    setSelectedImages((prev) => [...prev, ...newImages].slice(0, 20)); // Limit to 20
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => {
      // Revoke the URL before removing the image
      URL.revokeObjectURL(prev[index].url); // Revoke the object URL to free up memory
      const updatedImages = prev.filter((_, i) => i !== index); // Remove image by index

      // Only return the updated list, which no longer includes the removed image
      return updatedImages;
    });
  };

  // Product Dropdown
  // Function to fetch dropdown data
  const fetchDropdownData = async (scope = "") => {
    try {
      const response = await productService.allCategory(scope);
      setDropdownData(response.data.data); // Assuming response.data contains the array of dropdown items
    } catch (error) {
      console.error("Error fetching dropdown data:", error);
    }
  };

  // Debounced function for fetching based on user input
  const handleProductDropdown = debounce((value) => {
    fetchDropdownData(value);
  }, 300);

  // Effect to trigger API call on inputValue change
  useEffect(() => {
    if (inputValue) {
      handleProductDropdown(inputValue);
    }
  }, [inputValue]);

  // Handle input focus to fetch all categories initially
  const handleInputFocus = () => {
    setShowDropdown(true);
    if (!inputValue) {
      fetchDropdownData(); // Fetch all categories if no scope is provided
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSelectedCategoryId(null);
  };

  // Handle dropdown item selection
  const handleItemClick = (item) => {
    setInputValue(item.name);
    setSelectedCategoryId(item.id); // Store the selected item's ID
    setShowDropdown(false);
  };

  const handleSubmit = handleApiResponse(
    async (e) => {
      e.preventDefault();
      const formData = new FormData(formRef.current);

      // // Add images
      selectedImages.forEach((image, index) => {
        formData.append('images', image.file); 
      });


      // Add category ID
      console.log("selectedCategoryId", selectedCategoryId);
      formData.append("categoryId", selectedCategoryId);

      // Add specifications
      const specs = specifications.map((spec) => ({
        key: spec.attribute,
        value: spec.value,
      }));
      formData.append("specifications", JSON.stringify(specs));

      return await productService.createProduct(formData);
    },
    (data) => {
      // Optionally handle success response
      console.log("Product created successfully:", data);
    }
  );

  return (
    <div className="col-xl-10 col-lg-10 profile_add_product">
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="form-section">
          <h5>Basic Information</h5>
          <div className="form-row">
            <div className="form-group col-md-6 position-relative">
              <label htmlFor="productName">Product Category</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                // name="categoryId"
                placeholder="Enter product name"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Close dropdown on blur
              />
              {showDropdown && dropdownData.length > 0 && (
                <ul className="dropdown-menu show w-100 position-absolute mt-1 shadow">
                  {dropdownData.map((item, index) => (
                    <li
                      key={item.id}
                      className="dropdown-item"
                      onClick={() => handleItemClick(item)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="modelNumber">Name</label>
              <input
                type="text"
                className="form-control"
                id="modelNumber"
                name="title"
                placeholder="Enter Product Name"
              />
            </div>

            {/* Product Image  */}
            <div className="form-group col-md-12">
              <label htmlFor="productImages">Product Images</label>
              <input
                type="file"
                id="productImages"
                className="form-control-file"
                // name="images"
                multiple
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="image-preview-container mt-3 d-flex flex-wrap">
                {selectedImages.map((image, index) => (
                  <div key={index} className="image-preview mr-2 mb-2">
                    <img
                      src={image.url}
                      alt={`Preview ${index}`}
                      className="preview-img"
                      width={60}
                      height={60}
                    />
                    <i
                      type="button"
                      className="bi bi-x-circle-fill mt-1"
                      onClick={() => removeImage(index)}
                    ></i>
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
                name="model"
                placeholder="Enter model number"
              />
            </div>
            {/* <div className="form-group col-md-6">
              <label htmlFor="productKeyword">Product Keyword</label>
              <input
                type="text"
                className="form-control"
                id="productKeyword"
                placeholder="Enter keywords"
              />
            </div> */}
            <div className="form-group col-md-6">
              <label htmlFor="productPrice">Price (INR)</label>
              <input
                type="number"
                className="form-control"
                name="price"
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
                name="brochure"
                accept="application/pdf"
                id="productBrochure"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productMaterial">Product Material</label>
              <input
                type="text"
                className="form-control"
                id="productMaterial"
                name="material"
                placeholder="Enter product material"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="placeOfOrigin">Place of Origin</label>
              <select className="form-control" id="placeOfOrigin" name="coi">
                <option value="">Select</option>
                <option value="1">Country 1</option>
                <option value="2">Country 2</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="placeOfOrigin">Brand</label>
              <input
                type="text"
                className="form-control"
                name="brand"
                id="brand"
                placeholder="Enter Brand"
              />
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="form-section">
          <h5>Detailed Description</h5>
          <div className="form-group">
            <JoditEditor
              ref={editor}
              config={config}
              value={content}
              name="description"
              tabIndex={1} // tabIndex of textarea
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
              <select className="form-control" id="unitType" name="unitType">
                <option value="">Select</option>
                <option value="Bags">Bags</option>
                <option value="Carton">Carton</option>
                <option value="Dozen">Dozen</option>
                <option value="Feet">Feet</option>
                <option value="Kilogram">Kilogram</option>
                <option value="Meter">Meter</option>
                <option value="Metric Ton">Metric Ton</option>
                <option value="Pieces">Pieces</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="minQuantity">Min Quantity</label>
              <input
                type="number"
                className="form-control"
                id="minQuantity"
                name="minQuantity"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="maxQuantity">Max Quantity</label>
              <input
                type="number"
                className="form-control"
                id="maxQuantity"
                name="maxQuantity"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Accepted Payment</label>
            <div className="checkbox-group">
              {["Razorpay", "CcAvenue", "PayPal"].map((option, index) => (
                <div className="form-check" key={index}>
                  <input
                    type="radio"
                    className="form-check-input"
                    value={option}
                    name="acceptedPayment"
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
            <select
              className="form-control"
              id="businessType"
              name="businessType"
            >
              <option value="">Select</option>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Companies">Companies</option>
              <option value="Trader">Trader</option>
              <option value="Distributor">Distributor</option>
              <option value="Reseller">Reseller</option>
              <option value="Wholesaler">Wholesaler</option>
              <option value="Service Provider">Service Provider</option>
            </select>
          </div>

          {/* Processing time  */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="unitType">Processing Time</label>
              <input
                type="number"
                className="form-control"
                id="minQuantity"
                name="processLeadTime"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="minQuantity">Time Unit</label>
              <select
                className="form-control"
                id="unitType"
                name="processLeadTimeUnit"
              >
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
              <select className="form-control" id="package" name="packageType">
                <option value="">Select</option>
                <option value="Bag">Bag</option>
                <option value="Carton box">Carton box</option>
                <option value="bottle">bottle</option>
                <option value="Customised">Customised</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="packageQuantity"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="package">Unit</label>
              <select className="form-control" id="package" name="packageUnit">
                <option value="">Select</option>
                <option value="Pieces">Pieces</option>
                <option value="Kgs">Kgs</option>
                <option value="Litters">Litters</option>
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
                name="deliveryTime"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="releasePorts">Release Ports</label>
              <select
                className="form-control"
                id="releasePorts"
                name="nearestPort"
              >
                <option value="">Select</option>
                <option value="1">Port 1</option>
                <option value="2">Port 2</option>
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

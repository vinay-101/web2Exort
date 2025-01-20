import "../../assets/profile/profile.scss"

const AddProduct = () => {
  return (
    <div className="profile_add_product">
  <form>
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
        <textarea
          className="form-control"
          rows={5}
          placeholder="Describe your product (max 500 characters)"
          defaultValue={""}
        />
      </div>
    </div>
    {/* Product Specification */}
    <div className="form-section">
      <h5>Product Specification</h5>
      <div id="specifications">
        <div className="form-row align-items-center mb-2">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Attribute (e.g., Color)"
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Value (e.g., Red)"
            />
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-danger remove-specification"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-success" id="add-specification">
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
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="paymentOption1"
            />
            <label className="form-check-label" htmlFor="paymentOption1">
              T/T
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="paymentOption2"
            />
            <label className="form-check-label" htmlFor="paymentOption2">
              L/C
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="paymentOption3"
            />
            <label className="form-check-label" htmlFor="paymentOption3">
              PayPal
            </label>
          </div>
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

  )
}

export default AddProduct
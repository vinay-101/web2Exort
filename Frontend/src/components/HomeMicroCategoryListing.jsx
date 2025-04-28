import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import productService from '../Services/productService'

const HomeMicroCategoryListing = () => {
  const { categoryId, subCategoryId } = useParams();
  const [microCategories, setMicroCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get category and subcategory info for the title
  const [categoryName, setCategoryName] = useState('Categories');
  const [subCategoryName, setSubCategoryName] = useState('');

  useEffect(() => {
    const fetchMicroCategories = async () => {
      try {
        setLoading(true);
        const response = await productService.fetchMicroCategories(categoryId);
        console.log("response", response)
        if(response.data && response.data.success) {
          setMicroCategories(response.data.data);
        } else {
          setError('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching micro categories:', error);
        setError('An error occurred while fetching categories');
      } finally {
        setLoading(false);
      }
    };

    if(categoryId) {
      fetchMicroCategories();
    }
  }, [categoryId]);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await productService.fetchHomeCategory(categoryId);
        if (response.data && response.data.success) {
          const categoryData = response.data.data;
          setCategoryName(categoryData.name || 'Categories');
          
          if (categoryData.SubCategories) {
            const subCategory = categoryData.SubCategories.find(
              sub => sub.id === parseInt(subCategoryId)
            );
            if (subCategory) {
              setSubCategoryName(subCategory.name);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching category details:', error);
      }
    };

    if (categoryId && subCategoryId) {
      fetchCategoryDetails();
    }
  }, [categoryId, subCategoryId]);

  // Display emoji based on category name
  const getCategoryEmoji = (name) => {
    const nameLower = name.toLowerCase();
    
    if (nameLower.includes('grass')) return '🌿';
    if (nameLower.includes('bath')) return '🚿';
    if (nameLower.includes('rug')) return '🛁';
    if (nameLower.includes('car')) return '🚗';
    if (nameLower.includes('carpet')) return '🏠';
    if (nameLower.includes('coir')) return '🌴';
    if (nameLower.includes('cotton')) return '👕';
    if (nameLower.includes('door')) return '🚪';
    if (nameLower.includes('floor')) return '🧩';
    if (nameLower.includes('hand')) return '✋';
    
    // Default emoji
    return '🏆';
  };

  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Micro Categories Grid</title>
  {/* Bootstrap 4 CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        :root {\n            --primary-color: #2c3e50;\n            --secondary-color: #34495e;\n            --accent-color: #007bff;\n            --light-bg: #f8f9fa;\n        }\n        \n        body {\n            font-family: 'Segoe UI', Roboto, sans-serif;\n            background-color: var(--light-bg);\n            color: #333;\n        }\n        \n        .category-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n            gap: 20px;\n            padding: 20px 0;\n        }\n        \n        .category-item {\n            background: white;\n            border-radius: 8px;\n            overflow: hidden;\n            transition: all 0.25s ease;\n            box-shadow: 0 2px 8px rgba(0,0,0,0.08);\n            text-align: center;\n            text-decoration: none;\n            color: var(--primary-color);\n        }\n        \n        .category-item:hover {\n            transform: translateY(-3px);\n            box-shadow: 0 5px 15px rgba(0,0,0,0.12);\n            color: var(--accent-color);\n        }\n        \n        .category-image {\n            width: 100%;\n            height: 120px;\n            object-fit: cover;\n            background: #ecf0f1;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: #bdc3c7;\n            font-size: 2rem;\n        }\n        \n        .category-name {\n            padding: 12px 8px;\n            font-weight: 500;\n            font-size: 0.9rem;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        }\n        \n        .header {\n            background: linear-gradient(to right, var(--primary-color), var(--secondary-color));\n            color: white;\n            padding: 1.5rem 0;\n            margin-bottom: 1rem;\n        }\n        \n        .filter-controls {\n            background: white;\n            padding: 15px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0,0,0,0.05);\n            margin-bottom: 20px;\n        }\n        \n        @media (max-width: 767px) {\n            .category-grid {\n                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n                gap: 12px;\n            }\n            \n            .category-image {\n                height: 90px;\n            }\n            \n            .category-name {\n                font-size: 0.8rem;\n                padding: 8px 4px;\n            }\n        }\n    "
    }}
  />

    <div className="container">
      <h1 className="h2 mb-3 text-center my-2">
        {subCategoryName ? `${subCategoryName} - ${categoryName}` : categoryName}
      </h1>
    </div>
  <div className="container">
    <div className="filter-controls">
      <div className="row align-items-center">
        <div className="col-md-6 mb-2 mb-md-0">
          <h2 className="h5 mb-0">All Categories</h2>
        </div>
      </div>
    </div>
    
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
    ) : (
      <div className="category-grid">
        {microCategories.length > 0 ? (
          microCategories.map((category) => (
            <Link to={`/products/${categoryId}/${category.id}`} key={category.id} className="category-item">
              <div className="category-image">
                {category.image ? (
                  <img src={`http://localhost:5000/${category.image}`} alt={category.name} />
                ) : (
                  <span>{getCategoryEmoji(category.name)}</span>
                )}
              </div>
              <div className="category-name">{category.name}</div>
            </Link>
          ))
        ) : (
          <div className="col-12 text-center py-4">
            <p>No categories found</p>
          </div>
        )}
      </div>
    )}
  </div>
  {/* Bootstrap 4 JS and dependencies */}
</>
  )
}

export default HomeMicroCategoryListing

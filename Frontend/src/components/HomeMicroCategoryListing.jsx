import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import productService from '../Services/productService'

const HomeMicroCategoryListing = () => {
  const { categoryId, subCategoryId } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        setLoading(true);
        const response = await productService.fetchAllCategorySubCategoryMicroCategory(categoryId);
        if (response.data && response.data.success) {
          setCategoryData(response.data.data);
        } else {
          setError('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching category details:', error);
        setError('An error occurred while fetching categories');
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchCategoryDetails();
    }
  }, [categoryId]);

  // Display emoji based on category name
  const getCategoryEmoji = (name) => {
    const nameLower = name.toLowerCase();
    
    if (nameLower.includes('agriculture')) return '🌾';
    if (nameLower.includes('machinery')) return '🚜';
    if (nameLower.includes('fertilizer')) return '🌱';
    if (nameLower.includes('seed')) return '🌰';
    if (nameLower.includes('flower')) return '🌸';
    if (nameLower.includes('plant')) return '🪴';
    if (nameLower.includes('rice')) return '🍚';
    if (nameLower.includes('tractor')) return '🚜';
    
    return '🌿';
  };

  return (
    <div className="container">
      <h1 className="h2 mb-4 text-center my-4">
        {categoryData ? categoryData.name : 'Categories'}
      </h1>

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
        <div className="subcategories-container">
          {categoryData?.subCategories.map((subCategory) => (
            <div key={subCategory.id} className="subcategory-section">
              <div className="subcategory-header">
                <img 
                  src={`http://localhost:5000/${subCategory.image}`}
                  alt={subCategory.name}
                  className="subcategory-image"
                />
                <h2 className="subcategory-title">{subCategory.name}</h2>
              </div>
              
              <div className="category-grid">
                {subCategory.downSubCategories?.map((microCategory) => (
                  <Link 
                    to={`/products/${categoryId}/${microCategory.id}`} 
                    key={microCategory.id} 
                    className="category-item"
                  >
                    <div className="category-image">
                      {microCategory.image ? (
                        <img 
                          src={`http://localhost:5000/${microCategory.image}`} 
                          alt={microCategory.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <span>{getCategoryEmoji(microCategory.name)}</span>
                      )}
                    </div>
                    <div className="category-name">{microCategory.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .subcategories-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .subcategory-section {
          background: white;
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .subcategory-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
        }

        .subcategory-image {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          object-fit: cover;
        }

        .subcategory-title {
          font-size: 1.5rem;
          margin: 0;
          color: #333;
          font-weight: 600;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 20px;
          padding: 10px;
        }

        .category-item {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
          text-decoration: none;
          color: inherit;
          border: 1px solid #eee;
        }

        .category-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .category-image {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          font-size: 3rem;
        }

        .category-name {
          padding: 12px;
          text-align: center;
          font-weight: 500;
          color: #333;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .category-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 15px;
          }

          .category-image {
            height: 120px;
          }

          .subcategory-title {
            font-size: 1.2rem;
          }

          .subcategory-image {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeMicroCategoryListing;

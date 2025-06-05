import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeMicroCategoryListing from '../components/HomeMicroCategoryListing'
import productService from '../Services/productService'

const HomePageCategoryListing = () => {
  const { categoryId, subCategoryId } = useParams();
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCategoryInfo = async () => {
      try {
        setLoading(true);
        const response = await productService.fetchHomeCategory(categoryId);
        if(response.data && response.data.success) {
          setCategoryInfo(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching category info:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if(categoryId) {
      fetchCategoryInfo();
    }
  }, [categoryId]);
  
  // Find the current subcategory name
  const getSubCategoryName = () => {
    if (!categoryInfo || !categoryInfo.SubCategories) return 'Products';
    
    const subCategory = categoryInfo.SubCategories.find(
      sub => sub.id === parseInt(subCategoryId)
    );
    
    return subCategory ? subCategory.name : 'Products';
  };

  return (
    <>
      <TopHeader />
      {/* <Navbar /> */}
      <HomeMicroCategoryListing/>
      <Footer/>
    </>
  )
}

export default HomePageCategoryListing

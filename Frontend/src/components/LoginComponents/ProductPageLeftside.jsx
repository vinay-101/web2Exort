import React from 'react';

const LeftSidebar = () => {
  const menuItems = [
    'Dashboard',
    'Company profile',
    'Products',
    'My enquiries',
    'My requirements',
    'Verified buy leads',
    'Global Tenders',
    'Membership details',
    'Account settings',
    'Feedback & complaints',
    'Testimonial',
  ];

  return (
    <div className="product-page-left-sidebar">
      <h2 className="product-page-sidebar-header">Web2Export</h2>
      <ul className="product-page-menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="product-page-menu-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;

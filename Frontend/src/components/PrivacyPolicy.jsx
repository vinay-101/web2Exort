import React, { useEffect, useState } from 'react';
import userService from '../Services/userServices';

const PrivacyPolicy = () => {
  const [privacyPolicyContent, setPrivacyPolicyContent] = useState("");

  useEffect(() => {
    async function fetchPrivacyPolicy() {
      try {
        let res = await userService.getPrivacyPolicy(); // Replace with actual API call
        // console.log(res);
        setPrivacyPolicyContent(res.data.data.desc);
      } catch (error) {
        console.error("Failed to load privacy policy:", error);
      }
    }

    fetchPrivacyPolicy();
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-sm border-0 rounded-lg">
            <div className="card-body p-5">
              {/* Header */}
              <div className="text-center mb-4">
                <h1 className="font-weight-bold">Privacy Policy</h1>
                <p className="text-muted">Last updated: April 5, 2025</p>
              </div>

              {/* Render CKEditor Content */}
              <div
                className="ckeditor-output"
                dangerouslySetInnerHTML={{ __html: privacyPolicyContent }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
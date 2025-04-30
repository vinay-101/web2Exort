import React, { useEffect, useState } from 'react';
import userService from '../Services/userServices';

const TermCondition = () => {
  const [termCondition, setTermCondition] = useState("");

  useEffect(() => {
    async function getTermCondition() {
      let res = await userService.getTermCondition();
      setTermCondition(res.data.data.desc);
    }
    getTermCondition();
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-sm border-0 rounded-lg">
            <div className="card-body p-5">
              {/* Header */}
              <div className="text-center mb-4">
                <h1 className="font-weight-bold">Terms and Conditions</h1>
                <p className="text-muted">Last updated: April 5, 2025</p>
              </div>

              {/* Render CKEditor Content */}
              <div
                className="ckeditor-output"
                dangerouslySetInnerHTML={{ __html: termCondition }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          background-color: #fff;
        }

        .ckeditor-output h2 {
          margin-top: 2rem;
          font-size: 1.5rem;
          color: #2c3e50;
          border-bottom: 2px solid #eee;
          padding-bottom: 0.5rem;
        }

        .ckeditor-output h3 {
          margin-top: 1.5rem;
          font-size: 1.25rem;
          color: #34495e;
        }

        .ckeditor-output p {
          line-height: 1.7;
          color: #34495e;
        }

        .ckeditor-output ul,
        .ckeditor-output ol {
          padding-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .ckeditor-output li {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </div>
  );
};

export default TermCondition;
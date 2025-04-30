import React, { useEffect, useState } from 'react';
import userService from '../Services/userServices';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const result = await userService.getAboutUs();
        console.log("result",result.data.data);
        setAboutData(result.data.data);
      } catch (err) {
        setError(err.message || 'Failed to load about us data');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger py-5">Error: {error}</div>;
  }

  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center justify-content-center">
          {/* Image Section */}
          {aboutData.image && (
            <div className="col-md-5 mb-4 mb-md-0 text-center">
              <img
                src={'http://localhost:5000/' + aboutData.image}
                alt="About Us"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          )}

          {/* Text Content */}
          <div className={`${aboutData.image ? 'col-md-7' : 'col-12'} ps-lg-5`}>
            <h2 className="font-weight-bold mb-3">{aboutData.title}</h2>
            <div
              className="about-content"
              dangerouslySetInnerHTML={{ __html: aboutData.about }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-content h2,
        .about-content h3 {
          margin-top: 1.5rem;
          font-weight: 600;
          color: #333;
        }

        .about-content p {
          line-height: 1.7;
          color: #555;
        }

        .about-content ul,
        .about-content ol {
          padding-left: 1.5rem;
          margin-top: 0.5rem;
        }

        .about-content li {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </>
  );
};

export default About;
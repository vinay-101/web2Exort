import React, { useEffect, useState } from "react";
import userService from "../Services/userServices";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await userService.getTestimonial();
        setTestimonials(res.data.data);
      } catch (err) {
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading testimonials...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>;
  }

  // Truncate function that strips HTML to plain text before truncating
  const truncateText = (html, maxLength) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";
    return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText;
  };

  return (
    <section style={{
      padding: "4rem 2rem",
      backgroundColor: "#f8f9fa",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div className="container">
        <h2 style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "3rem",
          textAlign: "center",
          color: "#212529"
        }}>
          What Our Clients Say
        </h2>

        <div className="row justify-content-center">
          {testimonials.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease"
              }}>

                {/* Media Section */}
                {item.image && (
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "200px"
                  }}>
                    {(() => {
                      const isMP4 = item.image.endsWith(".mp4");
                      const isWEBM = item.image.endsWith(".webm");

                      if (isMP4 || isWEBM) {
                        return (
                          <video
                            controls
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover"
                            }}
                          >
                            <source
                              src={'http://localhost:5000/' + item.image}
                              type={isMP4 ? "video/mp4" : "video/webm"}
                            />
                            Your browser does not support the video tag.
                          </video>
                        );
                      } else {
                        return (
                          <img
                            src={'http://localhost:5000/' + item.image}
                            alt="Testimonial"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover"
                            }}
                          />
                        );
                      }
                    })()}
                  </div>
                )}

                {/* Content Section */}
                <div style={{
                  padding: "1.5rem"
                }}>
                  {item.title && (
                    <h4 style={{
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                      color: "#343a40"
                    }}>
                      {item.title}
                    </h4>
                  )}

                  {item.desc && (
                    <ExpandableText text={item.desc} maxLength={120} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Expandable Text Component
const ExpandableText = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded ? text : truncateText(text, maxLength);

  return (
    <div style={{
      lineHeight: "1.7",
      color: "#555",
      fontSize: "0.95rem"
    }}>
      <div dangerouslySetInnerHTML={{ __html: displayText }} />

      {text.length > maxLength && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            marginTop: "0.5rem",
            fontWeight: "500",
            textDecoration: "underline"
          }}
        >
          {isExpanded ? "Show Less" : "See More"}
        </button>
      )}
    </div>
  );
};

// Helper Function to truncate HTML content
const truncateText = (html, maxLength) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const plainText = tempDiv.textContent || tempDiv.innerText || "";
  return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText;
};

export default Testimonials;
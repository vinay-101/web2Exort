import React, { useEffect, useState } from "react";
import userService from "../Services/userServices";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await userService.getFaq();
        setFaqs(res.data.data);
      } catch (err) {
        setError("Failed to load FAQs.");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading FAQs...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>;
  }

  // Reusable inline styles
  const cardStyle = {
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease',
  };

  const hoverCardStyle = {
    ...cardStyle,
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  };

  const cardHeaderStyle = {
    backgroundColor: '#f8f9fa',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    cursor: 'pointer',
  };

  const btnLinkStyle = {
    textDecoration: 'none',
    color: '#212529',
    fontSize: '1.1rem',
    width: '100%',
    display: 'block',
    padding: '1rem 1.5rem',
    position: 'relative',
    transition: 'background 0.3s ease',
  };

  const btnLinkHoverStyle = {
    ...btnLinkStyle,
    color: '#007bff',
    backgroundColor: '#e9ecef',
  };

  const iconStyle = {
    transition: 'transform 0.3s ease',
  };

  const rotatedIconStyle = {
    ...iconStyle,
    transform: 'rotate(-180deg)',
  };

  const cardBodyStyle = {
    lineHeight: '1.6',
    color: '#555',
    padding: '1rem 1.5rem 1.5rem',
  };

  const headingStyle = {
    marginTop: '1rem',
    fontSize: '1.2rem',
    color: '#333',
  };

  const listStyle = {
    paddingLeft: '1.3rem',
    marginTop: '0.5rem',
  };

  const listItemStyle = {
    marginBottom: '0.5rem',
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            Frequently Asked Questions
          </h2>

          <div id="faqAccordion" style={{ width: '100%' }}>
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="card border-0 mb-3"
                style={hoverCardStyle}
                onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)')}
                onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)')}
              >
                <div
                  className="card-header bg-white p-0 border-0"
                  style={cardHeaderStyle}
                  id={`faqHeading${faq.id}`}
                >
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link w-100 text-left d-flex justify-content-between align-items-center text-dark font-weight-bold"
                      data-toggle="collapse"
                      data-target={`#faqCollapse${faq.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`faqCollapse${faq.id}`}
                      style={btnLinkStyle}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = '#e9ecef')
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = 'transparent')
                      }
                    >
                      {faq.heading || "Untitled Question"}
                      <span>
                        <i
                          className="fa fa-chevron-down small"
                          style={
                            document
                              ?.querySelector(
                                `[data-target='#faqCollapse${faq.id}']`
                              )
                              ?.getAttribute('aria-expanded') === 'true'
                              ? rotatedIconStyle
                              : iconStyle
                          }
                        ></i>
                      </span>
                    </button>
                  </h5>
                </div>
                <div
                  id={`faqCollapse${faq.id}`}
                  className={`collapse ${index === 0 ? "show" : ""}`}
                  aria-labelledby={`faqHeading${faq.id}`}
                  data-parent="#faqAccordion"
                >
                  <div
                    className="card-body pt-0"
                    style={cardBodyStyle}
                    dangerouslySetInnerHTML={{ __html: faq.desc }}
                    // Add inline styles for rendered HTML content
                    onLoad={(e) => {
                      const el = e.target;
                      Array.from(el.getElementsByTagName('h3')).forEach(h => h.setAttribute('style', `margin-top:1rem; font-size:1.2rem; color:#333;`));
                      Array.from(el.getElementsByTagName('h4')).forEach(h => h.setAttribute('style', `margin-top:1rem; font-size:1.1rem; color:#444;`));
                      Array.from(el.getElementsByTagName('ul')).forEach(h => h.setAttribute('style', `padding-left:1.3rem; margin-top:0.5rem;`));
                      Array.from(el.getElementsByTagName('ol')).forEach(h => h.setAttribute('style', `padding-left:1.3rem; margin-top:0.5rem;`));
                      Array.from(el.getElementsByTagName('li')).forEach(h => h.setAttribute('style', `margin-bottom:0.5rem;`));
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
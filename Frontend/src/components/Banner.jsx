import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import productService from "../Services/productService";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDebug, setShowDebug] = useState(false);
  const [rawData, setRawData] = useState(null);

  const defaultBanners = [
    {
      id: 1,
      title: "Web To Export",
      desc: "Connect with global buyers and suppliers to expand your business internationally.",
      file: "images/sliders/1.jpg",
    },
    {
      id: 2,
      title: "Discover New Markets",
      desc: "Find opportunities for your products and services in emerging markets worldwide.",
      file: "images/sliders/2.jpg",
    },
  ];

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        const response = await productService.fetchBanners();
        setRawData(response.data);
        if (
          response &&
          response.data &&
          response.data.success &&
          response.data.data
        ) {
          const bannerData = Array.isArray(response.data.data)
            ? response.data.data
            : [response.data.data];
          const filteredBanners = bannerData.filter(
            (banner) => banner && banner.type === "Banner"
          );
          setBanners(filteredBanners.length > 0 ? filteredBanners : defaultBanners);
        } else {
          setBanners(defaultBanners);
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
        setError("Failed to load banner data");
        setBanners(defaultBanners);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  const getImageUrl = (file) => {
    if (!file) return "/images/sliders/1.jpg";
    const baseUrl = "http://localhost:5000";
    return `${baseUrl}/${file}`;
  };

  const toggleDebug = () => {
    setShowDebug(!showDebug);
  };

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100%",
        margin: "0",
        padding: "0",
        position: "relative",
      }}
    >
      {showDebug && (
        <div
          style={{
            position: "fixed",
            top: "50px",
            right: "10px",
            zIndex: 1000,
            background: "rgba(0,0,0,0.85)",
            color: "#ffffff",
            padding: "20px",
            maxWidth: "500px",
            maxHeight: "80vh",
            overflow: "auto",
            borderRadius: "8px",
            fontSize: "0.9rem",
          }}
        >
          <h4>Raw API Response:</h4>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "12px" }}>
            {JSON.stringify(rawData, null, 2)}
          </pre>
          <h4>Processed Banners:</h4>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "12px" }}>
            {JSON.stringify(banners, null, 2)}
          </pre>
          {banners.map((banner, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #444",
                paddingBottom: "10px",
              }}
            >
              <h5>Banner {index + 1}</h5>
              <p>
                <strong>ID:</strong> {banner.id}
              </p>
              <p>
                <strong>Title:</strong> {banner.title}
              </p>
              <p>
                <strong>File:</strong> {banner.file}
              </p>
              <p>
                <strong>Image URL:</strong> {getImageUrl(banner.file)}
              </p>
              <p>
                <strong>Type:</strong> {banner.type}
              </p>
              <img
                src={getImageUrl(banner.file)}
                alt={`Banner ${index + 1}`}
                style={{
                  maxWidth: "100%",
                  marginTop: "10px",
                  border: "1px solid #666",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div
                style={{
                  display: "none",
                  padding: "10px",
                  background: "#500",
                  color: "#fff",
                  marginTop: "10px",
                }}
              >
                Image failed to load!
              </div>
            </div>
          ))}
        </div>
      )}

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "600px",
            color: "#ffffff",
            background: "#333",
            fontSize: "1.5rem",
          }}
        >
          Loading...
        </div>
      ) : error ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "600px",
            color: "#ffffff",
            background: "#333",
            fontSize: "1.5rem",
          }}
        >
          {error}
        </div>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={banners.length > 1}
          style={{ width: "100%", height: "100%" }}
        >
          {banners.map((banner) => {
            const imageUrl = getImageUrl(banner.file);
            return (
              <SwiperSlide key={banner.id || Math.random()}>
                <div
                  style={{
                    position: "relative",
                    minHeight: "70vh",
                    height: "600px",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  {/* Banner Image */}
                  <img
                    src={imageUrl}
                    alt={banner.title || "Banner"}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    onError={(e) => {
                      e.target.src = "/images/sliders/1.jpg";
                    }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default Banner;
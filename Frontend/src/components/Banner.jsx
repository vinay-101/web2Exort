import '../assets/style.css'

const Banner = () => {
  return (
    <div className="web_banner">
    <div className="web_banner-overlay" />
    <div className="web_banner-content">
      <div className="product_s">
        <h2 className="title">Web To Export</h2>
        <p style={{ color: "#fff" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          laboriosam quaerat, rem ipsa recusandae id laborum ipsam facere vitae
          asperiores harum eveniet illo ducimus hic deleniti? Deserunt repellendus
          a rem.
        </p>
        <div className="searchcontainer">
          <input
            type="text"
            id="box"
            placeholder="Search anything..."
            className="search__box"
          />
          <button className="btn btn-sm" style={{background:"#1467c1"}}>
            <i style={{color:"white"}} className="fa fa-search" />
          </button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Banner

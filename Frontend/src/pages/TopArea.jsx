// import "../assets/style.scss"
import "../assets/style.css";
import "../assets/Js/profile.js"
import TopHeader from '../components/TopHeader'
import Banner from '../components/Banner'

const TopArea = () => {
  return (
    <div className="top-area-wrapper">
      <div style={{ marginBottom: 0, padding: 0 }}>
        <TopHeader/>
      </div>
      <Banner />
    </div>
  )
}

export default TopArea

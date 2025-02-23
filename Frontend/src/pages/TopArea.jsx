// import "../assets/style.scss"
import "../assets/style.css";
import "../assets/Js/profile.js"
import TopHeader from '../components/TopHeader'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
const TopArea = () => {
  return (
    <div>
      <TopHeader/>
      <Navbar/>
      <Banner />
    </div>
  )
}

export default TopArea

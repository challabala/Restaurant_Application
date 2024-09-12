import React from 'react'
import BannerBackground from "../Images/background-image1.jpeg"
import Chef from './Chef'
import { FiArrowRight } from 'react-icons/fi'
import Navbar from '../Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menu from './Menu';
import ExploreMenu from '../Components/ExploreMenu'
import Footer from './Footer'
import Custumer from './Custumer'
import TableReserve from './TableReserve'
import Menubuttons from './Menubuttons'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home-container container-fluid'>
<Navbar></Navbar>
<div className='home-banner-container'>
  <div className='home-bannerImage-container'>
      {/*<img src={"https://tse2.mm.bing.net/th?id=OIP.p9SP3Xf63P2fE2xlbnVXtwHaEo&pid=Api&P=0&h=180"}></img>*/}
  </div>
  <div className='home-text-section'>
    <h1 className='primary-heading'>
    Delicious Food For You ❤️
    </h1>
    <p className='primary-text'>
      Fresh Food is Waiting For You
    </p>
    <div className='d-flex justify-content-evenly'>
    
    <Link to={"/fooddetails"}><button className='secondary-button ms-1'>Order Now <FiArrowRight/></button></Link>
    <Link to={"/menubuttons1"}><button className='secondary-button m-1'>For Veg </button></Link>
    <Link to={"/menubuttons2"}><button className='secondary-button m-1'>For Non-Veg </button></Link>
    
   
    </div>
  </div>
  <div className='home-image-container'>
    <img src={"https://wallpapercave.com/wp/wp9465718.jpg"}></img>
  </div>

</div>
    <ExploreMenu/>
    <Menu/>
    <TableReserve/>
    <div className='mt-4'>
    <Chef/>
    </div>
    <Custumer/>
    <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import 'bootstrap/dist/css/bootstrap.min.css';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from "../Images/logo.jpeg"
import "../Css/footer.css"
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className='mt-2'>
        <div className='footer1'>
            
            <Link to="/"><img className='images' src={logo}></img></Link>
            <h3 className='text1'>For better experience,download <br></br>the <span className='text-danger'>Red</span> Cliff app now</h3>
            
            <a href="https://www.playstore.com" target="_blank" rel="noopener noreferrer" className='links'>
                        
            <img className="image"src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png'></img>
                    </a>
            <img className="image"src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png'></img>
        </div>
        <div className='footer2'>
        
            <ul className='rows'>
                <h2 ><span className='text-danger'>Red</span> Cliff</h2>
                <p>© 2024 Bundl Technologies<br></br> Pvt. Ltd</p>
                <div>
                    <h4>Connect with us</h4>
                    <hr></hr>
                    <div className='d-flex justify-content-evenly'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='links'>
                        <FacebookIcon /> 
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='links'>
                        <XIcon/>
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className='links'>
                        <WhatsAppIcon/>
                    </a>
        
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='links'>
                        <YouTubeIcon/>
                    </a>
                       
                       
                        
                        
                        
                    </div>
                </div>
            </ul>
            <ul className='rows1'>
                <h3>Company</h3>
                <Link to="/about"><p className='about1'>About</p></Link>
                
                <p>Careers</p>
                <p>Team</p>
                <p>Swiggy One</p>
                <p>Swiggy Instamart</p>
                <p>Swiggy Genie</p>
                
            </ul>
            <ul className='rows1'>
                <h3>Contact us</h3>
                <Link to="/contactdetails"><p className='about1'>Help & Support</p></Link>
                
                <p>Partner with us</p>
                <p>Ride with us</p>
                <div className='rows2'>
                    <h3>Legal</h3>
                    <p>Terms & Conditions</p>
                    <p>Cookie Policy</p>
                    <p>Privacy Policy</p>
                    <p>Investor Relations</p>
                </div>
                
            </ul>
            <ul className='rows1'>
                <h3>We deliver to:</h3>
                <p>Banglore</p>
                <p>Gurgaon</p>
                <p>Hyderabad</p>
                <p>Delhi</p>
                <p>Mumbai</p>
                <p>Pune</p>
            
                
            </ul>
            

        </div>

    </div>
  )
}

export default Footer
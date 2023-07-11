import React from 'react';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
           <Link to = "" ><InstagramIcon/></Link> 
           <Link to = "https://www.facebook.com/profile.php?id=100081088095350" ><FacebookIcon/></Link> 
           <Link to = "" ><TwitterIcon/></Link> 
           <Link to = "" ><LinkedInIcon/></Link> 
           {/* <InstagramIcon/> 
           <FacebookIcon/> 
           <TwitterIcon/> 
           <LinkedInIcon/>  */}
           <p> &copy; 2023 yakupizza.com</p>
        </div>
    </div>
  )
}

export default Footer;

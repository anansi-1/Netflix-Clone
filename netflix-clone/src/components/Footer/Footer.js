import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";


function Footer() {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer_icons">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data">
         
            <ul>
         
              <li>Audio Description</li>
              <li>Gift Cards</li>
              <li>Investor Relations</li>
            </ul>
            <ul>
         
              <li>Terms of Use</li>
              <li>Legal Notices</li>
              <li>Corporate Information</li>
            </ul>
            <ul>
         
              <li>Help Center </li>
              <li>Media Center</li>
              <li>Jobs</li>
            </ul>
            <ul>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Contact Us</li>
            </ul>
        
        </div>
        <div className="service-code">
        <div>Serivce Code</div></div>
        <div className="copyright">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
}
export default Footer;

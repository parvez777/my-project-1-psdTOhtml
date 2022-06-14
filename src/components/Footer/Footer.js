import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Container } from "@mui/system";
import Logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={Logo} alt="" style={{ width: "200px" }} />
          </div>
          <div className="footer-menu">
            <p>Menu</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Gallery</p>
            <p>About</p>
          </div>
          <div className="social-sites">
            <FacebookIcon sx={{color: "#fff", fontSize: "35px", margin: "0 15px", cursor: "pointer"}} />
            <InstagramIcon sx={{color: "#fff", fontSize: "35px", margin: "0 15px", cursor: "pointer"}} />
            <TwitterIcon sx={{color: "#fff", fontSize: "35px", margin: "0 15px", cursor: "pointer"}} />
            <YouTubeIcon sx={{color: "#fff", fontSize: "35px", margin: "0 15px", cursor: "pointer"}} />
            <PinterestIcon sx={{color: "#fff", fontSize: "35px", margin: "0 15px", cursor: "pointer"}} />
          </div>
          <div className="copyRight">
            <p>All Rights Reserved @ Mahmud Parvez.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

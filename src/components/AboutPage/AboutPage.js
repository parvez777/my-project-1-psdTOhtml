import CoffeeIcon from '@mui/icons-material/Coffee';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Avatar, Container } from "@mui/material";
import { Link } from "react-router-dom";
import aboutIMG from "./aboutImg/2.jpg";
import "./AboutPage.css";
import Avatar1 from './avatar/1.jpg';
import Avatar2 from './avatar/2.png';
import Avatar3 from './avatar/3.jpg';
import Avatar4 from './avatar/5.jpg';
import BrandLogo1 from './brandLogo/1.png';

const AboutPage = () => {
  return (
    <div>
      <div className="aboutHero">
        <h1>About Us</h1>
        <div className="abMenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* =====================
      aboutOurResturant 
      =======================*/}
      <Container className="aboutOurResturant">
        <div className="aboutResturant">
          <div className="img">
            <img src={aboutIMG} alt="Resturent" />
          </div>
          <div className="aboutContent">
            <h1>About Our Resturant</h1>
            <h2>
              <span>______</span> We offer the best indian dishes in a <br />{" "}
              friendly and calm atmosphere
            </h2>
            <p style={{ padding: "20px 100px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quis veritatis numquam corporis modi atque voluptatem, voluptas
              dolorum officiis quas consequatur! Delectus incidunt iure quo,
              dolores nobis aperiam distinctio reiciendis commodi earum dolore
              totam ducimus fugiat iusto. Consequatur doloremque magnam, laborum
              reprehenderit magni, ex excepturi vel itaque, amet perspiciatis
              aperiam!
            </p>
          </div>
        </div>
      </Container>
      {/* =====================
      aboutOurResturant 
      =======================*/}
      <Container className="whyChooseUs">
        <h1 style={{ textAlign: "center" }}>Why People Choose Us</h1>
        <div className="chooseUs">
          <div className="chooseUsContent">
            <div className="chooseUsIcon"><LocalDrinkIcon sx={{fontSize: "70px"}}/></div>
            <div className="chooseContent">
              <h3>Friendly Teame</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="chooseUsContent">
            <div className="chooseUsIcon"><LocalDiningIcon sx={{fontSize: "70px"}}/></div>
            <div className="chooseContent">
              <h3>Fresh Food</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="chooseUsContent">
            <div className="chooseUsIcon"><CoffeeIcon sx={{fontSize: "70px"}}/></div>
            <div className="chooseContent">
              <h3>Quality Cuisine</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="chooseUs">
          <div className="chooseUsContent">
            <div className="chooseUsIcon"><DinnerDiningIcon sx={{fontSize: "70px"}}/></div>
            <div className="chooseContent">
              <h3>Best Services</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="chooseUsContent">
            <div className="chooseUsIcon"><RestaurantIcon sx={{fontSize: "70px"}}/></div>
            <div className="chooseContent">
              <h3>Diverse Menu</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="chooseUsContent">
            <div className="chooseUsIcon"><FastfoodIcon sx={{fontSize: "70px"}}/></div>
            <div className="chooseContent">
              <h3>Affortable Price</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </Container>
{/* Testimonilas Section */}
      <div className="testimonials">
        <Container className='testimonialsContent'>
<h1>Testimonials</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed enim accusantium eaque commodi ex a excepturi cupiditate incidunt accusamus, aliquam similique iusto quibusdam officia tempore?</p>

<p><strong>Jimmy Curter</strong></p>

<div className="testimonialsAvatar">
<Avatar alt="Remy Sharp" src={Avatar1}  sx={{height: "50px", width: "50px"}}/>
<Avatar alt="Travis Howard" src={Avatar2}   sx={{height: "50px", width: "50px"}}/>
<Avatar alt="Cindy Baker" src={Avatar3}  sx={{height: "50px", width: "50px"}}/>
<Avatar alt="Cindy Baker" src={Avatar4}  sx={{height: "50px", width: "50px"}}/>
</div>
        </Container>
      </div>
       {/*==============
       ================
        */}
      <Container className='ourBrand'>
        <h1>Our Brand</h1>
<div className="brandLogo">
  <img src={BrandLogo1} alt="Brand Logo" />
  <img src={BrandLogo1} alt="Brand Logo" />
  <img src={BrandLogo1} alt="Brand Logo" />
  <img src={BrandLogo1} alt="Brand Logo" />
</div>
      </Container>
    </div>
  );
};

export default AboutPage;

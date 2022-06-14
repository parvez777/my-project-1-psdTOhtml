import { Container } from '@mui/material';
import Food1 from '../../pd-images/food-1.jpg';
import Food2 from '../../pd-images/food-2.jpg';
import Food3 from '../../pd-images/food-3.png';
import './FeaturedOffer.css';
const FeaturedOffer = () => {
    return (
       <Container>
        <div className="FeaturedOffer">
            <div className="title">
                <h1 style={{textAlign: "center", padding: "20px 0"}}>Featured Offers</h1>
                <p style={{textAlign: "center"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Inventore atque recusandae amet, necessitatibus veritatis expedita!</p>
            </div>
            <div className="featured">
            <div className="featuredContent">
               <img src={Food1} alt="" />
               <h2>Burger</h2>
                <p>$8</p>
            </div>
            <div className="featuredContent">
                <img src={Food2} alt="" />
                <h2>French Fry</h2>
                <p>$13</p>
            </div>
            <div className="featuredContent">
                <img src={Food3} alt="" />
                <h2>Kabab</h2>
                <p>$4</p>
            </div>
            </div>
        </div>
       </Container>
    );
};

export default FeaturedOffer;
import { Container } from '@mui/material';
import AboutImg from '../../images/chef.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <Container>
            <div className="aboutUs">
                <div className="img">
                    <img src={AboutImg} alt="img" />
                </div>
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore illo vero itaque nesciunt inventore aliquam mollitia. Expedita asperiores hic, inventore quasi ad exercitationem dolores quia distinctio accusantium! Natus, culpa esse.</p>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;
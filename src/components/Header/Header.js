
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Container>
        <div className="header">
             <div className="logo">
                 <Link to="/"><img src={Logo} alt="Img" /></Link>
             </div>
             <div className="menu">
                 <ul>
                     <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/typography">Typography</Link>
                        <Link to="/contact">Contact</Link>
                     </li>
                 </ul>
             </div  >
             <div className="menu">
             <Link to="/signup-signin">Login</Link>
             </div>
        </div>
        </Container>
    );
};

export default Header;
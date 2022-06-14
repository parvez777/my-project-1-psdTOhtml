import { Container } from '@mui/material';
import './ResturantMenu.css';

const ResturantMenu = () => {
    return (
        <Container>
            <div className="resturant">
                <div className="rm-title">
                    <h1>Our Resturant Menu</h1>
                </div>
                <div className="rm-menu">
                    <ul>
                        <li>
                            <p>Mains</p>
                            <p>Deserd</p>
                            <p>Drinks</p>
                        </li>
                    </ul>
                </div>
                <div className="rm-content">
                    <div className="rm-menu-content">
                    <strong>$25.89</strong>
                    <h2>Osso Buco</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum vero tenetur culpa dolores, recusandae facere eos cum in qui sequi.
                    </p>
                    </div>
                    <div className="rm-menu-content">
                    <strong>$16.89</strong>
                    <h2>Pappardelle Mimmo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum vero tenetur culpa dolores, recusandae facere eos cum in qui sequi.
                    </p>
                    </div>
                    <div className="rm-menu-content">
                    <strong>$17.89</strong>
                    <h2>Trippa Satriano</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum vero tenetur culpa dolores, recusandae facere eos cum in qui sequi.
                    </p>
                    </div>
                    <div className="rm-menu-content">
                    <strong>$1.89</strong>
                    <h2>Filetto Di Manzo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum vero tenetur culpa dolores, recusandae facere eos cum in qui sequi.
                    </p>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default ResturantMenu;
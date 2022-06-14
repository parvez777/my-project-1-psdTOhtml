import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero'>
            <div className="content">
                <h1>Welcome</h1>
                <hr />
                <p>Our resturant offers full-service dining with breathtaking views <br /> seen from our indoor covered patio and our outdoor sundeck.</p>
            </div>
            <div className="searchBox">
                <div className="search-content">
                    <label htmlFor="">Name</label> <br />
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className="search-content">
                    <label htmlFor="">Phone</label> <br />
                    <input type="text" placeholder='Your Phone Number' />
                </div>
                <div className="search-content">
                    <label htmlFor="">Date</label> <br />
                    <input type="date" placeholder='Your Name' />
                </div>
                <div className="search-content">
                    <label htmlFor="">No, Off People</label> <br />
                    <input type="number" defaultValue={"2"} />
                </div>
                <div className="search-content">
                    <button className='checkBtn'>Check Availbelity</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
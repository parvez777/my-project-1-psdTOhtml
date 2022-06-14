import AboutUs from '../AboutUs/AboutUs';
import Blog from '../Blog/Blog';
import FeaturedOffer from '../FeaturedOffer/FeaturedOffer';
import Gallery from '../Gallery/Gallery';
import HeroSection from '../HeroSection/HeroSection';
import ResturantMenu from '../ResturantMenu/ResturantMenu';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <FeaturedOffer />
      <ResturantMenu />
      <Gallery />
      <Blog />
    </div>
  );
};

export default Home;

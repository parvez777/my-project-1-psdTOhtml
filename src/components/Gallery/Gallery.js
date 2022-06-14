import Pd2 from "../../pd-images/pd-2.jpg";
import Pd3 from "../../pd-images/pd-image-5.jpg";
import Pd1 from "../../pd-images/pd-image-6.jpg";

import PdB1 from '../../pd-images/pd-1.jpg';
import PdB2 from '../../pd-images/pd-image-3.jpg';
import PdB3 from '../../pd-images/pd-image-4.jpg';
import PdB4 from '../../pd-images/pd-image-7.jpg';
import "./Gallery.css";
const Gallery = () => {
  return (
    <div className="gallery">
      <div className="top-gallery">
        <div className="top">
          <img className="img" src={Pd1} alt=""  />
        </div>
        <div className="top">
          <img className="img" src={Pd2} alt="" />
        </div>
        <div className="top">
          <img className="img" src={Pd3} alt="" />
        </div>
      </div>
      <div className="bottom-gallery">
        <div className="bottom">
            <div className="bottom1">
                <div className="b-gallery-1">
                    <img src={PdB1} alt="" />
                </div>
                <div className="b-gallery-1">
                    <img src={PdB2} alt="" />
                </div>
            </div>
            <div className="bottom1">
                <div className="b-gallery-1">
                    <img src={PdB3} alt="" />
                </div>
                <div className="b-gallery-1">
                    <img src={PdB4} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

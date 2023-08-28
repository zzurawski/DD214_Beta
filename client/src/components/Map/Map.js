//ad space
import {React, useState, useEffect} from "react";
import "../Styles/ad.css";

export default function AdSpace() {
    /*const ImageCarousel = ({ images, interval }) => {
        const [currentImage, setCurrentImage] = useState(0);
      
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
          }, interval);
      
          return () => clearInterval(timer);
        }, [images.length, interval]);
      
        return (
          <div className="carousel">
            <img src={images[currentImage]} alt="carousel" />
          </div>
        );
      };

        const images = [
            'what_a_whopper_ad-1287061739.jpg',
            'baby+monkey+hd+wallpaper-3092427377.jpg'
        ];*/

  

    return (
        <div className="ad-container">
          <div className="ad2"  >
            <a href="https://livingincle.com">
            <img alt="chris" src={require('./NEOHOMEs.png')} />
            </a>
          </div>
          <div className="ad2">
            <a href="mailto:zsquaredwebdesign@gmail.com">
            <img alt="zach" src={require('./zsquared web logo[636]-1.png')}/></a>
          </div>
          <div className="ad2">
            <a href="https://printmuse.us/">
            <img alt="colton" src={require('./printmuse.png')} />
            </a>
          </div>
          <div className="ad2">
            <a href="https://jvcocc.org">
              <img alt="jvcocc" src={require('./JVCOCC.png')} />
            </a>
          </div>
        </div>
    );
}
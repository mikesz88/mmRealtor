import React, { useState, useEffect, useRef } from "react";
import "./Listings.css";

const images = ["img1", "img2", "img3", "img4", "img5"];
const delay = 5000;

const Listings = React.forwardRef((props, ref) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div id="component" className='listings next' ref={ref}>
      <div className='slideshow-container'>
        <div className='listing-slides'>
          <div className={`slide ${images[index]}`}>
            <div className="portfolio-btn-wrapper">
              <h2>Listings</h2>
              <h2>Portfolio</h2>
              <a href="www.portfolio.com" className='portfolio-btn'>
                View Michael's Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Listings;

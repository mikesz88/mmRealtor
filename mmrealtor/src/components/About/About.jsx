import {useRef, useEffect} from 'react'
import './About.css'

const paragraph1 = 'I am a Power Agent. Every move I make is to win the deal for my clients. I pride myself in providing the the smoothest real estate experience possible, with the absolute best results, no excuses. I am a Price Expert with the ability to walk into any home or property and know its true value. My high-level negotiating skills, marketing strategies, and solid business fundamentals raise the bar for professionalism in the industry, which has led to multiple sales records in Beverly Hills, Brentwood, The Sunset Strip, and Westwood.'
const paragraph2 = 'As a 13-year veteran agent in Southern California, I cover all of LA and the Coastal Orange County Luxury Market. I proudly represent some of the most significant homes and people in the world. My relationships are everything, and my hustle is only outshined by my passion for doing what I love.'

export default function About() {
  const slide1 = useRef(null);
  const slide2 = useRef(null);
  const slide3 = useRef(null);
  const button = useRef(null);

  const slides = [slide1, slide2, slide3]
  
  let current = Math.floor(Math.random() * slides.length);
  let next = current < slides.length - 1 ? current + 1 : 0 ;
  let prev = current > 0 ? current - 1 : slides.length - 1 ;

  const update = () => {
    slides.forEach((slide) => {
      console.log(slide);
      slide.current.classList.remove('active', 'prev', 'next');
    })
    slides[current].current.classList.add('active');
    slides[prev].current.classList.add('prev');
    slides[next].current.classList.add('next');
  };

  const goToNum = (number) => {
    current = number;
    next = current < slides.length - 1 ? current + 1 : 0 ;
    prev = current > 0 ? current - 1 : slides.length - 1 ;
    update();
  };

  const goToNext = () => current < slides.length - 1 ? goToNum(current + 1) : goToNum(0) ;

  
  useEffect(() => {
    // update();
  });

  return (
    <div className='about component'>
      <div className='about-top'>
        <div className="about-title">
          <h2>About</h2>
          <h2>Alexandre</h2>
        </div>
        <div className='testimonial-wrapper'>
          <div className='testimonial active' ref={slide1}>
            <p>"The bar has been raised for service and results in the LA luxury real estate business. Alexandre is on ANULEVEL!"</p>
            <p>- David M.</p>
          </div>
          <div className='testimonial next' ref={slide2}>
            <p>"I've closed over 50 real estate transactions and my buying experience with Alexandre was the most enjoyable by a wide margin."</p>
            <p>- Robert H.</p>
          </div>
          <div className='testimonial prev' ref={slide3}>
            <p>"Alexandre is deeply connected in LA and was able to sell my property discreetly off market for an incredible price."</p>
            <p>- Sophie J.</p>
          </div>
          <div className='testimonial-arrow' ref={button} onClick={() => goToNext()}></div>
        </div>
      </div>
      <div className='about-bottom'>
        <h3>Real Estate, Real Smooth</h3>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    </div>
  );
}
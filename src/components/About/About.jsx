import React, { useRef } from 'react'
import './About.css'

const paragraph1 = 'I am a Power Agent. Every move I make is to win the deal for my clients. I pride myself in providing the the smoothest real estate experience possible, with the absolute best results, no excuses. I am a Price Expert with the ability to walk into any home or property and know its true value. My high-level negotiating skills, marketing strategies, and solid business fundamentals raise the bar for professionalism in the industry.'
const paragraph2 = 'As a Veteran of the United States Marine Corps, I take great pride in providing my clients with these three main characteristics: Honor, Courage, and Commitment! My hustle is only outshined by my passion for doing what I love. I cover all of Texas and the Dallas/Fort Worth residential and commercial markets. My dedication to my clients unparalleled.'

const About = React.forwardRef((props, ref) => {
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

  return (
    <div id='component' className='about' ref={ref}>
      <div className='about-top'>
        <div className="about-title">
          <h2>About</h2>
          <h2>Michael</h2>
        </div>
        <div className='testimonial-wrapper'>
          <div className='testimonial active' ref={slide1}>
            <p>"My business had last-minute demands that only Michael could have handled. Our success is thanks to him."</p>
            <p>- Steve B.</p>
          </div>
          <div className='testimonial next' ref={slide2}>
            <p>"I've closed over 50 real estate deals and my buying experience with Michael was the most enjoyable by a wide margin."</p>
            <p>- Robert H.</p>
          </div>
          <div className='testimonial prev' ref={slide3}>
            <p>"Michael is deeply connected in Dallas and was able to sell my property discreetly off market for an incredible price."</p>
            <p>- Sophie J.</p>
          </div>
          <div className='testimonial-arrow' ref={button} onClick={() => goToNext()}></div>
        </div>
      </div>
      <div className='about-bottom'>
        <h3>Client Focused. Results Driven.</h3>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    </div>
  );
})

export default About
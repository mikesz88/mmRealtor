import React from 'react'
import './Highlights.css'
import intro from '../../assets/intro-photo.jpg'
import couch from '../../assets/couch.jpg'
import glasses from '../../assets/glasses.jpg'
import room from '../../assets/room.jpg'
import media1 from '../../assets/video-thumb.jpg'
import media2 from '../../assets/press1.jpg'
import media3 from '../../assets/press2.jpg'
import report1 from '../../assets/elliman-report.pdf'
import report2 from '../../assets/the-wealth-report-2019.pdf'
import play from '../../assets/play-btn.png'

const review = `“ My clients love me because I'm a winner. I bring comfort and clarity into an immensely competitive and demanding LA market. This allows for confident decisions, which in turn builds trust, relationships, and ultimately the best results. ”`

const Highlights = React.forwardRef((props, ref) => {

  return (
    <div id='component' className='highlights' ref={ref}>
      <div className="video-link">
        <a href="video.com">
          <img className='play-btn' src={play} alt="Play Button" />
          <img src={intro} alt="" />
        </a>
      </div>
      <div className='highlight-title'>
        <h2>Anulifestyle</h2>
        <h2>Highlights</h2>
      </div>
      <div className='couch-wrapper'>
        <img src={couch} alt="couch" />
      </div>
      <div className='glasses-wrapper'>
        <img src={glasses} alt="glasses" />
      </div>
      <div className='review-wrapper'>
        <p>{review}</p>
        <img src={room} alt="Luxury Living Room" />
      </div>
      <div className='media-wrapper'>
        <h3>Media/Press</h3>
        <div className='press-media'>
          <a href='www.video.com' >
            <img className='play-btn' src={play} alt="Play Button" />
            <img src={media1} alt="press video" />
          </a>
          <a href={report1} ><img src={media2} alt="Elliman Q2 2019" /></a>
          <a href={report2} ><img src={media3} alt="The Wealth Report" /></a>
        </div>
      </div>
    </div>
  );
})

export default Highlights;
import React from 'react'
import './Contact.css'
import brokerLogo from '../../assets/broker-logo.webp'

const Contact = React.forwardRef((props, ref) => {

  return (
    <div id='component' className='connect prev' ref={ref} >
      <div className="connect-title">
        <h2>Connect</h2>
        <h2>With Me</h2>
      </div>
      <div className='connect-content'>
        <div className='a-list'>
          <h3>Join The A-List</h3>
          <p>For your residential and commercial real estate needs or if you would simply like to learn more about my services.<br></br>I look forward to speaking with you.</p>
        </div>
        <form action='https://getform.io/f/f4f356a9-583e-4114-a7e4-e13a1e7d7594' method='POST'>
          <div className='connect-input'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' required/>
          </div>
          <div className='connect-input'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' required/>
          </div>
          <div className='connect-input'>
            <label htmlFor="message">Message</label>
            <textarea name='message' cols='40' rows='1'></textarea>
          </div>
          <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
          <input className='submit-btn' name='submit' type="submit" value='Join the A-List'/>
        </form>
      </div>
      <div className='brokerage'>
        <img src={brokerLogo} alt="Brokerage" />
      </div>
    </div>
  );
})

export default Contact;
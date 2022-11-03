import React from 'react'
import './Contact.css'
import brokerLogo from '../../assets/broker-logo.webp'

const Contact = React.forwardRef((props, ref) => {

  return (
    <div id='component' className='connect prev' ref={ref} >
      <div className="connect-title">
        <h2>Connect</h2>
        <h2>With Us</h2>
      </div>
      <div className='connect-content'>
        <div className='a-list'>
          <h3>The A-List</h3>
          <p>The best new luxury listings and development opportunities in Dallas, handpicked by Michael, delivered to your inbox.</p>
        </div>
        <form action='https://getform.io/f/b47dbf93-e859-451e-b499-03b454e6cd13' method='POST'>
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
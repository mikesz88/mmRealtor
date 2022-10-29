import React from 'react'
import './Connect.css'

function Connect() {

  return (
    <div className='connect component'>
      <div className="connect-title">
        <h2>Connect</h2>
        <h2>With Us</h2>
      </div>
      <div className='connect-content'>
        <div className='a-list'>
          <h3>The A-List</h3>
          <p>The best new luxury listings and development opportunities in LA, handpicked by Alexandre, delivered to your inbox.</p>
        </div>
        <form>
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
          <input className='submit-btn' type="submit" value='Join the A-List'/>
        </form>
      </div>
    </div>
  );
}

export default Connect;
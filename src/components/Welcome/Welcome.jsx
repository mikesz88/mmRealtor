import React from "react";
import "./Welcome.css";
import brokerLogo from '../../assets/broker-logo.webp'

const Welcome = React.forwardRef((props, ref) => {
  return (
    <div id="component" className='welcome active' ref={ref}>
      <div className="name-header">
        <h1>Honor Courage Commitment</h1>
        <h1>Michael N. Martinez II</h1>
      </div>
      <div className='brokerage'>
        <img src={brokerLogo} alt="Brokerage" />
      </div>
      <div className="trecContainer">
        <span>
          <a className="trecColor"  href="https://www.rogershealy.com/TREC_Consumer_Protection_Notice" target="_blank" rel="noopener noreferrer">TREC Consumer Protection Notice</a></span>
        <span><a className="trecColor" href="https://www.rogershealy.com/TREC_Information_About_Brokerage_Services" target="_blank" rel="noopener noreferrer">TREC Information About Brokerage Services</a></span>
      </div>
    </div>
  );
});

export default Welcome;
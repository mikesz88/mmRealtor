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
    </div>
  );
});

export default Welcome;
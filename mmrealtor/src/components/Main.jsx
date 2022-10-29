import React from "react";
import './Main.css'
import Nav from "./Nav/Nav";
import Welcome from "./Welcome/Welcome";
import Listings from "./Listings/Listings";
import Highlights from "./Highlights/Highlights";
import About from "./About/About";
import Connect from "./Connect/Connect";

const checkoutRoutes = [
  "Welcome",
  "Listings",
  "Highlights",
  "About",
  "Connect",
];

class Main extends React.Component {
  state = {
    routeIndex: 0,
  }

  changeRoute = (index) => {
    this.setState({ routeIndex: index }) 
  };

  render() {
    const checkoutRoute = checkoutRoutes[this.state.routeIndex];
    return (
      <div className='main' ref={this.myRef} onScroll={() => console.log('your mom')}>
        <Nav changeRoute={this.changeRoute} />
        {checkoutRoute === "Welcome" && 
          <Welcome changeRoute={this.changeRoute} />}
        {checkoutRoute === "Listings" && 
          <Listings changeRoute={this.changeRoute} />}
        {checkoutRoute === "Highlights" && 
          <Highlights changeRoute={this.changeRoute} />}
        {checkoutRoute === "About" && 
          <About changeRoute={this.changeRoute} />}
        {checkoutRoute === "Connect" && 
          <Connect changeRoute={this.changeRoute} />}
          {/* <Welcome/>
          <Listings/>
          <Highlights/>
          <About />
          <Connect/> */}
      </div>
    );
  }
}

export default Main;

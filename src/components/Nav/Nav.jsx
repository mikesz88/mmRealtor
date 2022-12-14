import React from "react";
import "./Nav.css";
import logo from "../../assets/logo-dark.png";

const checkoutRoutes = [
  "WELCOME",
  "LISTINGS",
  "SERVICES",
  "ABOUT",
  "CONTACT",
];

class Nav extends React.Component {
  state = {
    navOpen: false,
    matches: window.matchMedia("(min-width: 990px)").matches, 
    position: 'WELCOME',
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 990px)").addEventListener('change', handler);
  }

  render() {
    let scrollerClass = 'nav-menu-indicator pos-1';
    let socialClass = 'socials';
    let mobileMenuClass = 'mobile-menu-btn';
    let hideNav = 'nav-menu';
    this.state.navOpen === false ? mobileMenuClass = 'mobile-menu-btn' 
      : mobileMenuClass = 'mobile-menu-btn open'

    this.state.matches ? hideNav = 'nav-menu' 
    : !this.state.matches && this.state.navOpen === true ? hideNav = 'nav-menu' 
    : hideNav = 'nav-menu hidden' 
        
    const handleMenuOpen = () => {
      this.state.navOpen === false ? this.setState({navOpen: true}) : this.setState({navOpen: false})
    }

    const handleClassClick = (e) => {
      const navButtons = Array.from(document.getElementsByClassName('nav-page'));
      navButtons.forEach((element) => {
        element.classList.remove('active')
      });
      e.currentTarget.classList.add('active');
      this.setState({ position: e.currentTarget.innerText})
      const position = checkoutRoutes.indexOf(e.currentTarget.innerText)
      this.props.changeRoute(position)
      this.setState({navOpen: false})
    }

    let e = this.props.index;
    e === 0 ? scrollerClass = 'nav-menu-indicator pos-1'
    : e === 1 ? scrollerClass = 'nav-menu-indicator pos-2'
    : e === 2 ? scrollerClass = 'nav-menu-indicator pos-3'
    : e === 3 ? scrollerClass = 'nav-menu-indicator pos-4'
    : scrollerClass = 'nav-menu-indicator pos-5'

    e === 3 ? socialClass = 'socials about-page' : socialClass = 'socials';

    return (
      <div className='header'>
        <div className='nav'>
          <div className='black-bar'></div>
          <div className='main-logo'>
            <img src={logo} alt='' />
          </div>
          <div className={mobileMenuClass} onClick={() => handleMenuOpen()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='scroll-navigation'>
            <ul className={hideNav}>
              <li className='nav-page active' onClick={(e) => handleClassClick(e)}>WELCOME</li>
              <li className='nav-page' onClick={(e) => handleClassClick(e)}>LISTINGS</li>
              <li className='nav-page' onClick={(e) => handleClassClick(e)}>SERVICES</li>
              <li className='nav-page' onClick={(e) => handleClassClick(e)}>ABOUT</li>
              <li className='nav-page' onClick={(e) => handleClassClick(e)}>CONTACT</li>
            </ul>
            <div className={scrollerClass}></div>
          </div>
        </div>
        <div className={socialClass}>
          <ul>
            <li>
              <a
                href='https://www.instagram.com/hcc_realty_llc/'
                target='_blank'
                className='instagram'
                rel='noreferrer'
              >
                <span className='hidden'>instagram</span>
              </a>
            </li>
            <li>
              <a
                href='https://www.facebook.com/michael.martinez.9887117'
                target='_blank'
                className='facebook'
                rel='noreferrer'
              >
                <span className='hidden'>facebook</span>
              </a>
            </li>
            {/* <li>
              <a
                href='https://www.youtube.com/channel/UCgF4ubclHpA87g8fZ_Zn2jw'
                target='_blank'
                className='youtube'
                rel='noreferrer'
              >
                <span className='hidden'>youtube</span>
              </a>
            </li> */}
            <li>
              <a
                href='mailto:michael@rhacommercial.com'
                target='_blank'
                className='email'
                rel='noreferrer'
              >
                <span className='hidden'>email</span>
              </a>
            </li>
            <li>
              <a
                href='tel:2148821065'
                target='_blank'
                className='phone'
                rel='noreferrer'
              >
                <span className='hidden'>phone</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;

import React, {useRef, useState} from "react";
import './Main.css'
import Nav from "./Nav/Nav";
import Welcome from "./Welcome/Welcome";
import Listings from "./Listings/Listings";
import Services from "./Services/Services";
import About from "./About/About";
import Contact from "./Contact/Contact";

export default function Main() {
  const [routeIndex, setRouteIndex] = useState(0);

  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);

  const pages = [page1, page2, page3, page4, page5]
  
  let active = 0;
  let next = active < pages.length - 1 ? active + 1 : 0 ;
  let prev = active > 0 ? active - 1 : pages.length - 1 ;

  const update = () => {
    console.log(pages);
    pages.forEach((page) => {
      page.current.classList.remove('active', 'prev', 'next');
    })
    pages[active].current.classList.add('active');
    pages[prev].current.classList.add('prev');
    pages[next].current.classList.add('next');
  };

  const goToNum = (number) => {
    active = number;
    next = active < pages.length - 1 ? active + 1 : 0 ;
    prev = active > 0 ? active - 1 : pages.length - 1 ;
    update();
    setRouteIndex(active)
  };

  const goToPrev = () => {
    active > 0 ? goToNum(active - 1) : goToNum(active.length - 1);
  }

  const goToNext = () => {
    active < pages.length - 1 ? goToNum(active + 1) : goToNum(0);
  }

  const changeRoute = (index) => {
    goToNum(index)
  };

  const handleScroll = (event) => {
    event.currentTarget.scrollTop > 0 ? goToNext() : goToPrev()
  }
  
  return (
    <div className='main' onScroll={(e) => handleScroll(e)}>
      <Nav changeRoute={changeRoute} index={routeIndex}/>
      <Welcome ref={page1}/>
      <Listings ref={page2}/>
      <Services ref={page3}/>
      <About ref={page4}/>
      <Contact ref={page5}/>
    </div>
  );
}
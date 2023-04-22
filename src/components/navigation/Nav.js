import { useState, useEffect, useRef } from "react";
import "./Nav.css";



function Nav() {
  const [ home, setHome ] = useState('/Home')

  const setHomeFunction = () => { 
    let newHome = '';
    for (let i=0;i<home.length; i++ ) {
      const random = getRandomChar();
     newHome += random;
    }
    console.log(newHome)
    setHome(newHome)
  }

  const getRandomChar = () => {
    const chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-/@#$%^&*()<>{}[]|';
    let num = Math.floor(Math.random() * chars.length);
    return chars[num]
  }


  let numOfLoops = 0;

  const firstLoop = () => {
    setTimeout(() => {
      setHomeFunction();
      numOfLoops++;
      if (numOfLoops < 10) {
        firstLoop();
      } else {
        secondLoop()
      } 
    }, 100)
  }


  let secNumOfLoops = 0;

  const secondLoop = () => {
    setTimeout(() => {
      setHomeback();
      secNumOfLoops++;
      if (secNumOfLoops < 5) {
        secondLoop();
      } else {
        console.log('done')
      } 
    }, 100)
  }

  let count = useRef(0);

  const setHomeback = () => {
    let newHome = '';

    if (count.current === 4) {
      newHome += '/Home'
    } 
    else if (count.current === 3) {
      newHome += '/Hom';
      count.current++;
      const random4 = getRandomChar();
      newHome += random4;
    } 
    else if (count.current === 2) {
      newHome += '/Ho';
      count.current++;
      for (let i=0;i<2;i++) {
        const random3 = getRandomChar();
        newHome += random3;
      }
    } 
    else if (count.current === 1) {
      newHome += '/H';
      count.current++;
      for (let i=0;i<3;i++) {
        const random2 = getRandomChar();
        newHome += random2;
      }
    } 
    else if (count.current === 0) {
      newHome += '/';
      count.current++;
      for (let i=0;i<4;i++) {
        const random1 = getRandomChar();
        newHome += random1;
      }
    }
    setHome(newHome)
  }


  const fillerFunction = (a, b) => {
    return (a + b)
  }

  let pageLoaded = useRef(false);
  
  useEffect (() => {
    if (pageLoaded.current === false) {
        firstLoop();
      pageLoaded.current = true
    } else if (pageLoaded.current === true) {
      fillerFunction(1, 2)
    }
  })


    return ( 
      <nav className="w-full h-200px flex justify-center font-mono text-xl">
        <div className="inline-flex cursor-pointer">
          <a href="#Home" className="m-10 p-5 box">{ home }</a>
          <a href="#About" className="m-10 p-5 box">/About</a>
          <a href="#Projects" className="m-10 p-5 box">/Projects</a>
          <a href="#Contact" className="m-10 p-5 box">/Contact</a>
        </div>
      </nav> 
    );
  }
  
  export default Nav;
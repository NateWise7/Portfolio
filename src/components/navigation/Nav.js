import React from "react";
import "./Nav.css";
import MatrixEffect from "../effects/MatrixEffect";


function Nav() {
    return ( 
      <nav className="w-full h-200px flex justify-center font-mono text-xl">
        <div className="inline-flex cursor-pointer">
          <a href="#Home" className="m-10 p-5 box">
              <MatrixEffect str='/Home' num={10} />
          </a>
          <a href="#About" className="m-10 p-5 box">
            <MatrixEffect str='/About' num={15} />
          </a>
          <a href="#Projects" className="m-10 p-5 box">
            <MatrixEffect str='/Projects' num={21} />
          </a>
          <a href="#Contact" className="m-10 p-5 box">
            <MatrixEffect str='/Contact' num={30} />
            </a>
        </div>
      </nav> 
    );
  }
  
  export default Nav;
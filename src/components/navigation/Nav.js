import { useState, useEffect } from "react";
import "./Nav.css";
import MatrixEffect from "../effects/MatrixEffect";


function Nav() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 450;

    return ( 
            <>
              {isMobile ? (
      <nav className="w-full h-200px flex justify-left font-mono text-xl">
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <a className="dropdownContentHover" href="#Home">/Home</a>
            <a className="" href="#About">/About</a>
            <a className="" href="#Projects">/Projects</a>
            <a className="" href="#Projects">/Contact</a>
          </div>
        </div>
      </nav>
      ) : (
      <nav className="nav w-full flex justify-center font-mono text-xl">
        <div className="nav-width navContainer inline-flex cursor-pointer ">
          <a href="#Home" className="button p-5 lg:m-10 md:mx-5 md:my-10 sm:mx-1 sm:my-10 sm:text-sm md:text-xl">
            <MatrixEffect str='<Home>' num={10} />
          </a>
          <a href="#About" className="button p-5 lg:m-10 md:mx-5 md:my-10 sm:mx-1 sm:my-10 sm:text-sm md:text-xl">
            <MatrixEffect str='<About>' num={15} />
          </a>
          <a href="#Projects" className="button p-5 lg:m-10 md:mx-5 md:my-10 sm:mx-1 sm:my-10 sm:text-sm md:text-xl">
            <MatrixEffect str='<Projects>' num={21} />
          </a>
          <a href="#Contact" className="button p-5 lg:m-10 md:mx-5 md:my-10 sm:mx-1 sm:my-10 sm:text-sm md:text-xl">
            <MatrixEffect str='<Contact>' num={30} />
            </a>
        </div>
        </nav>

      )}
      </>
    );
  }
  
  export default Nav;
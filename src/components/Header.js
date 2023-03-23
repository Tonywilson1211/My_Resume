import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
        <div className="main-info">
            <h1>Anthony Wilson</h1>
            <h2>Junior Software Developer</h2>
            <Typed
            className="typed-text"
            strings={["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Python"]}
            typeSpeed={40}
            backSpeed={40}
            loop
            />
            <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <a class="navbar-brand" href="#">Anthony Wilson</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item" id="cv">
                        <a className="nav-link" href="#">Download CV</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
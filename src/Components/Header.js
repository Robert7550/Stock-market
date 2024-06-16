import React, { useState } from "react";
import './Header.css'



const Header = () => {

    const [navebar, setNavebar] = useState("header-list")
    const NavebarHandler = () => {
        navebar === 'header-list'
        ? setNavebar("header-list active")
        : setNavebar("header-list");
    }


    
    return (
        <>

            <div className="header">

                <div className="angle-right">

                    <i className= "fa-solid fa-angle-right" ></i>

                </div>


            <h1 className="header-name">Hello, <span>Robert</span></h1> 
            <p>Thusday, February 15</p>

                <ul className= {navebar} >

                    <li><a href="#"><i class="fa-solid fa-compass icon1"></i><span className="span">For you</span></a></li>
                    <li><a href="#"><i class="fa-solid fa-tv icon1"></i><span className="span">Screener</span></a></li>
                    <li><a href="#"><i class="fa-solid fa-magnifying-glass icon1"></i></a></li>

                    <li className="icon"><a href="#"><i class="fa-solid fa-file-import icon1"></i></a></li>

                </ul>

            </div>

            <div onClick={NavebarHandler} className="angle-down">

                <i className= { navebar ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"} ></i>

            </div>
            
        </>
    )
}

export default Header;
import React, { useState    } from "react";
import './SideBar.css'



const SideBar = () => {

    const [navebar, setNavebar] = useState("header-list")
    const [sidebar, setSideBar] = useState("side-bar")
    const [icon, seticon] = useState("fa-solid fa-angle-down")


    const NavebarHandler = () => {
        navebar === 'header-list'
        ? setNavebar("header-list active")
        : setNavebar("header-list");
    }


    const SidebarHandler = () => {
        sidebar === "side-bar"
        ? setSideBar("side-bar active")
        : setSideBar("side-bar");
    }


    const IconChangeHandler = () => {
        icon === "fa-solid fa-angle-down"
        ? seticon("fa-solid fa-angle-up")
        : seticon("fa-solid fa-angle-down")
    }






        return (
            <>


                {/* header Section */}


                <div className="header">

                    <div className="angle-right" onClick={SidebarHandler}>

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

                    <div onClick={NavebarHandler} className="angle-down">

                        <i className= {icon}  onClick={IconChangeHandler}></i>

                    </div>

                    
                </div>

                {/* <div onClick={NavebarHandler} className="angle-down">

                    <i className= {icon}  onClick={IconChangeHandler}></i>

                </div> */}
                    



                <div className= "side-panel" >

                    <div className=  {sidebar} >

                        <i class="fa-solid fa-angle-left" onClick={SidebarHandler}></i>

                        <ul className= "sidebar-icons">
                            <li><a href="#"><i class="fa-solid fa-house icon"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-magnifying-glass icon"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-readme icon"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-bookmark icon"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-gear icon"></i></a></li>
                        </ul>

                    </div>

                </div>

            </>

            
        )
}


export default SideBar;
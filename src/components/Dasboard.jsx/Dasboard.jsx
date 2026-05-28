import { RiMenuUnfoldLine } from "react-icons/ri";
// import axios from "axios";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import "./Dashboard.css"
// import Api from "../API/Api";
import { IoMdClose } from "react-icons/io";


function Dashboard({ children }) {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div style={{ display: "flex", height: "100vh", }} className="mobile-p">
                <p className="menu-mobile"><RiMenuUnfoldLine style={{ fontSize: "26px" }} onClick={() => setOpen(!open)} /></p>
                {open ? <div className="sidebar-mobile" style={{ zIndex: 999 }}>
                    <IoMdClose className="menu-close" onClick={() => setOpen(!open)} />
                    <Aside />
                </div> : ""}
                <div className="sidebar" style={{ zIndex: 999 }}>
                    <Aside />
                </div>
                <div className="newmain">
                    <div className="">
                        <Header />
                    </div>

                    <div className="newcontent">
                        <Outlet />
                    </div>

                </div>
            </div>

        </>
    );
}

export default Dashboard;
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
// import Profile from '../Profile';
import img from "../Dasboard.jsx/image/rssm.png"


function Header() {

    const [user, setUser] = useState()

    useEffect(() => {
        const saveuser = JSON.parse(localStorage.getItem("nspl"));
        setUser(saveuser);
    }, []);

    return (
        <>
            <div className="header" style={{ width: "98%", height: "65px", padding: "10px 11px", position: "sticky", top: "0" }}>
                <div className="logo">
                    <Link to={"/"} style={{ color: "white" }}><h2>RSSM PG COLLEGE</h2></Link>
                    <span>Management System</span>
                </div>
                <div style={{ display: "none" }} className='logoImg'>
                    <Link to={"/"}><img src={img} alt="" /></Link>
                </div>
                <button className="headerbtn" style={{ width: "15%", }}>{user?.name}</button>

            </div>
        </>
    )
}

export default Header
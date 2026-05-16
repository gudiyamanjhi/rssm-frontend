import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Rssm from "../Dasboard.jsx/image/rssm.png"
import "./Dashboard.css"

function Aside() {


    const nav = useNavigate()
    function logout() {
        localStorage.removeItem("nsplAuth")
        nav("/login")
    }
    return (
        <>
            <div>
                <div className='image'>
                    <Link to={"/"}> <img src={Rssm} width={"100%"} /></Link>
                </div>
                <ul className='too'>

                    <li><Link to={"/"} >Dashboard</Link></li>
                    <li><Link to={"profile"} >Profile</Link></li>
                    <li><Link to={"teachers"} >Teachers</Link></li>
                    <li><Link to={"/student"} >Student</Link></li>
                    <li><Link to={"/teacherReg"} >Teachers Form</Link></li>
                    <li><Link to={"/studentform"}>Student Form</Link></li>
                </ul>
            </div>,
            <div className='outs'>
                <button onClick={logout}>Logout</button>
            </div>
            {/* </div> */}

        </>
    )
}

export default Aside
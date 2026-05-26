import { RiMenuUnfoldLine } from "react-icons/ri";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import "./Dashboard.css"
import Api from "../API/Api";
import { IoMdClose } from "react-icons/io";


function Dashboard({ children }) {
    // const [allStudents, setAllStudents] = useState([])
    // const [BCA, setBCA] = useState({})
    // const [MCA, setMCA] = useState({})
    // const [BA, setBA] = useState({})
    // const [BCOM, setBCOM] = useState({})
    // const [MCOM, setMCOM] = useState({})

    async function getStudents() {
        await Api.get("/student/allStudents").then((res) => {
            console.log(res.data.user)
            // setAllStudents(res.data.user)
            // const students = res.data.user
            // const bcaStudents = students.filter((item) => item.className == "BCA")
            // setBCA(bcaStudents)
            // const mcaStudents = students.filter((item) => item.className == "MCA")
            // setMCA(mcaStudents)
            // const baStudents = students.filter((item) => item.className == "BA")
            // setMCA(baStudents)
            // const bcomStudents = students.filter((item) => item.className == "BCOM")
            // setMCA(bcomStudents)
            // const mcomStudents = students.filter((item) => item.className == "MCOM")
            // setMCA(mcomStudents)
            // const totalStudents = allStudents.length
        });
    };


    useEffect(() => {
        getStudents()
    }, [])

    const [open, setOpen] = useState(false)

    return (
        <>
            <div style={{ display: "flex", height: "100vh", }} className="mobile-p">
                <p className="menu-mobile"><RiMenuUnfoldLine style={{ fontSize: "26px" }} onClick={() => setOpen(!open)} /></p>
                {open ? <div className="sidebar-mobile" style={{ zIndex: 999 }}>
                    <IoMdClose className="menu-close" onClick={()=>setOpen(!open)}/>
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
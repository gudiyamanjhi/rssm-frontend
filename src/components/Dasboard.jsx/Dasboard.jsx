import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import "./Dashboard.css"


function Dashboard({ children }) {
    const [allStudents, setAllStudents] = useState([])
    const [BCA, setBCA] = useState({})
    const [MCA, setMCA] = useState({})
    const [BA, setBA] = useState({})
    const [BCOM, setBCOM] = useState({})
    const [MCOM, setMCOM] = useState({})

    async function getStudents() {
        const res = await axios.get("http://localhost:8000/student/allStudents").then((res) => {
            console.log(res.data.user)
            setAllStudents(res.data.user)
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



    return (
        <>
            <div style={{ display: "flex", height: "100vh", }}>
                <div className="sidebar" style={{zIndex:999}}>
                    <Aside />
                </div>

                <div className="newmain">
                    <div className="newheader">
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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import { Link,Navigate } from "react-router-dom";


function Student() {
    const [allStudents, setAllStudents] = useState([])
    const [BCA, setBCA] = useState({})
    const [MCA, setMCA] = useState({})
    const [BA, setBA] = useState({})
    const [BBA, setBBA] = useState({})
    const [LLB, setLLB] = useState({})


    //  const nav = useNavigate()

    async function getStudents() {
        const res = await axios.get("http://localhost:8000/student/allStudents").then((res) => {
            console.log(res.data.user)
            setAllStudents(res.data.user)
            const students = res.data.user
            const bcaStudents = students.filter((item) => item.className == "BCA")
            setBCA(bcaStudents)
            const mcaStudents = students.filter((item) => item.className == "MCA")
            setMCA(mcaStudents)
            const baStudents = students.filter((item) => item.className == "BA")
            setMCA(baStudents)
            const bbaStudents = students.filter((item) => item.className == "BBA")
            setMCA(bbaStudents)
             const llbStudents = students.filter((item) => item.className == "LLB")
            setMCA(llbStudents)
            const totalStudents = allStudents.length
        });
    };


    // function logout(){
    //     localStorage.removeItem("nsplAuth")
    //     nav("/login")
    // }

    useEffect(() => {
        getStudents()
    }, [])



    return (
        <div className="dashboard">
            <div className="stats1">
                
                <div className="card">
                    <p>MCA student</p>
                    <h2>{MCA.length}</h2>
                </div>

                <div className="card">
                    <p>BCA student</p>
                    <h2>{BCA.length}</h2>
                </div>

                <div className="card">
                    <p>BA Students</p>
                    <h2>{allStudents.length}</h2>
                </div>

            </div>

            <div className="stats1">
                <div className="card">
                    <p> LLB student</p>
                    <h2>{LLB.length}</h2>
                </div>

                <div className="card">
                    <p> BBA student</p>
                    <h2>{BBA.length}</h2>
                </div>

                <div className="card">
                    <p>Total Students</p>
                    <h2>{allStudents.length}</h2>
                </div>
            </div>


            {/* FILTERS */}
            <div className="filters">
                <Link to="/studentform"><button className="add-btn">+ Add Student</button></Link>
            </div>



            {/* TABLE */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last name</th>
                            <th>Class</th>
                            <th>Duration</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>About</th>

                        </tr>
                    </thead>

                    <tbody>
                        {allStudents && allStudents.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.className}</td>
                                        <td>{item.duration} </td>
                                        <td>{item.mobileno}</td>
                                        <td>{item.email}</td>
                                        <td className="eye"><Link to={`/studentDetail/${item._id}`}> 👁</Link></td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
        // </div>

    );
}

export default Student;
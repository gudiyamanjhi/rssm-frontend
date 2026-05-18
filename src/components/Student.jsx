import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { Link,Navigate } from "react-router-dom";


function Student() {
    const [allStudents, setAllStudents] = useState([])

    async function getStudents() {
        await axios.get("http://localhost:8000/student/allStudents").then((res) => {
            console.log(res.data.user)
            setAllStudents(res.data.user)
        });
    };

    useEffect(() => {
        getStudents()
    })


    return (
        <div className="dashboard">
            <div className="stats1">
                <div className="card">
                    <p>MCA student</p>
                </div>
                <div className="card">
                    <p>BCA student</p>
                </div>
                <div className="card">
                    <p>BA Students</p>
                    <h2>{allStudents.length}</h2>
                </div>

            </div>

            <div className="stats1">
                <div className="card">
                    <p> LLB student</p>
                </div>

                <div className="card">
                    <p> BBA student</p>
                </div>

                <div className="card">
                    <p>Total Students</p>
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
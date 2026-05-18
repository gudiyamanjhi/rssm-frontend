import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { Link,Navigate } from "react-router-dom";


function Teachers() {
    const [allTeachers, setAllTeachers] = useState([])

    async function getTeacher() {
        await axios.get("http://localhost:8000/teacher/allTeachers").then((res) => {
            console.log(res.data.user)
            setAllTeachers(res.data.user)
        });
    };




    useEffect(() => {
        getTeacher()
    })



    return (
        <div className="dashboard">
           
            {/* FILTERS */}
            <div className="filters">
                <Link to="/teacherform"><button className="add-btn">+ Add Teacher</button></Link>
            </div>


            {/* TABLE */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last name</th>
                            <th> contact</th>
                            <th>Email</th>
                            <th>Qualification</th>

                        </tr>
                    </thead>

                    <tbody>
                        {allTeachers && allTeachers.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.contact} </td>
                                        <td>{item.email}</td>
                                        <td>{item.experience}</td>

                                        <td className="eye"><Link to={`/teacherDetails/${item._id}`}> 👁</Link></td>
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

export default Teachers;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { Link,Navigate } from "react-router-dom";


function Teachers() {
    const [allTeachers, setAllTeachers] = useState([])
    // const [MA, setBCA] = useState({})
    // const [MSC, setMCA] = useState({})
    // const [MBA, setBA] = useState({})
    // const [, setBBA] = useState({})
    // const [LLB, setLLB] = useState({})


    //  const nav = useNavigate()

    async function getTeacher() {
        const res = await axios.get("http://localhost:8000/teacher/allTeachers").then((res) => {
            console.log(res.data.user)
            setAllTeachers(res.data.user)
        });
    };




    useEffect(() => {
        getTeacher()
    }, [])



    return (
        <div className="dashboard">
             {/* <div className="stats1">
                
                <div className="card">
                    <p>MCA Teacher</p>
                    <h2>{MA.length}</h2>
                </div>

                <div className="card">
                    <p>MSC Teacher</p>
                    <h2>{MSC.length}</h2>
                </div>

                <div className="card">
                    <p>MBA Teachers</p>
                    <h2>{MBA.length}</h2>
                </div>

            </div>

            <div className="stats1">
                <div className="card">
                    <p> LLB Teachers</p>
                    <h2>{LLB.length}</h2>
                </div>

                <div className="card">
                    <p> BBA Teachers</p>
                    <h2>{BBA.length}</h2>
                </div>

                <div className="card">
                    <p>Total Teachers</p>
                    <h2>{allTeachers.length}</h2>
                </div>
            </div> */}


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
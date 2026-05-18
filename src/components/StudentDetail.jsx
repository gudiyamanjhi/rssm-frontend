import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Update from "./Auther/Update"
import Update from "./Update";


const StudentDetail = () => {

    const Navigate = useNavigate()
    const { id } = useParams()
    console.log(id)
    let [detailstudent, setdetailStudent] = useState({})
    console.log(detailstudent)

    const [updata, setUpdate] = useState(null)

    async function getStudents() {
        const res = await axios.get("http://localhost:8000/student/allStudents")
        console.log(res.data.user)
        const studentData = res.data.user
        const findStudent = await studentData.find((item) => item._id === id)
        setdetailStudent(findStudent)
        console.log(findStudent)
    }

    useEffect(() => {
        getStudents();
    })

    async function deletestudent(id) {
        const res = await axios.delete(`http://localhost:8000/student/deleteStudent/${id}`)
        if (res.data.status) {
            Navigate("/")
        }
    }

    return (
        <>
            <div className="student-container">
                <div className="student-card">

                    {/* Left Profile Section */}
                    <div className="profile-section">
                        <img
                            src={`data:image/;base64,${btoa(
                                String.fromCharCode(
                                    ...new Uint8Array(detailstudent?.image?.data?.data || "")
                                )
                            )}`}
                            alt="profile"
                            className="profile-img"
                        />

                        <h2>
                            {detailstudent?.firstname} {detailstudent?.lastname}
                        </h2>


                    </div>

                    {/* Right Details Section */}
                    <div className="info-section">

                        <h2 className="title">Student Details</h2>

                        <div className="details-grid">

                            <div className="info-box">
                                <span>Father Name</span>
                                <p>{detailstudent?.fathername}</p>
                            </div>

                            <div className="info-box">
                                <span>Mother Name</span>
                                <p>{detailstudent?.mothername}</p>
                            </div>

                            <div className="info-box">
                                <span>Age</span>
                                <p>{detailstudent?.Age}</p>
                            </div>

                            <div className="info-box">
                                <span>Class</span>
                                <p>{detailstudent?.className}</p>
                            </div>

                            <div className="info-box">
                                <span>Duration</span>
                                <p>{detailstudent?.duration}</p>
                            </div>

                            <div className="info-box">
                                <span>Email</span>
                                <p>{detailstudent?.email}</p>
                            </div>

                            <div className="info-box">
                                <span>Mobile</span>
                                <p>{detailstudent?.mobileno}</p>
                            </div>

                            <div className="info-box">
                                <span>Gender</span>
                                <p>{detailstudent?.gender}</p>
                            </div>


                            <div className="info-box">
                                <span>State</span>
                                <p>{detailstudent?.State}</p>
                            </div>
                            <div className="info-box">
                                <span>className</span>
                                <p>{detailstudent?.className}</p>
                            </div>
                            <div className="info-box full-width">
                                <span>Address</span>
                                <p>{detailstudent?.address}</p>
                            </div>



                        </div>

                        {/* Buttons */}
                        <div className="button-group">

                            <button
                                className="update-btn"
                                onClick={() => setUpdate(true)}
                            >
                                Update
                            </button>

                            {
                                updata === true
                                    ? <Update
                                        detailstudent={detailstudent}
                                        setUpdate={setUpdate}
                                    />
                                    : (
                                        <button
                                            className="delete-btn"
                                            onClick={() => deletestudent(detailstudent?._id)}
                                        >
                                            Delete
                                        </button>
                                    )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default StudentDetail
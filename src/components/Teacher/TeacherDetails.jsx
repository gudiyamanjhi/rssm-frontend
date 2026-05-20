// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UpdateTeacher from "./UpdateTeacher";
import Api from "../API/Api";


const TeacherDetails = () => {

    const Navigate = useNavigate()
    const { id } = useParams()
    let [detailteacher, setdetailTeacher] = useState({})
    console.log(detailteacher)

    const [updateTeacher, setUpdateTeacher] = useState(null)


    async function getTeachers() {
        const res = await Api.get("/teacher/allTeachers")
        console.log(res.data.user)
        const teacherData = res.data.user
        const findTeacher = await teacherData.find((item) => item._id === id)
        setdetailTeacher(findTeacher)
        console.log(findTeacher)
    }

    useEffect(() => {
        getTeachers();
    })

    async function deleteteacher(id) {
        const res = await Api.delete(`/teacher/deleteTeacher/${id}`)
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
                            src={
                                detailteacher?.image?.data?.data
                                    ? `data:image/jpeg;base64,${btoa(
                                        String.fromCharCode(
                                            ...new Uint8Array(detailteacher.image.data.data)
                                        )
                                    )}`
                                    : ""
                            }
                            alt="profile"
                            className="profile-img"
                        />

                        <h2>
                            {detailteacher?.firstname} {detailteacher?.lastname}
                        </h2>


                    </div>

                    {/* Right Details Section */}
                    <div className="info-section">

                        <h2 className="title">Teacher Details</h2>

                        <div className="details-grid">

                            <div className="info-box">
                                <span>Father Name</span>
                                <p>{detailteacher?.fathername}</p>
                            </div>

                            <div className="info-box">
                                <span>Mother Name</span>
                                <p>{detailteacher?.mothername}</p>
                            </div>

                            <div className="info-box">
                                <span>Age</span>
                                <p>{detailteacher?.age}</p>
                            </div>

                            <div className="info-box">
                                <span> Email</span>
                                <p>{detailteacher?.email}</p>
                            </div>

                            <div className="info-box">
                                <span>contact</span>
                                <p>{detailteacher?.contact}</p>
                            </div>

                            <div className="info-box">
                                <span>Qualification</span>
                                <p>{detailteacher?.Qualification}</p>
                            </div>

                            <div className="info-box">
                                <span> experience</span>
                                <p>{detailteacher?.experience}</p>
                            </div>



                        </div>
                        {/* Buttons */}
                        <div className="button-group">

                            <button
                                className="update-btn"
                                onClick={() => setUpdateTeacher(true)}
                            >
                                Update
                            </button>

                            {
                                updateTeacher === true
                                    ? <UpdateTeacher
                                        detailteacher={detailteacher}
                                        setUpdateTeacher={setUpdateTeacher}
                                    />
                                    : (
                                        <button
                                            className="delete-btn"
                                            onClick={() => deleteteacher(detailteacher?._id)}
                                        >
                                            Delete
                                        </button>
                                    )
                            }

                        </div>                    </div>
                </div>
            </div>

        </>
    )

}
export default TeacherDetails;
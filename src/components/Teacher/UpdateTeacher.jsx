import axios from "axios";
import React, { useState, useEffect, } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { useEffect, useState } from "react";

function UpdateTeacher({ detailteacher, setUpdateTeacher }) {

    const [image, setImage] = useState()
    const [teacher, setTeacherForm] = useState()
    console.log(detailteacher)

    const [firstname, setFirstName] = useState(detailteacher?.firstname)
    console.log(firstname)
    const [lastname, setLastName] = useState(detailteacher?.lastname)
    const [fathername, setFatherName] = useState(detailteacher?.fathername)
    const [mothername, setMotherName] = useState(detailteacher?.mothername)
    const [email, setEmail] = useState(detailteacher?.email)
    const [age, setAge] = useState(detailteacher?.age)
    const [contact, setContact] = useState(detailteacher?.contact)

    const handleChange = (e) => {
        setTeacherForm({ ...teacher, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        const id = detailteacher?._id
        e.preventDefault();
        const res = await axios.post(`http://localhost:8000/teacher/updateTeacher/${id}`, {
            firstname, lastname, email, fathername, mothername, age, contact,
        }).then((res) => {
            console.log(res)

        })


    };

   
    return (
        <>
            <Toaster />
            <div className="update">
                <div className="form-update">
                    <h2>Update form</h2>

                    <form onSubmit={handleSubmit} encType="multipart/form-data"
                    >
                        <div className="up">
                            <input
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstname}
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastname}
                            />
                        </div>


                        <div className="up">
                            <input
                                type="text"
                                name="fathername"
                                placeholder="Father Name"
                                onChange={(e) => setFatherName(e.target.value)}
                                value={fathername}

                            />

                            <input
                                type="text"
                                name=" mothername"
                                placeholder="Mother Name"
                                onChange={(e) => setMotherName(e.target.value)}
                                value={mothername} />

                        </div>


                        <input
                            type="file"
                            name="text"
                            id=""
                            onChange={(e) => setImage(e.target.files[0])}

                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <div className="up">
                            <input
                                // type="tel"
                                name="age"
                                placeholder="Age"
                                onChange={(e) => setAge(e.target.value)}
                                value={age}

                            />

                        </div>
                        <textarea
                            name="contact"
                            placeholder="Address"
                            onChange={(e) => setContact(e.target.value)}
                            value={contact}
                        ></textarea>






                        <div className="on">
                            <button type="submit" className="st">Submit</button>
                            <button type="submit" className="st" onClick={() => setUpdateTeacher(false)}>close</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default UpdateTeacher;
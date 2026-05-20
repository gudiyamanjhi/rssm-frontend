// import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Api from "./API/Api";

function StudentForm() {

    const [image, setImage] = useState()
    const [stdata, setFormData] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        mothername: "",
        className: "",
        duration: "",
        email: "",
        address: "",
        gender: "",
        mobile: "",
        Age: "",
        State: "",
        admissionDate: "",
        admissionMonth: ""

    });


    const handleChange = (e) => {
        setFormData({ ...stdata, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        // const currentDate = new Date().toLocaleDateString();
        e.preventDefault();
        const fdata = new FormData()
        fdata.append("firstName", stdata.firstName);
        fdata.append("lastName", stdata.lastName);
        fdata.append("fatherName", stdata.fatherName);
        fdata.append("mothername", stdata.mothername);
        fdata.append("className", stdata.className);
        fdata.append("duration", stdata.duration);
        fdata.append("email", stdata.email);
        fdata.append("address", stdata.address);
        fdata.append("gender", stdata.gender);
        fdata.append("mobile", stdata.mobile);
        fdata.append("Age", stdata.Age);
        fdata.append("State", stdata.State);
        fdata.append("admissionDate", stdata.admissionDate);
        fdata.append("admissionMonth", stdata.admissionMonth)
        fdata.append("image", image);

        await Api.post("/student/registerform", fdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        },).then((res) => {
            console.log(res.data.status)
            if (res.data.status) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        })

    };

    return (
        <>
            <Toaster />
            <div className="form-container">
                <div className="form-card">
                    <h2>Student Registration</h2>

                    <form onSubmit={handleSubmit} encType="multipart/form-data"
                    >
                        <div className="row">
                            <select
                                name="admissionMonth"
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Month :-</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <input
                                type="date"
                                name="admissionDate"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange} required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange} required
                            />
                        </div>


                        <div className="row">
                            <input
                                type="text"
                                name="fatherName"
                                placeholder="Father Name"
                                onChange={handleChange} required

                            />

                            <input
                                type="text"
                                name="mothername"
                                placeholder="Mother Name"
                                onChange={handleChange} required />
                        </div>

                        <div className="row">
                            <input
                                type="text"
                                name="className"
                                placeholder="className"
                                onChange={handleChange} required
                            />
                            <select
                                name="duration"
                                onChange={handleChange} required
                            >
                                <option value="select">Select a option</option>
                                <option value="2 year">2 year</option>
                                <option value="3 year">3 year</option>
                                <option value="4 year">4 year</option>
                            </select>
                        </div>

                        <input
                            type="file"
                            name="text"
                            id=""
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange} required
                        />
                        <div className="row">
                            <input
                                // type="tel"
                                name="Age"
                                placeholder="Age"
                                onChange={handleChange}
                                required
                            />
                            <input
                                // type="tel"
                                name="State"
                                placeholder="State"
                                onChange={handleChange} required
                            />
                        </div>
                        <textarea
                            name="address"
                            placeholder="Address"
                            onChange={handleChange} required
                        ></textarea>




                        <input
                            // type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            onChange={handleChange} required
                        />
                        <div>
                            <label>Gender</label> <br />

                            <label>Male</label>
                            <input type="radio" name="gender" value="Male" onChange={handleChange} required />

                            <label>Female</label>
                            <input type="radio" name="gender" value="Female" onChange={handleChange} required />

                            <label>Other</label>
                            <input type="radio" name="gender" value="Other" onChange={handleChange} required />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </>
    );
}

export default StudentForm;
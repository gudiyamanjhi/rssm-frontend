import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Update({ detailstudent, setUpdate }) {

    const [image, setImage] = useState()
    const [stdata, setFormData] = useState()
    console.log(detailstudent)
    const [firstname, setFirstName] = useState(detailstudent?.firstname)

    const [lastname, setLastName] = useState(detailstudent?.lastname)
    const [fathername, setFatherName] = useState(detailstudent?.fathername)
    const [mothername, setMotherName] = useState(detailstudent?.mothername)
    const [className, setClassName] = useState(detailstudent?.className)
    const [email, setEmail] = useState(detailstudent?.email)
    const [Age, setAge] = useState(detailstudent?.Age)
    const [State, setState] = useState(detailstudent?.State)
    const [address, setAddress] = useState(detailstudent?.address)
    const [mobileno, setMobileNo] = useState(detailstudent?.mobileno)





    console.log(detailstudent)
    const handleChange = (e) => {
        setFormData({ ...stdata, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        const id=detailstudent?._id
        e.preventDefault();
        const res=await axios.post(`http://localhost:8000/student/updatestudent/${id}`,{firstname,lastname,email,fathername,mothername,className,Age,address,State,mobileno
        }).then((res) => {
            console.log(res)
            //  setFirstName(res.data.firstName);
        })
        // const fdata = new FormData()
        // fdata.append("firstName", stdata.firstName);
        // fdata.append("lastName", stdata.lastName);
        // fdata.append("fatherName", stdata.fatherName);
        // fdata.append("mothername", stdata.mothername);
        // fdata.append("className", stdata.className);
        // fdata.append("duration", stdata.duration);
        // fdata.append("email", stdata.email);
        // fdata.append("address", stdata.address);
        // fdata.append("gender", stdata.gender);
        // fdata.append("mobile", stdata.mobile);
        // fdata.append("Age", stdata.Age);
        // fdata.append("State", stdata.State);
        // fdata.append("image", image);

        // console.log(fdata);


        // // const handleSubmit = async (e) => {
        // // e.preventDefault();
        // const res = await axios.post("http://localhost:8000/registerform", {fdata}).then((res) => {
        //     console.log(res.data.status)
        //     if (res.data.status) {
        //         toast.success(res.data.message)
        //     } else {
        //         toast.error(res.data.message)
        //     }
        // })

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
                                value={ mothername} />

                        </div>

                        <div className="up">
                            <input
                                type="text"
                                name="className"
                                placeholder="className"
                                onChange={(e) => setClassName(e.target.value) }
                                value={className}
                            />
                            <select
                                name="duration"
                                onChange={handleChange}
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
                                name="Age"
                                placeholder="Age"
                                onChange={(e) => setAge(e.target.value)}
                                value={Age}

                            />
                            <input
                                // type="tel"
                                name="State"
                                placeholder="State"
                                onChange={(e) => setState(e.target.value)}
                                value={State}
                            />
                        </div>
                        <textarea
                            name="address"
                            placeholder="Address"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        ></textarea>




                        <input
                            // type="tel"
                            name="mobileno"
                            placeholder="Mobile Number"
                            onChange={(e)=> setMobileNo(e.target.value)}
                            value={mobileno}
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
                        <div className="on">
                        <button type="submit" className="st">Submit</button>
                        <button type="submit" className="st" onClick={() => setUpdate(false)}>close</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Update;
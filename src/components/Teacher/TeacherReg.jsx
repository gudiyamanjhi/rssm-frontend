import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


function TeacherReg() {


  const [image, setImage] = useState()
  const [teacher, setTeacherForm] = useState({
    firstname: "",
    lastname: "",
    fathername: "",
    mothername: "",
    age: "",
    email: "",
    contact: "",
    Qualification: "",
    experience: "",


  })
  console.log(teacher)


  const handleChange = (e) => {
    setTeacherForm({ ...teacher, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image)
    console.log(teacher)

    const formData = new FormData();

    formData.append("firstname", teacher.firstname);
    formData.append("lastname", teacher.lastname);
    formData.append("fathername", teacher.fathername);
    formData.append("mothername", teacher.mothername);
    formData.append("age", teacher.age);
    formData.append("email", teacher.email);
    formData.append("contact", teacher.contact);
    formData.append("Qualification", teacher.Qualification);
    formData.append("experience", teacher.experience);
    formData.append("image", image);


    const res = await axios.post("http://localhost:8000/teacher/registerform", formData, {
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
      <div className="count">
        <div className="container">
          <h2 className="headings">Teacher Registration</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="row">
              <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required className="input" />
              <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required className="input" />
            </div>

            <div className="row">
              <input type="text" name="fathername" placeholder="Father Name" onChange={handleChange} required className="input" />
              <input type="text" name="mothername" placeholder="Mother Name" onChange={handleChange} required className="input" />
            </div>

            <div className="row">
              <input type="text" name="age" placeholder="Age" onChange={handleChange} required className="input" />
              <input type="text" name="Qualification" placeholder="Qualification" onChange={handleChange} required className="input" />

            </div>
            <div className="row">
              <input type="number" name="contact" placeholder="Contact Number" onChange={handleChange} required className="input" />
              <input type="email" name="email" placeholder="Enater the email" onChange={handleChange} required className="input" />
            </div>
            <input
              type="file"
              name="text"
              id=""
              onChange={(e) => setImage(e.target.files[0])}
              required
            />

            <div className="row">
              <select
                name="Qualification"
                onChange={handleChange} required
                className="input"
              >
                <option value="select">Select a Qualification</option>
                <option value="2 year">MA</option>
                <option value="3 year">MSC</option>
                <option value="4 year">MBA</option>
                <option value="3 year">MEd</option>
                <option value="3 year">MCA</option>
                <option value="3 year">MPH</option>
                <option value="3 year">LLM</option>
                <option value="3 year">M.TECH</option>
                <option value="3 year">MD</option>
                <option value="3 year">CA</option>
                <option value="3 year">MBBS</option>
              </select>
              <input type="number" name="experience" placeholder="Experience (years)" onChange={handleChange} required className="input" />
            </div>

            <button type="submit" className="mit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default TeacherReg
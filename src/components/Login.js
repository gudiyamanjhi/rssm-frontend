import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Signup from "./Signup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"

function Login() {

   const [data, setData] = useState()
   const nav = useNavigate()

   const handleChange = (e) => {
      setData({
         ...data,
         [e.target.name]: e.target.value
      })
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("start")

      const senddata = await axios.post("http://localhost:8000/users/login", data).then((res) => {
         console.log(res.data.status)
         if (res.data.status) {
            localStorage.setItem("nspl", JSON.stringify(res.data.user))
            toast.success("successfull Login")
            localStorage.setItem("nsplAuth", "true")
            setTimeout(() => {
               nav("/")
            }, 2000);
         } else {
            toast.error(res.data.message)
         }
      });

   }

   return (
      <> <Toaster />
         <div className="main">
            <div className="card">
               <h2>Admin Dashboard</h2>
               <form action="" onSubmit={handleSubmit}>

                  <div className="input-group">
                     <label htmlFor="">Name</label>
                     <input type="text" name="name" id="" onChange={handleChange} />

                     <label htmlFor="">Email</label>
                     <input type="email" name="email" id="" onChange={handleChange} />

                     <label htmlFor="">Mobile</label>
                     <input type="phoneno" name="phoneno" id="" onChange={handleChange} />

                  </div>

                  <div className="input-group">
                     <label htmlFor="">Password</label>
                     <input type="password" name="password" id="" onChange={handleChange} />
                  </div>

                  <button type="submit" >Login</button>
                  <p style={{ paddingTop: "20px", paddingLeft: "60px" }}>
                     Don't have an account? <Link to={"/signup"}>Sign up</Link>
                  </p>

               </form>
            </div>
         </div>
      </>
   )
}
export default Login
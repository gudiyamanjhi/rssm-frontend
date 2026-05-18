import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {

    const [data, setData] = useState()

    const nav = useNavigate()
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // localStorage.setItem("user", JSON.stringify(data))
         await axios.post("http://localhost:8000/users/signup", data).then((res) => {
            console.log(res)
            if (res.data.status) {
                toast.success("Suucessful signup")
                setTimeout(() => {
                    nav("/")
                }, 2000);
            } else {
                toast.error(res.data.message)
            }
        })
    };

    return (
        <>
            <Toaster />
            <div className="main">
                <div className="card">
                    <h2>Admin Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" id="" onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="">username</label>
                            <input type="text" name="username" id="" onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="">Phone number</label>
                            <input type="phoneno" name="phoneno" id="" onChange={handleChange} />
                        </div>

                        <div className="input-group">
                            <label htmlFor="">password</label>
                            <input type="password" name="password" id="" onChange={handleChange} />
                        </div>

                        <button type="submit" className="button" >submit</button>
                        <p style={{ paddingTop: "20px", paddingLeft: "60px" }}>
                            Don't have an account? <Link to={"/login"}>Login</Link>
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Signup
import React, { useContext, useEffect, useState } from "react";
import pro from "../components/img/u.jpg";
// import axios from "axios";
import Api from "./API/Api";
import StudentContext from "./context/StudentContext";

function Profile() {

  const profil=useContext(StudentContext)
  console.log(StudentContext)

  const [user, setUser] = useState({});
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phoneno, setPhoneNo] = useState(user?.phoneno)
  const [address, setAddress] = useState(user?.address)
  const [city, setCity] = useState(user?.city)
  const [state, setState] = useState(user?.state)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Api.post("/users/updateProfile", { name, email, phoneno, address, city, state }).then((res) => {
      console.log(res)
      localStorage.setItem("nspl", JSON.stringify(res.data.user))
    })
  };

  useEffect(() => {
    const saveuser = JSON.parse(localStorage.getItem("nspl"));
    setUser(saveuser);

    if (saveuser) {
      setName(saveuser.name);
      setEmail(saveuser.email);
      setPhoneNo(saveuser.phoneno);
      setAddress(saveuser.address);
      setCity(saveuser.city);
      setState(saveuser.state);
    }
  }, []);

  return (
    <>
      <div className="profile-container">
        <form onSubmit={handleSubmit}>
          <div className="profile-card">

            {/* LEFT SIDE */}
            <div className="profile-left">
              <img src={pro} alt="profile" />
            </div>

            {/* RIGHT SIDE */}
            <div className="profile-right">

              <h2 className="profile-title">{profil}</h2>

              <div className="profile-group">
                <div className="profile-row">
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
                    name="username"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="profile-row">
                  <label>Email</label>
                  <input
                    type="text"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="profile-group">
                <div className="profile-row">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    value={phoneno}
                    name="phoneno"
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>

                <div className="profile-row">
                  <label>Address</label>
                  <input
                    type="text"
                    value={address}
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="profile-group">
                <div className="profile-row">
                  <label>City</label>
                  <input
                    type="text"
                    value={city}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="profile-row">
                  <label>State</label>
                  <input
                    type="text"
                    value={user?.state || ""}
                    readOnly
                  />
                </div>
              </div>

              <button className="profile-btn" type="submit">
                Update Profile
              </button>

            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Profile
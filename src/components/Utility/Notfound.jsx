import React from "react";
import img from "./image/p1.jpg";

function Notfound() {
  return ( 
    <div style={{border:"1px solid", width: "100%", height: "635px",backgroundColor:"white", }}>
      <div className="notfound" style={{ width: "100%", height: "500px",textAlign: "center", marginTop: "50px" }}>
        <img src={img} alt="404 Not Found" width={"20%"} />
         <h1 style={{textAlign:"center", marginTop:"50px", fontFamily:"math", color:"#5e5b5b",}}>PAGE NOT FOUND</h1>
    
      </div>
      {/* <p style={{textAlign:"center", marginBottom:"10px"}}>NOT FOUND PAGE</p> */}
    </div>
  );
}

export default Notfound;
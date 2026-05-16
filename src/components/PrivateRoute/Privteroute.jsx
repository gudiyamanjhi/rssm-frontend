import react from "react";
import { Navigate } from "react-router-dom";

function Privteroute({ children }) {

    const isloggin = localStorage.getItem("nsplAuth") === "true"
    return isloggin ? children : <Navigate to={"/login"} />

}
export default Privteroute
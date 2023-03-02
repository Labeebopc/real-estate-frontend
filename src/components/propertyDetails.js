import { useState } from "react";
import axios from "axios"
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/propertyDetails.css"
import { Navigate } from "react-router-dom";
const PropertyDetails = () =>{
    const navigate = useNavigate()
    const handleLogout = () => {
        let item = window.localStorage.getItem("token");
        localStorage.removeItem(item)
        navigate("/", { replace: true })
    }

    return (
        <>
            <Sidebar/>
            <div id = "box">
            <button onClick={handleLogout}>Logout</button>
            </div>
        
        </>
    )
}
export default PropertyDetails;
import { useEffect, useState } from "react";
import axios from "axios"
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/propertyDetails.css"
import Header from "./add-new-property/header/header";
import Display from "./display";
const DisplayDetails = () =>{
    const [displayData,setDisplayData] = useState([{}])
    const navigate = useNavigate()
    const handleLogout = () => {
        let item = window.localStorage.getItem("token");
        localStorage.removeItem(item)
        navigate("/", { replace: true })
    }
    const displayDetails =async () => {
        await axios.get("http://localhost:8080/propertydetails")
        .then((data)=>{
            // details =  Object.entries(data.data)  

            setDisplayData(data.data)
            console.log((displayData))

        })
    }
    
    useEffect(()=>{
        displayDetails()
    },[])
        

    
    return (
        <>
            
            <div id = "box">
            <button onClick={handleLogout}>Logout</button>
            {displayData.map((user)=>{
                const key = new Date().getTime()-Math.random().toString();
                return <Display user={user} key ={key}/>
            })}
            </div>
        
        </>
    )
}
export default DisplayDetails;
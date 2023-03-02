import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import path from "../images/path.png"
import axios from "axios"
import { useEffect, useState } from 'react';

const Sidebar = () =>{

    const [details,setDetails] = useState([{}])
    async function getDetails(){
        await  axios.get("http://localhost:8080/propertydetails/")
        .then((property)=>{
        console.log(property.data)
            //setDetails(property)
    })
    }
    useEffect(()=>{
        getDetails()
    },[])
    


    return (
        <div>
            {details.map((user)=>{
                console.log("user is "+ user)
            })}
        </div>
    )
}
export default Sidebar
import { useState } from "react"
import "../styles/signup.css"
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Signup = ()=>{
    const navigate = useNavigate();
    const [email,setMail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("")
    
    async function handleSubmit(e){
        e.preventDefault();
        if((email!=="" && password!=="" && confirm!=="")){
            if(confirm===password){
                let flag =1
                let data = new FormData();
                data.email = email;
                data.password = password;
                data.confirmPassword = confirm
                console.log("data is " + data)
                await axios({
                    method:"POST",
                    url:"http://localhost:8080/signUp",
                    data:{data},
                    // redirect:"follow"
                })
                .then(text => {
                    flag=1
                console.log(text);
                })
            .catch(err => {
                flag=0;
                if(err.message==="Request failed with status code 400"){
                    alert("User already exists")
                }
                console.log(err.message);
            })
                if(flag===1){
                alert("Details were successfully added") 
                navigate("/propertyDetails")   
                }
            }
            else{
                alert("please enter correct password")
            }
        }
        else{
            alert("please enter all the fields")
        }
        
    }
    
    return (
        <>
        <div className="form" id="forms">
            <h3>Create New Account</h3>
            <input type = "email" placeholder="Enter Your Mail Id" className="data" onChange={(e)=>{setMail(e.target.value)}} value={email}/><br/>
            <input type = "password" placeholder="password" className="data" onChange={(e)=>{setPassword(e.target.value)}} value = {password}/><br/>
            <input type = "password" placeholder="Re-enter the password" className="data" onChange={(e)=>{setConfirm(e.target.value)}} value={confirm}/><br/><br/>
            <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
        
        </>
    )
}
export default Signup
import {useState} from "react"

import "../styles/login.css"
import backgroundimage from "../images/backgroundimage.png"
const Login = () =>{
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const handleSignIn = () =>{
        console.log(user,password)
    }
    const handleSignUp = ()=>{

    }
    return (
        <div id="forms">
            <h1>Its Easy to find your best property</h1><br/>
            <div className="box">
                <input type = "text" placeholder="UserName" onChange={(e)=>setUser(e.target.value)} className="user"/><br/><br/>
                <input type = "password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
                <button onClick={handleSignIn} className="click signin">Sign In </button><br/><br/>
                <button onClick={handleSignUp} className="click">Sign Up </button>
            </div>
            
        </div>
    )
}

export default Login
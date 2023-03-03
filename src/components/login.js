import {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "../styles/login.css"

const Login = () =>{
    let flag = 1
    const navigate = useNavigate();
    // const [logindata,setData] = useState({email:"",password:""});
    const [error,errorMess] = useState({email:{isValid:true,message:""},password:{isValid:true,message:""}})
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [token,setToken] = useState({email:"",password:""})
    // const [passwordType,setPasswordType] = useState(password)
    async function handleSignIn(e){
        let formData = new FormData();
        e.preventDefault()  
        console.log(formData)
        if(email!==""&& password!==""){
        formData.email = email
        formData.password = password
        console.log(formData)
        setToken({...token,email:email,password:password})
        console.log(token)
        }else{
            flag =0;
            alert("Please fill all the details")
        }
        // console.log(user,password)
        await axios({
            method:"POST",
            url:"http://localhost:8080/login",
            data:{formData},
            // redirect:"follow"
        })
        .then(text => {
            flag=1
        console.log(1);
        })
        .catch(err => {
            flag=0
            if(err.message==="Request failed with status code 404"){
                alert("User not found please signup to login")
            }
            if(err.message==="Request failed with status code 401"){
                alert("Incorrect password")
            }
            
        })
        if(flag===1){
            window.localStorage.setItem("token",token);
            navigate("/propertyDetails")
        }       
        
    }
    const handleSignUp = ()=>{
        navigate("/register")
    }
    const checkErrors = (type) => {
        switch(type){

            case "email":
                console.log(email)
                var regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                console.log(!email.match(regex))
                if (!email.match(regex)){
                    errorMess({...error, email:{isValid: false,message: "Please Enter Valid Mail Id"}})
                }else{
                    errorMess({...error, email:{isValid: true,message: ""}})
                }
                break;
            case "password":
                if(password.length<6 || password.length>15){
                    errorMess({...error, password:{isValid: false,message: "Please Enter Valid password"}})
                }else{
                    errorMess({...error, password:{isValid: true,message: ""}})
                }
                break;

                default: return error
        }
    }
    return (
        <div className="background">
            <h1>Its Easy to find your best property</h1><br/>
            <div className="box" id = "forms">
                <input type = "email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} className="user" value = {email} onBlur={(event)=> {checkErrors("email")}}/><br/><br/>
                {!error.email.isValid ? <div style={{color: "orangered",fontSize:"16px",marginLeft:"60px",marginTop:"-26px"}}>{error.email.message}</div>:""}
                <input type = "password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="user" value = {password} onBlur={(event)=> {checkErrors("password")}}/><br/><br/>
                {!error.password.isValid ? <div style={{color: "orangered",fontSize:"16px",marginLeft:"60px",marginTop:"-26px"}}>{error.password.message}</div>:""}
                <button onClick={handleSignIn} className="click signin">Sign In </button><br/><br/>
                <button onClick={handleSignUp} className="click">Sign Up </button>
            </div>
            {/* <Addproperty loginDetails = {token} /> */}
        </div>
    )
}

export default Login
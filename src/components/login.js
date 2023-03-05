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
        formData.headers = "loginData"
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
            headers:"login data"
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
        <div className="loginBox">
            <div className="login">
            <h1 className="logo">Logo</h1><br/>
            <p className="text">Enter your credentials to access your account</p>
            <div id = "forms">
                <input type = "email" placeholder="User Id" onChange={(e)=>setEmail(e.target.value)} className="usermail" value = {email} onBlur={(event)=> {checkErrors("email")}}/><br/><br/>
                {!error.email.isValid ? <div className="errorBox" style={{marginLeft:"100px",color:"orangered"}}>Please enter valid mail id</div>:<div className="errorBox"></div>}
                <input type = "password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="userpassword" value = {password} onBlur={(event)=> {checkErrors("password")}}/><br/><br/>
                {!error.password.isValid ? <div className="errorBox"   style={{marginLeft:"100px",color:"orangered"}}>Please Enter Valid Password</div>:<div className="errorBox"></div>}
                <button onClick={handleSignIn} className="signin">Sign In </button><br/><br/>
                <button onClick={handleSignUp} className="signup">Sign Up </button>
                
            </div>
            
            </div>
            {/* <Addproperty loginDetails = {token} /> */}
            <div className="lastText">Don't have an account?Please <span className="request"> Sign Up</span></div>
        </div>
    )
}

export default Login
import axios from "axios"
const Addproperty = (props) =>{
    // console.log("props from signup page" + props.email)
    const handleLogout= ()=>{
        console.log(window.localStorage.getItem("token"))
        
            axios.get("http://localhost:8080/signout").then((data)=>{console.log(data)})
            window.localStorage.clear();
            
        
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.location.href="./";
        
    }
    return (
        <>
            <p>Add a New Property</p>
        <button onClick={handleLogout}>Logout</button>
        </>
        
    )
}

export default Addproperty
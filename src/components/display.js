import React from "react";
import { useState } from "react";
import "../styles/display.css"
const Display = (props) => {
    // const [marginTop,setMarginTop] = useState("30.83%")
    console.log(props.user)
    let content = props.user
    return (
        <>
       <div className="table">
        <div className="heading">
        <div>ppdId</div>
            <div>Image</div>
            <div>Property</div>
            <div>Contact</div>
            <div>Area</div>
            <div>Views</div>
            <div>Status</div>
            <div>Days Left</div>
            <div>Action</div>
        </div>
      </div>
      <div className = "box1" >
        <div>{content.ppdId}</div>
            <div>image</div>
            <div>{content.propertyType}</div>
            <div>{content.contact}</div>
            <div>{content.area}</div>
            <div>{content.views}</div>
            <div>{content.status}</div>
            <div>{content.daysleft} </div>
            <div>{content.action}</div>
            
        </div>
        </>
    )
}

export default Display
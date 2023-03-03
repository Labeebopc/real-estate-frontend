import { useState } from "react";
import axios from "axios"
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import "../styles/propertyDetails.css"


const DisplayDetails = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        let item = window.localStorage.getItem("token");
        localStorage.removeItem(item)
        navigate("/", { replace: true })
    }
// bacis-info => basictInfo
//
//
    return (
        <>
            {/* <Sidebar/> */}
            <div id="box">
                <button onClick={handleLogout}>Logout</button>
            </div>

            <section className="display-details-navbar">

            </section>

            <section className="display-details-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">PPD ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Property</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Area</th>
                            <th scope="col">Views</th>
                            <th scope="col">Status</th>
                            <th scope="col">DaysLeft</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/*  */}
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                        </tr>

                    </tbody>
                </table>
            </section>


        </>
    )
}
export default DisplayDetails;
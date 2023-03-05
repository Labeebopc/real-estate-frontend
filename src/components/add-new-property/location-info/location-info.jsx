import React, { useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import './location-info.css'
import Header from '../header/header'


const LocationInfo = () => {
    // For navigating onClick
    const navigation = useNavigate()

    // For checking the mandotary field errors
    const [isValied, setIsValied] = useState(false)

    // To get realtime update of mandatory field and show error according to this
    const [requiredField, setRequiredField] = useState({ email: "", area: "" })

    // Getting the passed details from previous page & storing in one variable
    const location = useLocation()
    const basicInfo = location.state.basicInfo
    const propertyDetails = location.state.propertyDetails
    const generalInfo = location.state.generalInfo

    // Since we dont want realtime UI update, we are using useRef as performance optimization
    const locationInfo = useRef({
        email: "",
        city: "",
        area: "",
        pincode: 0,
        address: "",
        landmark: "",
        latitude: 0,
        longitude: 0,
    })

    // const allDetails = Object.assign(
    //     locationInfo
    // );

    const isAllInputsValied = locationInfo.current.email.length && locationInfo.current.area.length

    const handleSubmit = () => {

        if (isAllInputsValied === 0) {
            setIsValied(true)
        }

        else {

            let allPropertyData = [basicInfo, propertyDetails, generalInfo, locationInfo]

            //alert("New Property Successfully Added")
            //console.log(allPropertyData);

            const sendAllData = async () => {
                console.log(allPropertyData);
                let response = await axios.post('https://real-estate-backend-lamj.onrender.com/api/v1/addnewproperty', {
                    data: allPropertyData
                }).then((res) => console.log(res))
            }
            sendAllData()

            navigation('/propertyDetails')
        }

    }

    const handlePrevious = () => {
        navigation('/general-info', { state: { generalInfo } })
    }


    return (
        <>
        <Header/>
            {/* Location info Container */}
            <section className='location-info-container'>

                {/* Location info left section */}
                <section className='location-info-left'>

                    {/* left-article-1 */}
                    <article>
                        <div className='location-info-title'>Email<span className='required-field'>*</span></div>
                        <input className='location-info-values' type="text" onChange={(e) => { setRequiredField({ ...requiredField, email: e.target.value }); locationInfo.current.email = e.target.value }} placeholder='Enter Your Email' />
                    </article>

                    {/* left-article-2 */}
                    <article>
                        <div className='location-info-title'>Select Area<span className='required-field'>*</span></div>
                        <select className='location-info-values' onChange={(e) => { setRequiredField({ ...requiredField, area: e.target.value }); locationInfo.current.area = e.target.value }} name="" id="select-area">
                            <option value="0">Area</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </article>

                    {/* left-article-3 */}
                    <article>
                        <div className='location-info-title'>Address</div>
                        <input className='location-info-values' type="text" onChange={(e) => locationInfo.current.address = e.target.value} placeholder='Address' />
                    </article>

                    {/* left-article-4 */}
                    <article>
                        <div className='location-info-title'>Latitude</div>
                        <input className='location-info-values' type="text" onChange={(e) => locationInfo.current.latitude = e.target.value} placeholder='Latitude Eg: 10000' />
                    </article>

                </section>

                {/* Loation info right section */}
                <section className='location-info-right'>

                    {/* right-article-1 */}
                    <article>
                        <div className='location-info-title'>City</div>
                        <select className='location-info-values' onChange={(e) => locationInfo.current.city = e.target.value} name="" id="select-city">
                            <option value="NA">Select City</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="malappuram">Malappuram</option>
                        </select>
                    </article>

                    {/* right-article-2 */}
                    <article>
                        <div className='location-info-title'>Pincode</div>
                        <select className='location-info-values' onChange={(e) => locationInfo.current.pincode = e.target.value} name="" id="select-pincode">
                            <option value="0"> Select Pincode</option>
                            <option value="580051">580051</option>
                            <option value="676555">676555</option>
                        </select>
                    </article>

                    {/* right-article-3 */}
                    <article>
                        <div className='location-info-title'>Landmark</div>
                        <input className='location-info-values' type="text" onChange={(e) => locationInfo.current.landmark = e.target.value} placeholder='Landmark' />
                    </article>

                    {/* right-article-4 */}
                    <article>
                        <div className='location-info-title'>Longitude</div>
                        <input className='location-info-values' type="text" onChange={(e) => locationInfo.current.longitude = e.target.value} placeholder='Longitude Example: 10000' />
                    </article>

                </section>
            </section>

            {/* Location info button section */}
            <section className='location-info-btn'>

                {/* Handle the error, if the mandotary field is empty */}
                {isValied && <div style={{ color: "red" }}>Please fill the mandatory fields</div>}

                <button className='location-info-previous-btn' onClick={handlePrevious}>Previous</button>
                <button className='location-info-save-btn' onClick={handleSubmit}>Save & Continue</button>
            </section>
        </>
    )
}

export default LocationInfo
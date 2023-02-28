import React, { useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './location-info.css'


const LocationInfo = () => {
    // For navigating onClick
    const navigation = useNavigate()

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
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: "",
    })

    // const allDetails = Object.assign(
    //     locationInfo
    // );

    const handleSubmit = () => {

        let allPropertyData = [basicInfo, propertyDetails, generalInfo, locationInfo]

        //alert("New Property Successfully Added")
        console.log(allPropertyData);
        navigation('/')

    }

    const handlePrevious = () => {
        navigation('/general-info', { state: { generalInfo } })
    }

    return (
        <>
            {/* Location info Container */}
            <section className='location-info-container'>

                {/* Location info left section */}
                <section className='location-info-left'>

                    {/* left-article-1 */}
                    <article>
                        <div className='location-info-title'>Email</div>
                        <input type="text" onChange={(e) => locationInfo.current.email = e.target.value} placeholder='Enter Your Email' />
                    </article>

                    {/* left-article-2 */}
                    <article>
                        <div className='location-info-title'>Select Area</div>
                        <select className='location-info-left-value' onChange={(e) => locationInfo.current.area = e.target.value} name="" id="select-area">
                            <option value="">Area</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </article>

                    {/* left-article-3 */}
                    <article>
                        <div className='location-info-title'>Address</div>
                        <input type="text" onChange={(e) => locationInfo.current.address = e.target.value} placeholder='Address' />
                    </article>

                    {/* left-article-4 */}
                    <article>
                        <div className='location-info-title'>Latitude</div>
                        <input type="text" onChange={(e) => locationInfo.current.latitude = e.target.value} placeholder='Latitude' />
                    </article>

                </section>

                {/* Loation info right section */}
                <section className='location-info-right'>

                    {/* right-article-1 */}
                    <article>
                        <div className='location-info-title'>City</div>
                        <select className='location-info-left-value' onChange={(e) => locationInfo.current.city = e.target.value} name="" id="select-city">
                            <option value="">Select City</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="malappuram">Malappuram</option>
                        </select>
                    </article>

                    {/* right-article-2 */}
                    <article>
                        <div className='location-info-title'>Pincode</div>
                        <select className='location-info-left-value' onChange={(e) => locationInfo.current.pincode = e.target.value} name="" id="select-pincode">
                            <option value=""> Select Pincode</option>
                            <option value="580051">580051</option>
                            <option value="676555">676555</option>
                        </select>
                    </article>

                    {/* right-article-3 */}
                    <article>
                        <div className='location-info-title'>Landmark</div>
                        <input type="text" onChange={(e) => locationInfo.current.landmark = e.target.value} placeholder='Landmark' />
                    </article>

                    {/* right-article-4 */}
                    <article>
                        <div className='location-info-title'>Longitude</div>
                        <input type="text" onChange={(e) => locationInfo.current.longitude = e.target.value} placeholder='Longitude' />
                    </article>

                </section>
            </section>

            {/* Location info button section */}
            <section className='location-info-btn'>
                <button className='location-info-previous-btn' onClick={handlePrevious}>Previous</button>
                <button className='location-info-save-btn' onClick={handleSubmit}>Save & Continue</button>
            </section>
        </>
    )
}

export default LocationInfo
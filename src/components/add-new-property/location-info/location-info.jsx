import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './location-info.css'


const LocationInfo = () => {
    const navigation=useNavigate()

    const handlePrevious = () => {
        navigation('/general-info')
    }

    return (
        <>
            <section className='location-info-container'>
                <section className='location-info-left'>
                    <article>
                        <div className='location-info-title'>Email</div>
                        <input type="text" placeholder='Enter Your Email' />
                    </article>


                    <article>
                        <div className='location-info-title'>Select Area</div>
                        <select className='location-info-left-value' name="" id="select-area">
                            <option value="">Area</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </article>

                    <article>
                        <div className='location-info-title'>Address</div>
                        <input type="text" placeholder='Address' />
                    </article>

                    <article>
                        <div className='location-info-title'>Latitude</div>
                        <input type="text" placeholder='Latitude' />
                    </article>

                </section>

                <section className='location-info-right'>
            
                    <article>
                        <div className='location-info-title'>City</div>
                        <select className='location-info-left-value' name="" id="select-city">
                            <option value="">Select City</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="malappuram">Malappuram</option>
                        </select>
                    </article>


                    <article>
                        <div className='location-info-title'>Pincode</div>
                        <select className='location-info-left-value' name="" id="select-pincode">
                            <option value=""> Select Pincode</option>
                            <option value="580051">580051</option>
                            <option value="676555">676555</option>
                        </select>
                    </article>


                    <article>
                        <div className='location-info-title'>Landmark</div>
                        <input type="text" placeholder='Landmark' />
                    </article>

                    <article>
                        <div className='location-info-title'>Longitude</div>
                        <input type="text" placeholder='Longitude' />
                    </article>

                </section>
            </section>
            <section className='location-info-btn'>
                <button className='location-info-previous-btn' onClick={handlePrevious}>Previous</button>
                <button className='location-info-save-btn'>Save & Continue</button>
            </section>
        </>
    )
}

export default LocationInfo
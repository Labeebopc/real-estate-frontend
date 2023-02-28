import React from 'react'
import { useNavigate } from 'react-router-dom'
import './property-details.css'


const PropertyDetails = () => {

    const navigation = useNavigate()

    const handleSave = () => {
        navigation('/general-info')
    }

    const handlePrevious = () => {
        navigation('/')
    }

    return (
        <>
            <section className='property-details-container'>
                <section className='property-details-left'>
                    <article>
                        <div className='property-details-title'>Length</div>
                        <input type="text" placeholder='Example: 1000' />
                    </article>

                    <article>
                        <div className='property-details-title'>Total Area</div>
                        <input type="text" placeholder='Example: 1000' />
                    </article>

                    <article>
                        <div className='property-details-title'>No of BHK</div>
                        <select className='property-details-left-value' name="" id="select-bhk">
                            <option value="">No of BHK</option>
                            <option value="1">1 BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                        </select>
                    </article>

                    <article>
                        <div className='property-details-title'>Attached</div>
                        <select className='property-details-left-value' name="" id="select-attached">
                            <option value="">Attached</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    <article>
                        <div className='property-details-title'>Furnished</div>
                        <select className='property-details-left-value' name="" id="select-furnished">
                            <option value="">Furnished</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    <article>
                        <div className='property-details-title'>Lift</div>
                        <select className='property-details-left-value' name="" id="select-lift">
                            <option value="">Lift</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    <article>
                        <div className='property-details-title'>Facing</div>
                        <select className='property-details-left-value' name="" id="select-facing">
                            <option value="">Facing</option>
                            <option value="north">North</option>
                            <option value="east">East</option>
                            <option value="south">South</option>
                            <option value="west">West</option>
                        </select>
                    </article>

                </section>

                <section className='property-details-right'>

                    <article>
                        <div className='property-details-title'>Breadth</div>
                        <input type="text" placeholder='Example: 1000' />
                    </article>

                    <article>
                        <div className='property-details-title'>Area Unit</div>
                        <input type="text" placeholder='Example: 1000' />
                    </article>

                    <article>
                        <div className='property-details-title'>No of Floors</div>
                        <select className='property-details-left-value' name="" id="select-floor">
                            <option value="">No of Floors</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </article>

                    <article>
                        <div className='property-details-title'>Western Toilet</div>
                        <select className='property-details-left-value' name="" id="select-toilet">
                            <option value="">Western Toilet</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    <article>
                        <div className='property-details-title'>Car Parking</div>
                        <select className='property-details-left-value' name="" id="select-carparking">
                            <option value="">Car Parking</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    <article>
                        <div className='property-details-title'>Electricity</div>
                        <select className='property-details-left-value' name="" id="select-electricity">
                            <option value="">Electricity</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                </section>
            </section>

            <section className='property-details-btn'>
                <button className='property-details-previous-btn' onClick={handlePrevious}>Previous</button>
                <button className='property-details-save-btn' onClick={handleSave}>Save & Continue</button>
            </section>
        </>
    )
}

export default PropertyDetails
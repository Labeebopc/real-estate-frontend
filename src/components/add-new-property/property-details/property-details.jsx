import React, { useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './property-details.css'


const PropertyDetails = () => {
    // Getting the passed details from previous page & storing in one variable
    const location = useLocation()
    const basicInfo = location.state.basicInfo
    //console.log(location.state);

    // For navigating onClick
    const navigation = useNavigate()

    // Since we dont want realtime UI update, we are using useRef as performance optimization
    const propertyDetails = useRef({
        length: "",
        breadth: "",
        totalArea: "",
        areaUnit: "",
        noOfBHK: "",
        noOfFloors: "",
        attached: "",
        westernToilet: "",
        furnished: "",
        carParking: "",
        lift: "",
        electricity: "",
        facing: "",
    })


    // Navigating into next route, and passing data by useLocation state
    const handleSave = () => {
        navigation('/general-info', { state: { propertyDetails, basicInfo } })
    }

    const handlePrevious = () => {
        navigation('/', { state: basicInfo })
    }

    return (
        <>
            {/* Property Details Container */}
            <section className='property-details-container'>

                {/* Property details left section */}
                <section className='property-details-left'>

                    {/* left-article-1 */}
                    <article>
                        <div className='property-details-title'>Length</div>
                        <input type="text" onChange={(e) => propertyDetails.current.length = e.target.value} placeholder='Example: 1000' />
                    </article>

                    {/* left-article-2 */}
                    <article>
                        <div className='property-details-title'>Total Area</div>
                        <input type="text" onChange={(e) => propertyDetails.current.totalArea = e.target.value} placeholder='Example: 1000' />
                    </article>

                    {/* left-article-3 */}
                    <article>
                        <div className='property-details-title'>No of BHK</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.noOfBHK = e.target.value} name="" id="select-bhk">
                            <option value="">No of BHK</option>
                            <option value="1">1 BHK</option>
                            <option value="2">2 BHK</option>
                            <option value="3">3 BHK</option>
                        </select>
                    </article>

                    {/* left-article-4 */}
                    <article>
                        <div className='property-details-title'>Attached</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.attached = e.target.value} name="" id="select-attached">
                            <option value="">Attached</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    {/* left-article-5 */}
                    <article>
                        <div className='property-details-title'>Furnished</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.furnished = e.target.value} name="" id="select-furnished">
                            <option value="">Furnished</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    {/* left-article-6 */}
                    <article>
                        <div className='property-details-title'>Lift</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.lift = e.target.value} name="" id="select-lift">
                            <option value="">Lift</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    {/* left-article-7 */}
                    <article>
                        <div className='property-details-title'>Facing</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.facing = e.target.value} name="" id="select-facing">
                            <option value="">Facing</option>
                            <option value="north">North</option>
                            <option value="east">East</option>
                            <option value="south">South</option>
                            <option value="west">West</option>
                        </select>
                    </article>

                </section>

                {/* Property details right section */}
                <section className='property-details-right'>

                    {/* right-article-1 */}
                    <article>
                        <div className='property-details-title'>Breadth</div>
                        <input type="text" onChange={(e) => propertyDetails.current.breadth = e.target.value} placeholder='Example: 1000' />
                    </article>

                    {/* right-article-2 */}
                    <article>
                        <div className='property-details-title'>Area Unit</div>
                        <input type="text" onChange={(e) => propertyDetails.current.areaUnit = e.target.value} placeholder='Example: 1000' />
                    </article>

                    {/* right-article-3 */}
                    <article>
                        <div className='property-details-title'>No of Floors</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.noOfFloors = e.target.value} name="" id="select-floor">
                            <option value="">No of Floors</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </article>

                    {/* right-article-4 */}
                    <article>
                        <div className='property-details-title'>Western Toilet</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.westernToilet = e.target.value} name="" id="select-toilet">
                            <option value="">Western Toilet</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    {/* right-article-5 */}
                    <article>
                        <div className='property-details-title'>Car Parking</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.carParking = e.target.value} name="" id="select-carparking">
                            <option value="">Car Parking</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    {/* right-article-6 */}
                    <article>
                        <div className='property-details-title'>Electricity</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.electricity = e.target.value} name="" id="select-electricity">
                            <option value="">Electricity</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                </section>
            </section>

            {/* Property details button section */}
            <section className='property-details-btn'>
                <button className='property-details-previous-btn' onClick={handlePrevious}>Previous</button>
                <button className='property-details-save-btn' onClick={handleSave}>Save & Continue</button>
            </section>
        </>
    )
}

export default PropertyDetails
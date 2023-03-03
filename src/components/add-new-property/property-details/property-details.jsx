import React, { useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../header/header'
import './property-details.css'


const PropertyDetails = () => {
    // Getting the passed details from previous page & storing in one variable
    const location = useLocation()
    const basicInfo = location.state.basicInfo
    //console.log(location.state);

    // For checking the mandotary field errors
    const [isValied, setIsValied] = useState(false)

     // To get realtime update of mandatory field and show error according to this
     const [requiredField, setRequiredField] = useState({length:"", breadth:"",totalArea:"",areaUnit:"", noOfBHK:"", noOfFloors:""})

    // For navigating onClick
    const navigation = useNavigate()

    // Since we dont want realtime UI update, we are using useRef as performance optimization
    const propertyDetails = useRef({
        length: 0,
        breadth: 0,
        totalArea: 0,
        areaUnit: "",
        noOfBHK: 0,
        noOfFloors: 0,
        attached: false,
        westernToilet: false,
        furnished: false,
        carParking: false,
        lift: false,
        electricity: false,
        facing: "",
    })

    const isAllInputsValied = propertyDetails.current.length.length && propertyDetails.current.breadth.length && propertyDetails.current.totalArea.length && propertyDetails.current.areaUnit.length && propertyDetails.current.noOfBHK.length && propertyDetails.current.noOfFloors.length

    // Navigating into next route, and passing data by useLocation state
    const handleSave = () => {
        if (isAllInputsValied === 0) {
            setIsValied(true)
        }

        else navigation('/general-info', { state: { propertyDetails, basicInfo } })
    }

    const handlePrevious = () => {
        navigation('/', { state: basicInfo })
    }

    return (
        <>
        <Header/>
            {/* Property Details Container */}
            <section className='property-details-container'>

                {/* Property details left section */}
                <section className='property-details-left'>

                    {/* left-article-1 */}
                    <article>
                        <div className='property-details-title'>Length<span className='required-field'>*</span></div>
                        <input type="text" onChange={(e) => {setRequiredField({...requiredField,length:e.target.value}); propertyDetails.current.length = e.target.value}} placeholder='Example: 1000' />
                    </article>

                    {/* left-article-2 */}
                    <article>
                        <div className='property-details-title'>Total Area<span className='required-field'>*</span></div>
                        <input type="text" onChange={(e) => {setRequiredField({...requiredField,totalArea:e.target.value}); propertyDetails.current.totalArea = e.target.value}} placeholder='Example: 1000' />
                    </article>

                    {/* left-article-3 */}
                    <article>
                        <div className='property-details-title'>No of BHK<span className='required-field'>*</span></div>
                        <select className='property-details-left-value' onChange={(e) => {setRequiredField({...requiredField,noOfBHK:e.target.value}); propertyDetails.current.noOfBHK = e.target.value}} name="" id="select-bhk">
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
                            <option value="false">Attached</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                    {/* left-article-5 */}
                    <article>
                        <div className='property-details-title'>Furnished</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.furnished = e.target.value} name="" id="select-furnished">
                            <option value="false">Furnished</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                    {/* left-article-6 */}
                    <article>
                        <div className='property-details-title'>Lift</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.lift = e.target.value} name="" id="select-lift">
                            <option value="false">Lift</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                    {/* left-article-7 */}
                    <article>
                        <div className='property-details-title'>Facing</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.facing = e.target.value} name="" id="select-facing">
                            <option value="NA">Facing</option>
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
                        <div className='property-details-title'>Breadth<span className='required-field'>*</span></div>
                        <input type="text" onChange={(e) => {setRequiredField({...requiredField,totalArea:e.target.value}); propertyDetails.current.breadth = e.target.value}} placeholder='Example: 1000' />
                    </article>

                    {/* right-article-2 */}
                    <article>
                        <div className='property-details-title'>Area Unit<span className='required-field'>*</span></div>
                        <input type="text" onChange={(e) => {setRequiredField({...requiredField,totalArea:e.target.value}); propertyDetails.current.areaUnit = e.target.value}} placeholder='Example: m2' />
                    </article>

                    {/* right-article-3 */}
                    <article>
                        <div className='property-details-title'>No of Floors<span className='required-field'>*</span></div>
                        <select className='property-details-left-value' onChange={(e) => {setRequiredField({...requiredField,noOfFloors:e.target.value}); propertyDetails.current.noOfFloors = e.target.value}} name="" id="select-floor">
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
                            <option value="false">Western Toilet</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                    {/* right-article-5 */}
                    <article>
                        <div className='property-details-title'>Car Parking</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.carParking = e.target.value} name="" id="select-carparking">
                            <option value="false">Car Parking</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                    {/* right-article-6 */}
                    <article>
                        <div className='property-details-title'>Electricity</div>
                        <select className='property-details-left-value' onChange={(e) => propertyDetails.current.electricity = e.target.value} name="" id="select-electricity">
                            <option value="false">Electricity</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                </section>
            </section>

            {/* Property details button section */}
            <section className='property-details-btn'>

                {/* Handle the error, if the mandotary field is empty */}
                {isValied && <div style={{ color: "red"}}>Please fill the mandatory fields</div>}

                <button className='property-details-previous-btn' onClick={handlePrevious}>Previous</button>
                <button className='property-details-save-btn' onClick={handleSave}>Save & Continue</button>
            </section>
        </>
    )
}

export default PropertyDetails
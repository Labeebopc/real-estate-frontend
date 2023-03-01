import React, { useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './general-info.css'


const GeneralInfo = () => {

    // Getting the passed details from previous page & storing in one variable
    const location = useLocation()
    const basicInfo = location.state.basicInfo
    const propertyDetails = location.state.propertyDetails

    // For checking the mandotary field errors
    const [isValied, setIsValied] = useState(false)

    // For navigating onClick
    const navigation = useNavigate()

    // To get realtime update of mandatory field and show error according to this
    const [requiredField, setRequiredField] = useState({name:"", mobile:""})

    // Since we dont want realtime UI update, we are using useRef as performance optimization
    const generalInfo = useRef({
        name: "",
        mobile: 0,
        postedBy: "",
        saleType: "",
        featuredPackage: false,
        ppdPackage: "",
        image: null,
    })

    const isAllInputsValied = generalInfo.current.name.length && generalInfo.current.mobile.length 

    // Navigating into next route, and passing data by useLocation state
    const handleSave = () => {

        if(isAllInputsValied === 0){
            setIsValied(true)
        }
        else navigation('/location-info', { state: { generalInfo, basicInfo, propertyDetails } })
    }

    const handlePrevious = () => {
        navigation('/property-details', { state: { propertyDetails } })
    }

    return (
        <>
            {/* General info Container */}
            <section className='general-info-container'>

                {/* General info left section */}
                <section className='general-info-left'>

                    {/* left-article-1 */}
                    <article>
                        <div className='general-info-title'>Name<span className='required-field'>*</span></div>
                        <select className='general-info-left-value' onChange={(e) => {setRequiredField({...requiredField, name:e.target.name}); generalInfo.current.name = e.target.value}} name="" id="select-name">
                            <option value="">Name</option>
                            <option value="owner">Owner</option>
                            <option value="broker">Broker</option>
                        </select>
                    </article>

                    {/* left-article-2 */}
                    <article>
                        <div className='general-info-title'>Posted By</div>
                        <select className='general-info-left-value' onChange={(e) => generalInfo.current.postedBy = e.target.value} name="" id="select-posted">
                            <option value="">Posted By</option>
                            <option value="owner">Owner</option>
                            <option value="broker">Broker</option>
                        </select>
                    </article>

                    {/* left-article-3 */}
                    <article>
                        <div className='general-info-title'>Featured Package</div>
                        <select className='general-info-left-value' onChange={(e) => generalInfo.current.featuredPackage = e.target.value} name="" id="select-package">
                            <option value="false">Featured Package</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                </section>

                {/* General info right section */}
                <section className='general-info-right'>

                    {/* right-article-1 */}
                    <article>
                        <div className='general-info-title'>Mobile<span className='required-field'>*</span></div>
                        <input type="text" onChange={(e) => { setRequiredField({...requiredField, mobile:e.target.value});generalInfo.current.mobile = e.target.value}} placeholder='Enter Mobile Number' />
                    </article>

                    {/* right-article-2 */}
                    <article>
                        <div className='general-info-title'>Sale Type</div>
                        <select className='general-info-left-value' onChange={(e) => generalInfo.current.saleType = e.target.value} name="" id="select-saletype">
                            <option value="">Sale Type</option>
                            <option value="rent">Rent</option>
                            <option value="ownership">Ownership</option>
                        </select>
                    </article>

                    {/* right-article-3 */}
                    <article>
                        <div className='general-info-title'>PPD Package</div>
                        <select className='general-info-left-value' onChange={(e) => generalInfo.current.ppdPackage = e.target.value} name="" id="select-ppd">
                            <option value="">PPD Package</option>
                            <option value="">....</option>
                            <option value="">....</option>
                        </select>
                    </article>

                </section>
            </section>

            {/* General info button section */}
            <section className='general-info-btn'>

                {/* Handle the error, if the mandotary field is empty */}
                {isValied && <div style={{ color: "red" }}>Please fill the mandatory fields</div>}

                <button className='general-info-previous-btn' onClick={handlePrevious}>Previous</button>
                <button className='general-info-save-btn' onClick={handleSave}>Save & Continue</button>
            </section>
        </>
    )
}

export default GeneralInfo
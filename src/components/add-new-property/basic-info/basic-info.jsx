import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header'
import './basic-info.css'


const BasicInfo = () => {
    // For navigating onClick
    const navigation = useNavigate()

    // For checking the mandotary field errors
    const [isValied, setIsValied] = useState(false)

    // To get realtime update of mandatory field and show error according to this
    const [requiredField, setRequiredField] = useState({propertyType:""})

    // Since we dont want realtime UI update, we are using useRef as performance optimization
    const basicInfo = useRef({
        propertyType: "",
        negotiable: false,
        price: 0,
        ownership: "",
        propertyAge: 0,
        propertyApproved: false,
        propertyDescription: "",
        bankLoan: false
    })

    const isAllInputsValied = basicInfo.current.propertyType.length


    // Navigating into next route, and passing data by useLocation state
    const handleSave = () => {

        if(isAllInputsValied === 0){
            setIsValied(true)
        }

        else navigation('/property-details', { state: { basicInfo: basicInfo } })
        
    }

    const handleError=(e)=>{
        setRequiredField({...requiredField, propertyType:e.target.value})
    }

    return (
        <>
        <Header/>
            {/* Basic info Container */}
            <section className='basic-info-container'>

                {/* Basic info left section */}
                <section className='basic-info-left'>

                    {/* left-article-1 */}
                    <article>
                        <div className='basic-info-title'>Property Type <span className='required-field'>*</span></div>
                        <select className='basic-info-values' onChange={(e) => {handleError(e); basicInfo.current.propertyType = e.target.value}} name="" id="select-property">
                            <option value="">Select Property Type</option>
                            <option value="flat">Flat</option>
                            <option value="house">House</option>
                            <option value="plot">Plot</option>
                        </select>
                    </article>

                    {/* left-article-2 */}
                    <article>
                        <div className='basic-info-title'>Price</div>
                        <input className='basic-info-values' onChange={(e) => basicInfo.current.price = e.target.value} type="text" placeholder='Example: 10000' />
                    </article>

                    {/* left-article-3 */}
                    <article>
                        <div className='basic-info-title'>Property Age</div>
                        <select className='basic-info-values' onChange={(e) => basicInfo.current.propertyAge = e.target.value} name="" id="select-property-age">
                            <option value="0">Select Property Age</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </article>

                    {/* left-article-4 */}
                    <article>
                        <div className='basic-info-title'>Property Description</div>
                        <input className='basic-info-values' onChange={(e) => basicInfo.current.propertyDescription = e.target.value} type="text" />
                    </article>

                </section>

                {/* Basic info right section */}
                <section className='basic-info-right'>

                    {/* right-article-1 */}
                    <article>
                        <div className='basic-info-title'>Negotiable</div>
                        <select className='basic-info-values' onChange={(e) => basicInfo.current.negotiable = e.target.value} name="" id="select-property-negotiable">
                            <option  value="false">Select Negotiable</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                    {/* right-article-2 */}
                    <article>
                        <div className='basic-info-title'>Ownership</div>
                        <select className='basic-info-values' onChange={(e) => basicInfo.current.ownership = e.target.value} name="" id="select-property-ownership">
                            <option value="null">Select Ownership</option>
                            <option value="owned">Owned</option>
                            <option value="lease">Lease</option>
                        </select>
                    </article>

                    {/* right-article-3 */}
                    <article>
                        <div className='basic-info-title'>Property Approved</div>
                        <select className='basic-info-values' onChange={(e) => basicInfo.current.propertyApproved = e.target.value} name="" id="property-approved">
                            <option value="false">Property Approved</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                    {/* right-article-4 */}
                    <article>
                        <div className='basic-info-title'>Bank Loan</div>
                        <select className='basic-info-values' onChange={(e) => basicInfo.current.bankLoan = e.target.value} name="" id="bank-loan">
                            <option value="false">Bank Loan</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </article>

                </section>
            </section>

            {/* Basic info button section */}
            <section className='basic-info-btn'>

                {/* Handle the error, if the mandotary field is empty */}
                {isValied && <div style={{ color: "red" }}>Please fill the mandatory fields</div>}

                <button className='basic-info-cancel-btn' onClick={()=>navigation('/propertyDetails')}>Cancel</button>
                <button className='basic-info-save-btn' onClick={handleSave}>Save & Continue</button>
            </section>
        </>
    )
}

export default BasicInfo
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './basic-info.css'


const BasicInfo = () => {

    const navigation = useNavigate()
    const handleSave = () => {
        navigation('/property-details')
    }
    return (
        <>
            <section className='basic-info-container'>
                <section className='basic-info-left'>
                    <article>
                        <div className='basic-info-title'>Property Type</div>
                        <select className='basic-info-left-value' name="" id="select-property">
                            <option value="">Select Property Type</option>
                            <option value="flat">Flat</option>
                            <option value="house">House</option>
                            <option value="plot">Plot</option>
                        </select>
                    </article>

                    <article>
                        <div className='basic-info-title'>Price</div>
                        <input type="text" placeholder='Example: 10000' />
                    </article>

                    <article>
                        <div className='basic-info-title'>Property Age</div>
                        <select className='basic-info-left-value' name="" id="select-property-age">
                            <option value="">Select Property Age</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </article>

                    <article>
                        <div className='basic-info-title'>Property Description</div>
                        <input type="text" />
                    </article>

                </section>

                <section className='basic-info-right'>
                <article>
                        <div className='basic-info-title'>Negotiable</div>
                        <select className='basic-info-left-value' name="" id="select-property-negotiable">
                            <option value="">Select Negotiable</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    <article>
                        <div className='basic-info-title'>Ownership</div>
                        <select className='basic-info-left-value' name="" id="select-property-ownership">
                            <option value="">Select Ownership</option>
                            <option value="">....</option>
                            <option value="">....</option>
                        </select>
                    </article>

                    <article>
                        <div className='basic-info-title'>Property Approved</div>
                        <select className='basic-info-left-value' name="" id="property-approved">
                            <option value="">Property Approved</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    <article>
                        <div className='basic-info-title'>Bank Loan</div>
                        <select className='basic-info-left-value' name="" id="bank-loan">
                            <option value="">Bank Loan</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                </section>
            </section>
            <section className='basic-info-btn'>
                    <button className='basic-info-cancel-btn'>Cancel</button>
                    <button className='basic-info-save-btn' onClick={handleSave}>Save & Continue</button>
                </section>
        </>
    )
}

export default BasicInfo
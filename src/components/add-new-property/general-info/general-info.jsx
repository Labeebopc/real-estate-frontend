import React from 'react'
import { useNavigate } from 'react-router-dom'
import './general-info.css'


const GeneralInfo = () => {

    const navigation = useNavigate()
    const handleSave = () => {
        navigation('/location-info')
    }

    const handlePrevious = () => {
        navigation('/property-details')
    }

    return (
        <>
        <section className='general-info-container'>
                <section className='general-info-left'>
                    <article>
                        <div className='general-info-title'>Name</div>
                        <select className='general-info-left-value' name="" id="select-name">
                            <option value="">Name</option>
                            <option value="owner">Owner</option>
                            <option value="broker">Broker</option>
                        </select>
                    </article>

                    <article>
                        <div className='general-info-title'>Posted By</div>
                        <select className='general-info-left-value' name="" id="select-posted">
                            <option value="">Posted By</option>
                            <option value="owner">Owner</option>
                            <option value="broker">Broker</option>
                        </select>
                    </article>

                    <article>
                        <div className='general-info-title'>Featured Package</div>
                        <select className='general-info-left-value' name="" id="select-package">
                            <option value="">Featured Package</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                </section>

                <section className='general-info-right'>
                <article>
                        <div className='general-info-title'>Mobile</div>
                        <input type="text" placeholder='Enter Mobile Number' />
                    </article>

                <article>
                        <div className='general-info-title'>Sale Type</div>
                        <select className='general-info-left-value' name="" id="select-saletype">
                            <option value="">Sale Type</option>
                            <option value="rent">Rent</option>
                            <option value="ownership">Ownership</option>
                        </select>
                    </article>

                    <article>
                        <div className='general-info-title'>PPD Package</div>
                        <select className='general-info-left-value' name="" id="select-ppd">
                            <option value="">PPD Package</option>
                            <option value="">....</option>
                            <option value="">....</option>
                        </select>
                    </article>

                </section>
            </section>
            <section className='general-info-btn'>
                    <button className='general-info-previous-btn' onClick={handlePrevious}>Previous</button>
                    <button className='general-info-save-btn' onClick={handleSave}>Save & Continue</button>
                </section>
        </>
    )
}

export default GeneralInfo
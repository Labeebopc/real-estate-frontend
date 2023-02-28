import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './basic-info.css'


const BasicInfo = () => {
    // For navigating onClick
    const navigation = useNavigate()

    // Since we dont want realtime UI update, we are using useRef as performance optimization
    const basicInfo = useRef({
        propertyType: "",
        negotiable: "",
        price: "",
        ownership: "",
        propertyAge: "",
        propertyApproved: "",
        propertyDescription: "",
        bankLoan: ""
    })

    // Navigating into next route, and passing data by useLocation state
    const handleSave = () => {
        navigation('/property-details', { state: { basicInfo: basicInfo } })
    }

    return (
        <>
            {/* Basic info Container */}
            <section className='basic-info-container'>

                {/* Basic info left section */}
                <section className='basic-info-left'>

                    {/* left-article-1 */}
                    <article>
                        <div className='basic-info-title'>Property Type</div>
                        <select className='basic-info-left-value' onChange={(e) => basicInfo.current.propertyType = e.target.value} name="" id="select-property">
                            <option value="">Select Property Type</option>
                            <option value="flat">Flat</option>
                            <option value="house">House</option>
                            <option value="plot">Plot</option>
                        </select>
                    </article>

                    {/* left-article-2 */}
                    <article>
                        <div className='basic-info-title'>Price</div>
                        <input onChange={(e) => basicInfo.current.price = e.target.value} type="text" placeholder='Example: 10000' />
                    </article>

                    {/* left-article-3 */}
                    <article>
                        <div className='basic-info-title'>Property Age</div>
                        <select className='basic-info-left-value' onChange={(e) => basicInfo.current.propertyAge = e.target.value} name="" id="select-property-age">
                            <option value="">Select Property Age</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </article>

                    {/* left-article-4 */}
                    <article>
                        <div className='basic-info-title'>Property Description</div>
                        <input onChange={(e) => basicInfo.current.propertyDescription = e.target.value} type="text" />
                    </article>

                </section>

                {/* Basic info right section */}
                <section className='basic-info-right'>

                    {/* right-article-1 */}
                    <article>
                        <div className='basic-info-title'>Negotiable</div>
                        <select className='basic-info-left-value' onChange={(e) => basicInfo.current.negotiable = e.target.value} name="" id="select-property-negotiable">
                            <option value="">Select Negotiable</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    {/* right-article-2 */}
                    <article>
                        <div className='basic-info-title'>Ownership</div>
                        <select className='basic-info-left-value' onChange={(e) => basicInfo.current.ownership = e.target.value} name="" id="select-property-ownership">
                            <option value="">Select Ownership</option>
                            <option value="owned">Owned</option>
                            <option value="lease">Lease</option>
                        </select>
                    </article>

                    {/* right-article-3 */}
                    <article>
                        <div className='basic-info-title'>Property Approved</div>
                        <select className='basic-info-left-value' onChange={(e) => basicInfo.current.propertyApproved = e.target.value} name="" id="property-approved">
                            <option value="">Property Approved</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                    {/* right-article-4 */}
                    <article>
                        <div className='basic-info-title'>Bank Loan</div>
                        <select className='basic-info-left-value' onChange={(e) => basicInfo.current.bankLoan = e.target.value} name="" id="bank-loan">
                            <option value="">Bank Loan</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </article>

                </section>
            </section>

            {/* Basic info button section */}
            <section className='basic-info-btn'>
                <button className='basic-info-cancel-btn'>Cancel</button>
                <button className='basic-info-save-btn' onClick={handleSave}>Save & Continue</button>
            </section>
        </>
    )
}

export default BasicInfo
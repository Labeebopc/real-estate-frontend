import React from 'react'
import { useLocation } from 'react-router-dom';
import './header.css'


const Header = () => {

    // Getting the current path by useLocation
    const tab = useLocation().pathname
    
    return (
        <>
            {/* Header container */}
            <section className='header-container'>

                {/* Header heading */}
                <h4>ADD NEW PROPERTY</h4>

                {/* Headings */}
                <section className='tab-headings'>

                    {/* Heading-1 */}
                    <article className={tab === "/basic-info" ? "tab-heading-selected" : "tab-heading"}>
                        <span>1</span>
                        <span>Basic Info</span>
                    </article>

                    {/* Heading-2 */}
                    <article className={tab === "/property-details" ? "tab-heading-selected" : "tab-heading"}>
                        <span>2</span>
                        <span>Propety Details</span>
                    </article>

                    {/* Heading-3 */}
                    <article className={tab === "/general-info" ? "tab-heading-selected" : "tab-heading"}>
                        <span>3</span>
                        <span>General Info</span>
                    </article>

                    {/* Heading-4 */}
                    <article className={tab === "/location-info" ? "tab-heading-selected" : "tab-heading"}>
                        <span>4</span>
                        <span>Location Info</span>
                    </article>
                </section>

            </section>

        </>
    )
}

export default Header
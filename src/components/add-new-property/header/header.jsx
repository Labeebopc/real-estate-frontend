import React from 'react'
import { useLocation } from 'react-router-dom';
import './header.css'


const Header = () => {
    const tab = useLocation().pathname
    return (
        <>
            <section className='header-container'>
                <h4>ADD NEW PROPERTY</h4>
                <section className='tab-headings'>

                    <article className={tab === "/" ? "tab-heading-selected" : "tab-heading"}>
                        <span>1</span>
                        <span>Basic Info</span>
                    </article>

                    <article className={tab === "/property-details" ? "tab-heading-selected" : "tab-heading"}>
                        <span>2</span>
                        <span>Propety Details</span>
                    </article>

                    <article className={tab === "/general-info" ? "tab-heading-selected" : "tab-heading"}>
                        <span>3</span>
                        <span>General Info</span>
                    </article>

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
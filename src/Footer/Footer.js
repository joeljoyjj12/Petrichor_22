import React, { useEffect,useState } from 'react'
import Contact_content from './Contact_content'
import "./Footer.css"

function Footer() {
    return (
        <>
            <Contact_content />
            <div className="copyright_footer">
                <div className="cpy_text">© Petrichor 2022, IIT Palakkad</div>
            </div>
        </>
    )
}

export default Footer



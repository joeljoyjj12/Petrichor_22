import React from 'react'
import Timer from "./Timer.js"
function Countdown() {
    return (
        <div className="ayush_countdown_body">
            <div className="ayush_countdown_App">
            <div className="ayush_countdown_container">
            <h1>
                Website
                <br />
                Coming Soon
            </h1>
            {/* <Timer /> */}
            <Timer />
            </div>
        </div>
        </div>
    )
}

export default Countdown

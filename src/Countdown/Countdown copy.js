import React from 'react'
import Timer from "./Timer.js"
// import final from "./final_.mp4"
function Countdown() {
    return (
        <div className="ayush_countdown_body jerry_cd_full" style={{zIndex:"100",position:"fixed"}}>
            <div className="ayush_countdown_App jerry_cd_full" >
            <div className="ayush_countdown_container">
            <h1 style={{marginBottom:"30px",transform:"translateY(-10px)",fontWeight:"500"}}>
                Website
                <br />
                Coming Soon
            </h1>
            <Timer />
            </div>
        </div>
        </div>
    )
}

export default Countdown

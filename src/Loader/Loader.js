import React from 'react'
import "./Loader.css"
import Lv from "./loader_vid.webm"
function Loader() {
    return (
        <div className='je_loader_container'>
            <div className="je_loader_inside">
                <video width="1520" height="680" loop muted Autoplay="autoplay" playsinline  className="je_video1">
                <source src={Lv} type="video/webm"/>
                </video>
            </div>
        </div>
    )
}

export default Loader

import React from 'react'
import Timer from "./Timer.js"
import promo from "./promo.mp4"
function Countdown() {
    React.useEffect(()=>{
        let aa=document.querySelector(".progress");
        aa.style.display="none";
    },[])

    return (
        <div className="ayush_countdown_body jerry_cd_full" style={{zIndex:"100",position:"fixed"}}>
            

            <div className="cd_new_cd">
< video class="cd_video" style={{width:"100vw",height:"100vh"}} width="1500px" height="100%" muted Autoplay="autoplay" playsinline  loop>
                <source src={promo} type="video/webm"/>
            </video>
            </div>

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

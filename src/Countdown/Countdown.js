import React ,{useState} from 'react'
import Timer from "./Timer.js"
import promo from "./promo.mp4"
import coming_soon_mobile from "./assets/coming_soon_mobile.mp4"
import coming_soon_website from "./assets/coming_soon_website.mp4"

function Countdown() {
    let [isphone,setIsphone]=useState(false);
    React.useEffect(()=>{
        let aa=document.querySelector(".progress");
        aa.style.display="none";

        // let w = window.screen.width;
        let  w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        console.log(w);
        if(w>650)
            setIsphone(false);
        else    
            setIsphone(true);
    },[])

    return (
        <div className="ayush_countdown_body jerry_cd_full" style={{zIndex:"100",position:"fixed"}}>
            

            <div className="cd_new_cd">
           {isphone?
             < video class="mobile_promo_video" 
                // style={{width:"100vw",height:"100vh"}} width="1500px" height="100%" 
             muted Autoplay="autoplay" playsinline  loop>
                <source src={coming_soon_mobile} type="video/webm"/>
            </video>
           :
           < video class="lap_promo_video" 
                //    style={{width:"100vw",height:"100vh"}} width="1500px" height="100%" 
           muted Autoplay="autoplay" 
            playsinline  
           loop>
                <source src={coming_soon_website} type="video/webm"/>
            </video>
           }
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

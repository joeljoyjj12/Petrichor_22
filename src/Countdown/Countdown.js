import React ,{useState} from 'react'
import Timer from "./Timer.js"
import promo from "./promo.mp4"
import coming_soon_mobile from "./assets/coming_soon_mobile.mp4"
import coming_soon_website from "./assets/coming_soon_website.mp4"
import test_video from "./assets/test_video.mp4"

function Countdown() {
    let [isphone,setIsphone]=useState(false);
    let [vs,setVs]=useState();
    let w;
    let h;
    let [width,setWidth]=useState("100px");
    let [height,setHeight]=useState("100px");
    React.useEffect(()=>{
        let aa=document.querySelector(".progress");
        aa.style.display="none";

        // let w = window.screen.width;;
          w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
          h = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
         w=window.innerWidth;
         h=window.innerHeight;
        console.log(w);
        if(w>650)
        {
            setVs(coming_soon_website);   
            setIsphone(false);
        }
        else    
        {
            setVs(test_video);   
            setIsphone(true);
        }

        let ws=w.toString();
        ws+="px";
        setWidth(ws);

        
        let hs=h.toString();
        hs+="px";
        setHeight(hs);

        console.log(hs+"");
        console.log(ws);

    },[])


    return (
        <div className="ayush_countdown_body jerry_cd_full" style={{zIndex:"100",position:"fixed"}}>
            

            <div className="cd_new_cd">
            < video class="mobile_promo_video" 
            width={width}
            height={height}
            muted Autoplay="autoplay"
             playsinline  
             src={isphone?coming_soon_mobile:coming_soon_website}
             loop>
           </video>
            </div>

            <div className="ayush_countdown_App jerry_cd_full" >
            <div className="ayush_countdown_container">
            <h1 style={{marginBottom:"30px",transform:"translateY(-10px)",fontWeight:"500"}}>
                Website
                <br />
                Coming Soon
                {/* {isphone?"phone":"lap"}  */}
            </h1>
            <Timer />
            </div>
        </div>
        </div>
    )
}

export default Countdown

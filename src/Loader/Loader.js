import { dotCase } from 'dot-case'
import React, { useEffect } from 'react'
import "./Loader.css"
import Lv from "./loader_vid.webm"
function Loader({isover,setIsover}) {

    useEffect(()=>{
        let a =document.querySelector(".je_video2");
      
        a.onended = function (e){
            console.log("over video man");
            let b=document.querySelector(".je_loader_container");
            b.style.display="none";
            setIsover(true);
        }

    },[])

    return (
        <div className='je_loader_container'>
            <div className="je_loader_inside">
                <video width="1520" height="680" muted Autoplay="autoplay" playsinline  className="je_video2">
                <source src={Lv} type="video/webm"/>
                </video>
            </div>
        </div>
    )
}

export default Loader

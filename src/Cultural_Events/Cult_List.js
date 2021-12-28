import React, { useEffect } from 'react'
import Bg from "./Bg/Bg.js"
import Events_data from "../data/Events_data.js"
import "./Cult_card.css"
function Cult_List() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    let click_hander =(v)=>{
        
       
        // let b=document.querySelector(".je_cult_card_image_container"+v);
        // // b.style.overflow="auto";
        // // // b.style.position="absolute";
        // // // b.style.top="0";
        
        // let a =document.querySelector(".je_cult_card_image"+v);
        // // a.style.height="500px";
        // // a.style.width="100vw";
        // // a.style.position="absolute";
        // // a.style.top="0";


        // let oc =document.querySelector(".je_cult_card"+v);
        // // oc.style.position="absolute";
        // oc.style.width="100vw";
        // oc.style.height="100vh";
        // let v1=oc.offsetTop;
        // let v2=oc.offsetLeft;
        // v1=v1+vh;
        // console.log("top is "+v1);
        // console.log("left is "+v2);
        // oc.style.transform="translateX(-"+v2+"px)";
        // oc.style.transform="translateY(-"+v1+"px)";



        let hid =document.querySelector(".je_cult_card_image_hidden"+v);
        hid.style.top=0;
        hid.style.left=0;

    }

    useEffect(()=>{

    },[])

   
    return (
        <div className='je_cult_list_container '>
            {/* <Bg /> */}
            {Events_data.map((a,b)=>{
             return(
                <div className={`je_cult_card je_cult_card${b}`} onClick={()=>click_hander(b)}>
                        <div className={`je_cult_card_image_container je_cult_card_image_container${b}`} >
                            <img src={a.picture} alt="" className={`je_cult_card_image je_cult_card_image${b}`} />
                            <img src={a.picture} alt="" className={` je_cult_card_image_hidden je_cult_card_image_hidden${b}`} />
                            <div className='je_cult_card_hover_description'>{a.hover_description}</div>
                        </div>
                        <div className='je_cult_card_title'>{a.name}</div> 
                        <div className={`je_hidden_btn je_cult_hidden_redirect_button${b}`}><a href={`/cultural_events/event?id=${b}`}>here</a> </div>
                    </div>
             )   
            })}

        </div>
    )
}

export default Cult_List


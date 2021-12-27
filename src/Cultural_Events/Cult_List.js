import React from 'react'
import Bg from "./Bg/Bg.js"
import Events_data from "../data/Events_data.js"
import "./Cult_card.css"
function Cult_List() {
   

    let click_hander =(v)=>{

       
        let b=document.querySelector(".je_cult_card_image_container"+v);
        // b.style.overflow="auto";
        // // b.style.position="absolute";
        // // b.style.top="0";
        
        let a =document.querySelector(".je_cult_card_image"+v);
        // a.style.height="500px";
        // a.style.width="100vw";
        // a.style.position="absolute";
        // a.style.top="0";

    }

   
    return (
        <div className='je_cult_list_container '>

            {Events_data.map((a,b)=>{
             return(
                <div className='je_cult_card'>
                        <div className={`je_cult_card_image_container je_cult_card_image_container${b}`} onClick={()=>click_hander(b)}>
                            <img src={a.picture} alt="" className={`je_cult_card_image je_cult_card_image${b}`} />
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


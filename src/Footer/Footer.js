import React, { useEffect,useState } from 'react'
import Contact_content from './Contact_content'
import "./Footer.css"

function Footer() {
    let ht="200px";
    let [hfind,setHfind]=useState("");

    let [shouldIgocrazy, setShouldIgocrazy]=useState(true);
    useEffect(()=>{

        let e=document.querySelector(".bottom_contact");
        let oh=e.offsetHeight;
        let m1=e.style.marginTop;
        let m2=e.style.marginBottom;
        let ans =oh+m1+m2;

        
        
        console.log("ans is "+ans);
        let ans2=toString(ans)+"px";
        setHfind(ans2);
        let d1=document.querySelector("#jery_footer_id");
        let d2=document.querySelector("#jerry_footer_crazy_support_id");
        console.log(d1);
        console.log(d2);
        d2.style.height=ans2;
        d1.style.height=ans2;

        let w = window.innerWidth;
        let h = window.innerHeight;
        if(w>800)
            setShouldIgocrazy(true);
        else
            setShouldIgocrazy(false);
    },[]);
    
    return (
            <>
                       
            <div id="jery_footer_id" classname="jerry_footer_crazy" style={shouldIgocrazy?
                    {position:"fixed",background:"transparent",width:"100vw",bottom:"0px",zIndex:"-5",height:hfind}:
                    {}
            }>
            <Contact_content />
            </div>

            {shouldIgocrazy?
            <div id="jerry_footer_crazy_support_id" className="jerry_footer_crazy_support" style={{background:"transparent",height:"243px",width:"100vw",zIndex:"-5"}}>ss</div>
            : <div id="jerry_footer_crazy_support_id" ></div>}
            {/* <div className="jerry_footer_crazy_support" style={{background:"green",height:hfind,width:"100vw",zIndex:"-5"}}></div> */}
            {/* <div id="jerry_footer_crazy_support_id" className="jerry_footer_crazy_support" style={{background:"transparent",height:"242px",width:"100vw",zIndex:"-5"}}></div> */}
      
        </>
    )
}

export default Footer

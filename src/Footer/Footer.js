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
        let ans2=ans.toString();
        // ans2+="px !important";
        ans2+="px";
        let d1=document.querySelector("#jery_footer_id");
        let d2=document.querySelector("#jerry_footer_crazy_support_id");
        d2.style.height=ans2;
        d1.style.height=ans2;
        console.log(d2.style.height+ " our ans2 is "+ans2+ " our ans is "+ans);

        // let w = window.innerWidth;
        // let h = window.innerHeight;
        // if(w>800)
        //     setShouldIgocrazy(true);
        // else
        //     setShouldIgocrazy(false);

        window.addEventListener('scroll',(e)=>{
            let element=document.querySelector("#jery_footer_id");
            let cr=element.getBoundingClientRect();


        })

        document.addEventListener("click",(e)=>{
            console.log(e.target.classList);
            console.log(e.target.classname);
        });
    },[]);
    
    return (
            <>
                       
          
                       <div id="jerry_footer_crazy_support_id" className="jerry_footer_crazy_support" style={shouldIgocrazy?{background:"rgba(0,0,255,0.4)",height:"543px",width:"100vw",zIndex:"20"}:null}></div>
            
            <div id="jery_footer_id" classname="jerry_footer_crazy" 
                // style={shouldIgocrazy?{position:"fixed",background:"transparent",width:"100vw",bottom:"0px",zIndex:"-1",height:hfind}:{}}
                style={shouldIgocrazy?{position:"fixed",background:"transparent",width:"100vw",bottom:"0px",zIndex:"-1",height:hfind}:{}}
                    >
                    <Contact_content />
            </div>




      
        </>
    )
}

export default Footer

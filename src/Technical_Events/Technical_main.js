import React,{useEffect, useState} from 'react'
import "./Technical.css"
import Pic from "./assets/pic1.jpg"
import Technical_Events_data from "../data/Technical_Events_data.js"
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
  import { Redirect } from 'react-router';
function Technical_main() {
    
    useEffect(()=>{
        
        let rr=document.querySelector(".je_tech_hidden_redirect_button1");
        window.addEventListener('keydown',(e)=>{
            if(e.keyCode==65)
            {
                console.log(rr);
                rr.click();

            }
        })
    },[])
    
    return (
        <div className='je_tech_section1'>
                <img src={Pic} alt="" className='je_tech_banger_pic' />
                <div className="je_tech_banger_title_contaier">Technical Events</div>

        <div className="je_tech_section2">
            {
                Technical_Events_data.map((a,b)=>{
                    return <Card2 a={a} b={b}/>

                })
            }
        </div>
        </div>

    )
}

function Card2({a,b}){
    let[jerry_triggered,setJerry_triggered]=useState(false);

    let click2=(q,e)=>{
        e.preventDefault();
        console.log(e);
        console.log("aaaaaaaaaaaaaaaaaaaaaaa");
        let hh=document.querySelector(".je_tech_card_image_hidden"+q);
        let distanceFromTop = hh.getBoundingClientRect().top; 
        let vt=hh.offsetTop;
        let vl=hh.offsetLeft;

        let ans = vt -distanceFromTop;

        console.log("distnace form the top is "+ distanceFromTop);
        console.log("top is "+vt);
        console.log("left is "+vl);
        hh.style.opacity="1";
        hh.style.top=ans+"px";
        hh.style.left=0;
        hh.style.width="100vw";
        hh.style.height="100vh";


        // let redb=document.querySelector(".jerry_btn_sumlate"+q);
        let redb=document.querySelector(".jerry_clicker"+q);
        
        setTimeout(()=>{
            window.scrollTo(0,0);
            setJerry_triggered(true);
        },600);
    }


    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            let e=document.querySelector(".je_tech_card_image"+b);
            let d=document.querySelector(".relative_class"+b);
            
            let vt=d.offsetTop;
            let vl=d.offsetLeft;
            console.log(vt+"  "+vl);
    
            let c=document.querySelector(".je_tech_card_image_hidden"+b);
            c.style.top=vt+"px";
            c.style.left=vl+"px";
            let nw=d.clientWidth;
            let nh=d.clientWidth;
    //        console.log("clwe" +nw +"  "+nh);
            c.style.width=nw+"px";
      
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []); // Empty array ensures that effect is only run on mount
    useEffect(()=>{

        let e=document.querySelector(".je_tech_card_image"+b);
        let d=document.querySelector(".relative_class"+b);
        
        let vt=d.offsetTop;
        let vl=d.offsetLeft;
        console.log(vt+"  "+vl);

        let c=document.querySelector(".je_tech_card_image_hidden"+b);
        c.style.top=vt+"px";
        c.style.left=vl+"px";
        let nw=d.clientWidth;
        let nh=d.clientWidth;
//        console.log("clwe" +nw +"  "+nh);
        c.style.width=nw+"px";

        
    },[])
    
    
    
    return(
        <div 
        // className='je_tech_card_wrapper'
        >
            <div className={`je_tech_card je_tech_card${b}`} onClick={(e)=>click2(b,e)}>
                        <div className={`je_tech_card_image_container je_tech_card_image_container${b}`} >
                            <div className={`relative_class relative_class${b}`}>
                                <img src={a.picture} alt="" className={`je_tech_card_image je_tech_card_image${b}`} />
                                <div className='je_tech_card_hover_description'>{a.hover_description}</div>
                            </div>
                            <img src={a.picture} alt="" className={`je_tech_card_image_hidden je_tech_card_image_hidden${b}`} />
                        </div>
                        <div className='je_tech_card_title'>{a.name}</div> 
                        {/* <div className={`je_hidden_btn je_tech_hidden_redirect_button${b}`}><Link className={`jerry_btn_sumlate${b}`} to={`/cultural_events/event?id=${b}&tech=true`}>here</Link> </div> */}
                        {/* <div ><Link className={`jerry_btn_sumlate${b}`} to={`/cultural_events/event?id=${b}&tech=true`}> <div className={`jerry_clicker${b}`}>home_new</div> </Link></div> */}
            </div>
            {jerry_triggered?<Redirect push to={`/technical_events/event?id=${b}&tech=1`} />:null}
                    {/* <div><Link className={`je_tech_hidden_redirect_button${b}`} to={`/cultural_events/event?id=${b}&tech=true`}>home</Link></div> */}
        </div>
    )
}

export default Technical_main

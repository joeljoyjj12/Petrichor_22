import React, { useEffect } from 'react'
import { Big_Sponsor,Sponsor,Partner } from '../data/Sponsor_data'
import "./Sponsors.css"
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function Sponsors() {


    useEffect(()=>{

        let w = window.innerWidth;


        gsap.registerPlugin(ScrollTrigger);
        let w1=document.querySelector(".je_partner_white_arjun")
        let t1=document.querySelector(".je_partner_title_exclusive")
        
        let s0=document.querySelector(".je_partner_item_scroll0")
        let s1=document.querySelector(".je_partner_item_scroll1")
        let s2=document.querySelector(".je_partner_item_scroll2")
        let s3=document.querySelector(".je_partner_item_scroll3")
        let s4=document.querySelector(".je_partner_item_scroll4")
        let s5=document.querySelector(".je_partner_item_scroll5")
        let s6=document.querySelector(".je_partner_item_scroll6")
        // let w3=document.querySelector(".m1l_p3")
    

        





        if(w>1000)
        {
            var e1=gsap.timeline({
                scrollTrigger:{
                    trigger:w1,
                    start:"top bottom-=350",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
    
            var e2=gsap.timeline({
                scrollTrigger:{
                    trigger:s3,
                    start:"top bottom-=200",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
            e1
            // .from(t1,{opacity:0,x:30,color:"red",duration:0.8,delay:0.2},[]) 
               .from(s0,{opacity:0,x:-30,color:"red",duration:0.8,delay:0.2},[])
               .from(s1,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[])
               .from(s2,{opacity:0,x:30,color:"red",duration:0.8,delay:0.2},[])
               ;
               
            e2.from(s3,{opacity:0,x:-30,color:"red",duration:0.8,delay:0.2},[]) 
               .from(s4,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]) 
               .from(s5,{opacity:0,x:30,color:"red",duration:0.8,delay:0.2},[]) 
            ;
        }
        else if (w>600)
        {
            var e1=gsap.timeline({
                scrollTrigger:{
                    trigger:w1,
                    start:"top bottom-=400",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);

            var e2=gsap.timeline({
                scrollTrigger:{
                    trigger:w1,
                    start:"top bottom-=600",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
    
            var e3=gsap.timeline({
                scrollTrigger:{
                    trigger:s3,
                    start:"top bottom-=400",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
            e1
               .from(s0,{opacity:0,x:-30,color:"red",duration:0.8,delay:0.2},[])
               .from(s1,{opacity:0,x:30,color:"red",duration:0.8,delay:0.2},[])
               ;
            e2
               .from(s2,{opacity:0,x:-30,color:"red",duration:0.8,delay:0.2},[])
               .from(s3,{opacity:0,x:30,color:"red",duration:0.8,delay:0.2},[])
               ;
               
            e3.from(s4,{opacity:0,x:-30,color:"red",duration:0.8,delay:0.2},[]) 
               .from(s5,{opacity:0,x:30,color:"red",duration:0.8,delay:0.2},[]) 
            ;
        }
        else{

            var e0=gsap.timeline({
                scrollTrigger:{
                    trigger:s0,
                    start:"top bottom-=200",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
            var e1=gsap.timeline({
                scrollTrigger:{
                    trigger:s1,
                    start:"top bottom-=200",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);

            var e2=gsap.timeline({
                scrollTrigger:{
                    trigger:s2,
                    start:"top bottom-=200",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
    
            var e3=gsap.timeline({
                scrollTrigger:{
                    trigger:s3,
                    start:"top bottom-=200",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);

            var e4=gsap.timeline({
                scrollTrigger:{
                    trigger:s4,
                    start:"top bottom-=200",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
            var e5=gsap.timeline({
                scrollTrigger:{
                    trigger:s5,
                    start:"top bottom-=200",
                    toggleActions:"play none none none",
                    paused:true,
                    // scrub:0.2
                }        
            },[]);
            

            e0.from(s0,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]);
            e1.from(s1,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]);
            e2.from(s2,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]);
            e3.from(s3,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]);
            e4.from(s4,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]);
            e5.from(s5,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]);
        }



        
        
        
        let d0=document.querySelector(".je_sbi_scroll");
        let d1=document.querySelector(".je_sponsor_item0");
        let d2=document.querySelector(".je_sponsor_item1");

        var e0=gsap.timeline({
            scrollTrigger:{
                trigger:d0,
                start:"top bottom-=200",
                toggleActions:"play none none none",
                paused:true,
                // scrub:0.2
            }        
        },[]);
        var e1=gsap.timeline({
            scrollTrigger:{
                trigger:d1,
                start:"top bottom-=200",
                toggleActions:"play none none none",
                paused:true,
                // scrub:0.2
            }        
        },[]);
        var e2=gsap.timeline({
            scrollTrigger:{
                trigger:d2,
                start:"top bottom-=200",
                toggleActions:"play none none none",
                paused:true,
                // scrub:0.2
            }        
        },[]);
        e0.from(d0,{opacity:0,y:30,color:"red",duration:0.8,delay:0.2},[]);
        e1.from(d1,{opacity:0,x:-30,color:"red",duration:0.8,delay:0.2},[]);
        e2.from(d2,{opacity:0,x:30,color:"red",duration:0.8,delay:0.2},[]);

    },[])


    return (
        <div className='je_sponsor_container'>
            <div className='je_top_pad'></div>



            <div className='je_partner_title'>Sponsors</div>

            <div className="je_big_sponsor_container">
                {Big_Sponsor.map((a,b)=>{
                    return(
                    <div className="je_partner_item je_sponsor_item je_sbi_scroll">
                        <a href={a[1]} className="je_aa"><img src={a[0]} className=' je_sponsor_item_pic'></img></a>
                        <div className='je_sponsor_item_title'><a href={a[1]} className=" je_aa">{a[2]}</a></div>
                    </div>
                        )
                })}

            </div>





            <div className="je_partner_container je_small_sponsor_container">
                {Sponsor.map((a,b)=>{
                    return(
                    <div className={`je_partner_item je_sponsor_item je_sponsor_item${b}`}>
                        <a href={a[1]} className="je_aa"><img src={a[0]} className=' je_sponsor_item_pic'></img></a>
                        <div className='je_sponsor_item_title'><a href={a[1]} className=" je_aa">{a[2]}</a></div>
                    </div>
                        )
                })}

            </div>


            <div className="je_partner_white_arjun">
            
            <div className='je_partner_title je_partner_title_exclusive ' style={{color:"black"}}>Official Partners</div>
            <div className="je_partner_container">
                {Partner.map((a,b)=>{
                    return(
                    <div className={`je_partner_item je_partner_item_scroll je_partner_item_scroll${b}`}>
                        <a href={a[1]} className="je_aa"><img src={a[0]} className='je_parnter_item_pic' style={{height:a[3],width:a[4]}}></img></a>
                        <div className='je_parnter_item_title '><a href={a[1]} className="je_aa">{a[2]}</a></div>
                    </div>
                        )
                })}

            </div>

            </div>
        </div>
    )
}

export default Sponsors

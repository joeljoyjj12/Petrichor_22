import React, { useEffect, useState } from 'react'
import background1 from "./background1.JPG"
import Logo1 from "./Logo1.png"
import "./Home.css"
// import LogoAnim2 from "./video_data/Logo_anim1.m4v"
import Gau from "./gautham.jpg"
import Jj from "./video_data/cropped_logo_home.webm"

function Home2() {

    const[isbtn1hover,setIsbtn1hover]=useState(false);
    const[isbtn2hover,setIsbtn2hover]=useState(false);

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            // console.log(e.target.id);
            if(e.target.id=="je_home_btn2")
            {
                setIsbtn2hover(true);
                console.log("btn2");
            }
            else
                setIsbtn2hover(false);

            if(e.target.id=="je_home_btn1")
            {
                setIsbtn1hover(true);
                console.log("btn1");
            }
            else
                setIsbtn1hover(false);
            
        })
    },[])


    return (
        <div className="je_zi_1">
            <div className="je-home-container ">
                <div className="je_home_section1">
                    <img src={Gau}  className='je_home_bkg_pic' alt="" />
                    {/* <img src={Logo1} className='je_home_logo' alt="" /> */}
                    <Jje/>
                    <div className="je_home_info">

                        <div className='je_home_line1 je_home_s1_center'>Petrichor '22</div>
                        <div className='je_home_line2 je_home_s1_center'>EXPLORE. EXPERIENCE. EVOLVE</div>

                        <div className="je_home_button_sec je_home_s1_center">
                            <div className='je_home_btn1 je_home_btn'>Events</div>
                            <div className='je_home_btn2 je_home_btn'>Register</div>

                            {/* <div id="je_home_btn1" className={isbtn1hover?"je_home_s1_btn2_hover je_home_btn":isbtn2hover?"je_home_s1_btn2_hover je_home_btn":"je_home_s1_btn1_hover je_home_btn"}>Events</div> */}
                            {/* <div id="je_home_btn2" className={isbtn2hover?"je_home_s1_btn1_hover je_home_btn":isbtn1hover?"je_home_s1_btn1_hover je_home_btn":"je_home_s1_btn2_hover je_home_btn"}>Register</div> */}
                        
                        </div>
                    </div>
                </div>     
            </div>
            <Buffer1 a={"nicee"}/>
            <Buffer1 a={"seconddddddddd"}/>
            <Buffer1 a={"third"}/>
            <Buffer1 a={"4"}/>
            <Buffer1 a={"five"}/>
        </div>
    )
}

function Buffer1({a}){
    return (
        <div style={{backgroundColor:"white"}}>
            <div> this is petrichor 2022 {a} {a}</div>
            <div> this is petrichor 2022 {a}</div>
            <div> this is petrichor 2022 {a}</div>
            <div> this is petrichor 2022 {a}</div>
            <div> this is petrichor 2022 {a}</div>
            <div> this is petrichor 2022 {a}</div>
            <div> this is petrichor 2022 {a}</div>
            <div> this is petrichor 2022 {a}</div>
            <div> this is petrichor 2022 {a}</div>
        </div>
    )
}

function Jje(){
    const[getW,setW]=useState(1260);
    const[getH,setH]=useState(1160);
    useEffect(()=>{

        let height2 = window.innerHeight;
        let width2 = window.innerWidth;
        
        console.log(width2);
        console.log(height2);

        let f1=1.6;
        
        // if(width2<1500)
        // f1=1.4;
        // else if (width2<1400)
        //     f1=1.3;
        // else if (width2<1400)
        //     f1=1.2;
        // else if (width2<1400)
        //     f1=1.1;
        
        let f2=f1/2;
        height2 = f1*window.innerHeight;
        width2 = f2*window.innerWidth;

        setW(width2);
        setH(height2);
        window.addEventListener("resize", handleResize);

    },[])

    let handleResize = ()=>{
        let height2 = window.innerHeight;
        let width2 = window.innerWidth;
        
        console.log(width2);
        console.log(height2);

        let f1=1.6;
        let f2=f1/2;

        if(width2<1400)
            f1=1.7;
        else if(width2<1300)
            f1=1.8;
        else if(width2<1200)
            f1=1.9;
        else if(width2<1100)
            f1=2;

        if(width2<1400)
        f1=(1400-width2)/1000+1.7;
     

        f2=f1/2;
        height2 = f1*window.innerHeight;
        width2 = f2*window.innerWidth;


        document.querySelector(".je_video1").style.top="-100vw";

        setW(width2);
        setH(height2);
    }

    return(
        <div className='test11'>
            <video width="250" height="450" loop muted Autoplay="autoplay" playsinline  className="je_video1">
            {/* <video width={getW} height={getH} loop muted Autoplay="autoplay" playsinline  className="je_video1"> */}
            <source src={Jj} type="video/webm"/>
            </video>
        </div>
    )
}
export default Home2

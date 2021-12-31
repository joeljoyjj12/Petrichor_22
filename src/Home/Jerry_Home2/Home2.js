import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import background1 from "./background1.JPG"
import Logo1 from "./Logo1.png"
import "./Home.css"
import "./Home_2.css"
import "./bg_anim.css"
// import LogoAnim2 from "./video_data/Logo_anim1.m4v"
import Gau from "./gautham.jpg"
import Ayush_about from "./ayush.png"
import Sponsor1 from "./sponsor1.png"
import Sponsor2 from "./sponsor2.png"
import Sponsor from "./sbi-logo-33230.png"
import Person from "./person.jpg"
import img_c1 from './Images/contact_1.jpg'
import img_c2 from './Images/contact_2.jpg'
import img_c3 from './Images/contact_3.jpg'
import Fb from "./facebook.png"
import Insta from "./instagram.png"
import Twit from "./twitter.png"
import Yt from "./youtube.png"
import Ln from "./linkedin.png"
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
        Aos.init({duration: 2000});
    },[])


    return (
        <div>
            <div className="je-home-container">
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



            {/* About */}
            <div class="ayush_about ">
               
                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-10 col-sm-11 abt_left">
                        <h1 id="ayush_heading_about"><span style={{color:"rgb(152 9 9)"}}>A</span>SIDE FROM THE TEAM</h1>
                        <div class="ayush_all" data-aos="fade-right">
                            <div id="ayush_content_about">We welcome you to the official website of <span style={{color:"rgb(152 9 9)",fontWeight:"800"}}>Petrichor</span> - the annual techno-cultural fest of IIT Palakkad. We are a team composed of the students of IIT Palakkad and have been actively involved over the last few months in bringing together our very fest online fest. Keeping up with the changing times and themed around “<span style={{color:"rgb(152 9 9)",fontWeight:"700"}}>Evolution</span>”,  Petrichor is being organized online this year. With just the perfect mix of cultural and technical events, we plan on making Petrichor’22 an unforgettable experience for you. To ensure that you don’t miss out on anything, do check out the website as all the information related to the fest will be available here. So stay tuned and brace yourselves for the journey of a lifetime with Petrichor’22 <br /> - <span style={{color:"rgb(152 9 9)"}} className='tagline_home'>A Virtual Extravaganza Like Never Before!</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 about_img_col" data-aos="fade-left">
                        
                    </div>

                </div>
            </div>










            {/* Contact */}


            <div class="home_contact">
                
                <h1 id="home_heading_contact">Contact Us</h1>
                <div className="row justify-content-around contact_box">
    
                    <div className="col-md-4 col-lg-3 col-6 col-xs-5">
                        <div className="hm_img_box">
                            <img src={img_c1} alt="" className='c_img_home' />
                            <div className="hm_cont_name">
                                Arjun V
                            </div>
                            <div className="hm_cont_detail">
                                +91 7688987767
                            </div>
                            <div className="hm_cont_desig">
                                Fest Coordinator
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 col-6 col-xs-5">
                        <div className="hm_img_box">
                            <img src={img_c3} alt="" className='c_img_home' />
                            <div className="hm_cont_name">
                                Arjun V
                            </div>
                            <div className="hm_cont_detail">
                                +91 7688987767
                            </div>
                            <div className="hm_cont_desig">
                                Fest Coordinator
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 col-6 col-xs-5">
                        <div className="hm_img_box">
                            <img src={img_c2} alt="" className='c_img_home' />
                            <div className="hm_cont_name">
                                Arjun V
                            </div>
                            <div className="hm_cont_detail">
                                +91 7688987767
                            </div>
                            <div className="hm_cont_desig">
                                Fest Coordinator
                            </div>
                        </div>
                    </div>

                </div>

                <div class="ayush_button_div d-flex flex-row justify-content-start">
                    <div className="core_hm_btn w-90 mx-auto">
                        <button class="ayush_button">Meet The Team</button>
                    </div>
                </div>
            </div>
            







            <div class="ayush_footer">
                <div class="ayush_all_icons">
                <a href="https://www.facebook.com/petrichor.iitpkd/" target="_blank"><img  src={Fb}  class='ayush_icons' alt="" /></a>
                <a href="https://www.instagram.com/petrichor.iitpkd/?hl=en" target="_blank"><img  src={Insta}  class='ayush_icons' alt="" /></a>
                <a href="https://twitter.com/petrichor_iit" target="_blank"><img  src={Twit}  class='ayush_icons' alt="" /></a>
                <a href="https://www.youtube.com/channel/UCygVXXH-y4IVVhCK3xkAVGg" target="_blank"><img  src={Yt}  class='ayush_icons' alt="" /></a>
                <a href="https://in.linkedin.com/company/petrichor-iitpkd" target="_blank"><img  src={Ln}  class='ayush_icons' alt="" /></a>
                
                
                
                </div>
            </div>
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

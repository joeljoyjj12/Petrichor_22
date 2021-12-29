import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import background1 from "./background1.JPG"
import Logo1 from "./Logo1.png"
import "./Home.css"
// import LogoAnim2 from "./video_data/Logo_anim1.m4v"
import Gau from "./gautham.jpg"
import Ayush_about from "./ayush.png"
import Sponsor1 from "./sponsor1.png"
import Sponsor2 from "./sponsor2.png"
import Sponsor from "./sbi-logo-33230.png"
import Person from "./person.jpg"
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
            <div class="ayush_about">
                <h1 id="ayush_heading_about">About Us</h1>
                <div class="ayush_all">
                <div data-aos="fade-right" id="ayush_content_about">Petrichor denotes the pleasant smell that accompanies the first rain after a long spell of warm weather; the novelty and freshness of a new beginning. Petrichor, the annual technocultural fest of IIT Palakkad, is a golden opportunity to bring out the artist or techie in you and to meet exponents from various technical, cultural and social fields. <br /> <br /> 
                Petrichor made its mark with its inception in October 2018, and has continued to build on its glory, one step at a time. Our aspirations of a techno-cultural fusion have yet again brought us to another endeavour- Petrichor 2020. 
                 <p>
            </p></div>
                <img data-aos="fade-left" src={Ayush_about}  class='ayush_about_pic' alt="" />
                
                </div>
            </div>
            <div class="ayush_sponsors">
            <div class="ayush_heading_div"><h1 id="ayush_heading_sponsor">TITLE SPONSOR</h1></div>
            <div class="ayush_all">
                <img src={Sponsor} data-aos="zoom-in" class='ayush_sponsors_pic' id="ayush_last" alt="" />
            </div>
            </div>

            <div class="ayush_contact">
            <div class="ayush_heading_div"><h1 id="ayush_heading_contact">Contact Us</h1></div>
            <div class="ayush_all">
            <div class="ayush_content">
            <div class="ayush_content-overlay"></div>
            <img class="ayush_content-image" src={Person} />
            <div class="ayush_content-details ayush_fade">
                <h3 class="ayush_content-title">Name: xyxyxy</h3>
                <p class="ayush_content-text">Details: dfjnjkjd</p>
            </div>
            </div>

            <div class="ayush_content">
            <div class="ayush_content-overlay"></div>
            <img class="ayush_content-image" src={Person} />
            <div class="ayush_content-details ayush_fade">
                <h3 class="ayush_content-title">Name: xyxyxy</h3>
                <p class="ayush_content-text">Details: dfjnjkjd</p>
            </div>
            </div>


            <div class="ayush_content">
            <div class="ayush_content-overlay"></div>
            <img class="ayush_content-image" src={Person} />
            <div class="ayush_content-details ayush_fade">
                <h3 class="ayush_content-title">Name: xyxyxy</h3>
                <p class="ayush_content-text">Details: dfjnjkjd</p>
            </div>
            </div>

            </div>
            <br/>
            <div class="ayush_button_div"><button class="ayush_button">Core Team</button></div>
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

import React,{useEffect} from 'react'
import './About.css'
import YouTubePlayer from 'youtube-player';
import ReactPlayer from 'react-player/youtube'
import Aos from "aos";
import "aos/dist/aos.css"

function About() {

    useEffect(()=>{
        Aos.init({duration: 1000});
        if(window.innerWidth<576){
            document.querySelector(".abt_aft_1").setAttribute('data-aos-delay',2800);
        }
    },[])

    return (
        <div className='about_main_box'>

            <div className='abt_us_head'>
                <h1 className='text-center abt_us_h1'>About Us</h1>
            </div>
            <div className="abt_para_1 abt_para" data-aos="fade-left">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-10 col-md-9">
                        <span style={{color:"#f77575"}}>Petrichor</span> is the annual techno-cultural fest of IIT Palakkad. It was founded in 2018 by a group of insightful students with the goal of providing an unprecedented platform for the convergence of talent, ideas and knowledge. Petrichor has lived up to its potential and now witnesses students from far and wide coming together to showcase their cultural flair or technical expertise as they leave the monotony of everyday life behind and celebrate the freshness of new dawns. 
                    </div>
                </div>
            </div>

            <div className="abt_after_movie ">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-11 col-md-9">
                        <div className="player-wrapper abt_aft_1" data-aos="fade-right" data-aos-duration="1000" >
                        <ReactPlayer 
                            className='react-player'
                            url='https://www.youtube.com/watch?v=Cje58qFyzkE' 
                            width='100%' 
                            height='100%'
                            controls={true} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="abt_para_2 abt_para" data-aos="zoom-in">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-10 col-md-9">
                        Petrichor has surely come a long way from the first physical fest held in the year 2018. It increased both its reach and scale which is evident in the rise from 6 cultural and 5 technical events to 17 cultural and 9 technical events in 2020. Even during the pandemic, Petrichor didn’t disappoint and remained active, bringing to its audience a plethora of cultural and technical events. Be it the online workshops including but not limited to Fusion 360 and Cloud computing, 
                        <span style={{color:"#f77575"}}> Calico Kultura</span> - a glamorous ‘virtual modeling contest’ or “#Quarantunes”- an initiative to bring together music enthusiasts, Petrichor went all out. “ Indoor soiree”- a set of cultural and technical events held in online mode received a whooping 800+ registrations from 290+ colleges spread across 20+ states. 
                    </div>
                </div>
            </div>

            <div className="abt_after_movie">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-11 col-md-9">
                        <div className="player-wrapper" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <ReactPlayer 
                            className='react-player'
                            url='https://www.youtube.com/watch?v=wWWYz4iUpus' 
                            width='100%' 
                            height='100%'
                            controls={true} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="abt_para_3 abt_para">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-10 col-md-9" data-aos="zoom-in" data-aos-duration="500">
                        Petrichor went one step further in September, 2021 as it hosted the very first edition of its flagship event, 
                        <span style={{color:"#f77575"}}> National Technology and Entrepreneurship Summit</span>. Themed  around “Technology for Tomorrow” and having 8 eminent speakers, NTES was a huge success. 
                        In 2022, Petrichor is once again back as we host our very first online fest. So, stay tuned for the experience of a lifetime as we bring to you just the perfect amalgamation of technology and innovation.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About

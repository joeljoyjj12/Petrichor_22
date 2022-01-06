import React,{useEffect} from 'react'
import './Workshops.css'
import Card from './Card.js'

import img1 from "./Images/ic_engine.jpg"
import img2 from "./Images/robot.jpg"

import Aos from "aos";
import "aos/dist/aos.css"


function Workshops_joel(){
    useEffect(()=>{
        Aos.init({duration: 700});
    },[])

    return (
        <div style={{paddingTop:"8vh",paddingBottom:"10vh"}}>
            <div className="row justify-content-center workshop_card">
                <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-up" data-aos-delay="300">
                    <Card 
                    title="energy to mobility : Basics of ic engines"
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#B2F296"
                    deadline="20/01/2022"
                    date="JANUARY 22-23"
                    speaker="Dr. Pramod Kuntikana"
                    price="650"
                    reg_link="https://dare2compete.com/workshop/energy-to-mobility-basics-of-ic-engines-petrichor-indian-institute-of-technology-iit-palakkad-251848"
                    bg={img1}
                    />
                </div>
                <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-down">
                    <Card 
                    title="introduction to wheeled robot modeling and simulation in python"
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#FFE800"
                    deadline="20/01/2022"
                    date="JANUARY 22-23"
                    speaker="Dr. Vijay Muralidharan"
                    price="650"
                    reg_link="https://dare2compete.com/workshop/robotics-introduction-to-wheeled-robot-modelling-and-simulations-via-python-petrichor-indian-institute-of-techn-251849"
                    bg={img2}
                    />
                </div>
                {/* <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-up">
                    <Card 
                    title="Introduction to Fusion 360"
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#6D92DC"
                    deadline="15/01/2022"
                    date="JANUARY 19-27"
                    speaker="AUTODESK"
                    price="400"
                    reg_link=""
                    bg={"https://gds-storage-prd.s3.amazonaws.com/fusion-360/170419/6747/33f0ed1f/thumbnails/raasrendering-52be6558-e3af-42a8-aa97-028b558336d8-3500-3500.jpg"}
                    />
                </div>
                <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-down">
                    <Card 
                    title="Machine Learning "
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#E7A012"
                    deadline="15/01/2022"
                    date="JANUARY 19-27"
                    speaker="Dr. Sahely Bhadra"
                    price="700"
                    bg={"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F966248982%2F960x0.jpg%3Ffit%3Dscale"}
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Workshops_joel
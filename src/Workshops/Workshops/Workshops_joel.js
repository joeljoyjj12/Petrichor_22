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
        <div style={{paddingTop:"15vh"}}>
            <div className="row justify-content-center workshop_card">
                <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-up" data-aos-delay="300">
                    <Card 
                    title="energy to mobility : Basics of ic engines"
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#B2F296"
                    deadline="15/01/2022"
                    date="JANUARY 19-27"
                    speaker="Dr. Anand TNC"
                    price="300"
                    bg={img1}
                    />
                </div>
                <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-down">
                    <Card 
                    title="wheeled robot modeling and simulation in python"
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#FFE800"
                    deadline="15/01/2022"
                    date="JANUARY 19-27"
                    speaker="Dr. Anand TNC"
                    price="300"
                    bg={img2}
                    />
                </div>
                <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-up">
                    <Card 
                    title="Basics of Modelling using Fusion 360"
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#6D92DC"
                    deadline="15/01/2022"
                    date="JANUARY 19-27"
                    speaker="AUTODESK"
                    price="400"
                    bg={img1}
                    />
                </div>
                <div className="col-7 col-lg-7 col-md-8 col-sm-9 col-10" data-aos="flip-down">
                    <Card 
                    title="Machine Learning "
                    desc="Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
                    color="#E7A012"
                    deadline="15/01/2022"
                    date="JANUARY 19-27"
                    speaker="Dr. Anand TNC"
                    price="700"
                    bg={img2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Workshops_joel
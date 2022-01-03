import React from 'react'
import './Cult_tech.css'
import { Link } from 'react-router-dom'
import guitar from "./Images/guitar.jpg"
import technical1 from "./Images/technical1.jpg"

function Cult_tech() {
    return (
        <>
            <div className="cult_tech_box je_100width" style={{overflowX:"hidden"}}>
                <h1 id="home_heading_contact" className=' event_head_home'><span style={{color:"rgb(201 23 23)"}}>E</span>vents</h1>
                <div className="row justify-content-around wrap_cult_tech je_100width">
                    
                    <div className="col-lg-5 col-md-10 col-sm-10 col-11 home_evnt home_tech_1" data-aos='flip-right' data-aos-duration="900">
                        <Link style={{textDecoration:"none"}} to="/technical_events">
                            <div className="event_descr_home row justify-content-center align-items-center">
                                <img src={technical1} className="jerry_ct_pic jerry_ct_pic_s2" alt="" />
                                <h1 className="home_event_desc ">Technical</h1>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-5 col-md-8 col-sm-9 col-11 home_evnt home_cult_1" data-aos="flip-left" data-aos-duration="900">
                        <Link style={{textDecoration:"none"}} to="/cultural_events">
                            <div className="event_descr_home row justify-content-center align-items-center">
                                <img src={guitar} className="jerry_ct_pic jerry_ct_pic_s1" alt="" />
                                <h1 className="home_event_desc ">Cultural</h1>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Cult_tech

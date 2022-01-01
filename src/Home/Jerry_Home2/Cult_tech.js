import React from 'react'
import './Cult_tech.css'
import { Link } from 'react-router-dom'

function Cult_tech() {
    return (
        <>
            <div className="cult_tech_box">
                <h1 id="home_heading_contact" className=' event_head_home'><span style={{color:"rgb(201 23 23)"}}>E</span>vents</h1>
                <div className="row justify-content-around wrap_cult_tech">
                    
                    <div className="col-lg-5 col-md-6 col-sm-6 col-11 home_tech_1" data-aos='flip-right'>
                        <Link style={{textDecoration:"none"}} to="/technical_events">
                            <div className="event_descr_home row justify-content-center align-items-center">
                                <div>Technical</div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-5 col-md-6 col-sm-6 col-11 home_cult_1" data-aos="flip-left">
                        <Link style={{textDecoration:"none"}} to="/cultural_events">
                            <div className="event_descr_home row justify-content-center align-items-center">
                                    <div>Cultural</div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Cult_tech

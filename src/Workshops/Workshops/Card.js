import React,{useEffect} from 'react'
import './Card.css'
import Button from "./Button.js"

import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

function Card(props) {

    return (
        <>
        <div className="row justify-content-between wk_row_main">

            <div className="col-sm-6 col-12 card_img_wk" style={{backgroundImage:`url(${props.bg})`}}>    
                
            </div>

            <div className="col-sm-6 col-12" style={{padding:"0"}}>
                <div className="card card_desc_wk " style={{maxWidth: "50rem"}}>
                    <div className="card-header card-header-wk" style={{color:`${props.color}`}}>{props.title}</div>
                    <div className="card-body card-body-wk">

                        <p className="card_para_wk" style={{color:"#B1B1B1"}}>{props.desc} </p>
                        
                        <div className="card_name_wk"> <FontAwesomeIcon icon={faUserCircle} style={{color:`${props.color}`}}  />  
                            <span className='name_text_wk'>{props.speaker}</span>
                        </div>

                        <div className="date_wk"> <FontAwesomeIcon icon={faCalendarAlt} style={{color:`${props.color}`}}  />  
                            <span className='date_text_wk'>{props.date}</span>
                        </div>

                        <div className="reg_fee_wk" style={{color:"#DBDBDB"}}>
                            registration fee : &nbsp;
                            <FontAwesomeIcon icon={faRupeeSign} style={{width:"17px",height:"17px"}} /> 
                            {props.price}
                        </div>
                        <div className="reg_before neonText" style={{color:"#DD2F2F"}}>
                            Register Before {props.deadline}
                        </div>

                        
                        <button class="card_button_wk" style={{background:"none",borderColor:`${props.color}`}}> <a href={props.reg_link} style={{color:`${props.color}`}} target="_blank">Register now</a> </button>
                        


                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Card

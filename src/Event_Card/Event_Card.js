import React, { useEffect, useState } from 'react'
import "./Event_Card.css" ;
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Cultural_Events_data from '../data/Cultural_Events_data.js';
import Technical_Events_data from '../data/Technical_Events_data.js';

import { gsap } from "gsap";
import "./General_Animator.css"
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Event_Card() {
    let query = useQuery();
    let [id,setId]=useState(parseInt(query.get("id")));
    let [istech,setIstech]=useState(parseInt(parseInt(query.get("tech"))));
    let valid =true;
    useEffect(()=>{
        let val =parseInt(query.get("id"));
        setId(val);
        let v2 =parseInt(query.get("tech"));
        setIstech(v2);
        console.log("id is "+val + "tech is it "+v2);

        if(v2==1)
            valid = id < Technical_Events_data.length ? true : false
        else
            valid = id < Cultural_Events_data.length ? true : false
    },[])

    useEffect(()=>{
        let dl1 =document.querySelector(".ga_layer1");
        let dl2 =document.querySelector(".ga_layer2");
        let dl3 =document.querySelector(".ga_layer3");
        let dl_black =document.querySelector(".ga_layer_black");
        // gsap.to(dl3, { x: "-=100vw" ,duration:0})
        gsap.to(dl1, { x: "-=220vw" ,duration:0.8,delay:1,ease:"power1.out"})
        gsap.to(dl2, { x: "-=220vw" ,duration:0.8,delay:1.05,ease:"power1.out"})
        gsap.to(dl_black, { x: "-=100vw" ,duration:0.4,delay:1.05,ease:"power1.out"})
        gsap.to(dl_black, { x: "-=120vw" ,duration:0.4,delay:1.85,ease:"power1.out"})
        gsap.to(dl3, { x: "-=220vw" ,duration:0.8,delay:1.45,ease:"power1.in"})
        // gsap.to(dl3, { x: "-=100vw" ,duration:0.5,delay:2,ease:"power1.in"})
    },[])

    return (
        <>
        {/* <div className="general_animator_container">

        <div className="general_animator">
            <div className="ga_cont ga_layer1"></div>
            <div className="ga_cont ga_layer_black"></div>
            <div className="ga_cont ga_layer2"></div>
            <div className="ga_cont ga_layer3"></div>
        </div>
        </div> */}

        <div className="event_card_main">
            {valid?
            istech==1?<Main_stuff id ={id} data={Technical_Events_data[id]} istech={istech} /> : <Main_stuff id ={id} data={Cultural_Events_data[id]} istech={istech} /> 
            :
            <div>sorry Event not found </div>
            }
        </div>
        </>
    )
}

function Main_stuff({id,data,istech}){
    return(
        <div>
            <div className="jj_event_pic_container">
                <img src={data.picture} alt="" className="jj_card_pic" />
                    <div className="jj_event_pic_container_back">
                        <Link to={istech==1?"/technical_events":"/cultural_events"}>
                        {/* <Link to="/technical_events"> */}
                            <AiOutlineArrowLeft style={{color:"white", fontSize:"25px"}} />
                        </Link>
                    </div>
                <div className="jj_event_pic_container_title1" >{data.name} </div>
                <div className="jj_event_pic_container_button" ><a className="jj_clean_a" href={data.registeration_link} target="_blank"> register here </a></div>
            </div>

            <div className="jj_event_block1">

                <div className="jj_event_block1_left"> 01  <strong> {data.name} </strong> </div>
                <div className="jj_event_block1_right"> 
                {
                    data.description.map((a,c)=>(
                        <>
                         {c== 0 ?
                         <div className="jj_event_block1_bold ">{a} </div>:
                         <div className="jj_event_block1_des">{a}</div>}
                         <br />
                         </>
                    ))
                }
                {data.extra_link?<div className="jj_event_block1_des"><a className="je_aa" href={data.extra_link}>Click here for the <div style={{color:"red", display:"inline"}}>video</div></a></div>:null}
    
                </div>
            </div>

                {/* block2 --> taking block 1 and just layering */}
            <div className="jj_event_block1 jj_event_block2">
                <div className="jj_event_block1_left jj_event_block2_left"> 02  <strong> Date </strong> </div>
                <div className="jj_event_block1_right jj_event_block2_right">
                    
                        <div className="jj_event_block1_des  jj_event_block45_gen_text jj_event_block2_des">Start Date :<strong> {data.start_date} </strong> </div>                     
                        <div className="jj_event_block1_des  jj_event_block45_gen_text jj_event_block2_des">End Date &nbsp; : <strong>{data.end_date}  </strong> </div>                     
                     </div>


            </div>

           



{/* this is extra stuff */}
            {data.structure_show?
            
            <div className="jj_event_block1 jj_event_block2">

            <div className="jj_event_block1_left jj_event_block2_left"> 03    <strong> structure </strong> </div>
            <div className="jj_event_block1_right jj_event_block2_right">
                    
            {
                        data.structure.map((a,c)=>{
                            console.log(a)
                            return (
                            <>
                            <div className='je_structure_title'>{a[0]}</div>
                            {a.map((f,g)=>(
                                <>
                                {g==0?null:
                                <>
                                <div className="jj_event_block1_des jj_event_block3_des"> {g}. {f}</div>
                                <br />
                                </>
                                }
                                </>
                            ))}
                            </>
                        )})
            }                   
          </div>
        </div>
           :null}
                {/* block3 which is same as block 2 itseld */}
                <div className="jj_event_block1 jj_event_block2">
                                <div className="jj_event_block1_left jj_event_block2_left"> 04  <strong> Rules </strong> </div>
                                <div className="jj_event_block1_right jj_event_block2_right">
                                    
                                            {
                                    data.rule_book_rules.map((a,c)=>(
                                        <>
                                        <div className="jj_event_block1_des jj_event_block3_des">{c+1}. {a} </div>
                                        <br />
                                        </>
                                    ))
                                }                   
                                    </div>
                            </div>
            {/* bblock 4  --> new 5*/}

            {data.judging_criteria_show?
            
            <div className="jj_event_block1 jj_event_block2">

            <div className="jj_event_block1_left jj_event_block2_left"> {data.structure_show?"05":"04"} <strong> Judging Criteria </strong> </div>
            <div className="jj_event_block1_right jj_event_block2_right">
            {
                        data.judging_criteria.map((a,c)=>(
                            <>
                            <div className="jj_event_block1_des jj_event_block3_des">{c+1}. {a} </div>
                            <br />
                            </>
                        ))
            }                   
          </div>
        </div>
           :null}

{/* prizes_general_text */}

                {/* block 45  added later */}
                <div className="jj_event_block1 jj_event_block2">
                <div className="jj_event_block1_left jj_event_block2_left"> {data.judging_criteria_show&&data.structure_show?"06":data.judging_criteria_show||data.structure_show?"05":"04"}  <strong> Prizes </strong> </div>
                <div className="jj_event_block1_right jj_event_block2_right">
                    

                    {/* <div className="jj_event_block1_des jj_event_block3_des jj_event_block45_des ">{data.prizes_general_text}</div> */}
                    <div className="jj_event_block45_gen_text">{data.prizes_general_text}</div>
                               {
                    data.prizes_in_ascending_order.map((a,c)=>(
                        <>
                         <div className="jj_event_block1_des jj_event_block3_des">{c+1}. {a} </div>
                         <br />
                         </>
                    ))
                }                   
                     </div>
            </div>


           {/* block 5 */}

            {/* oraganiser */}

            <div className="jj_event_block5">
                    <div className="jj_event_block5_button" ><a className="jj_clean_a" href={data.registeration_link} target="_blank"> register here </a></div>
                    <div className="jj_event_block5_red_line"></div>
                    <div className="jj_event_block5_title">Have Questions ? </div>

                    <div className="jj_event_block5_organiser_flex">
                        {data.organiser.map((a,c)=>{
                            return <div className="jj_event_block5_organiser_container">
                                <div className="jj_event_block5_pic_transiter">
                                    <div className="jj_event_block5_organiser_photo_extra_container">
                                        <img src ={a.pic} className="jj_event_block5_organiser_photo" />
                                    </div>
                                    <div className="jj_event_block5_rect">
                                        <div className="jj_event_block5_figure" > </div>
                                            <div className="jj_event_block5_email"> {a.email} </div>
                                    </div>
                                </div>
                                <div className="jj_event_block5_name"> {a.name} </div>
                            </div>
                        })}
                    </div>


                
            </div>

        </div>
    )
}

export default Event_Card

import React, { useEffect, useState } from 'react'
import "./Event_Card.css" ;
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
// import Cult_events from '../data2/Events_data';
import { gsap } from "gsap";
import "./General_Animator.css"
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Event_Card() {
    let query = useQuery();
    let [id,setId]=useState(parseInt(query.get("id")));
    let valid = id < Cult_events.length ? true : false
    useEffect(()=>{
        let val =parseInt(query.get("id"));
        setId(val);
        valid = id < Cult_events.length ? true : false
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
            <Main_stuff id ={id} data={Cult_events[id]} /> :
            <div>sorry Event not found </div>
            }
        </div>
        </>
    )
}

function Main_stuff({id,data}){
    return(
        <div>
            <div className="jj_event_pic_container">
                <img src={data.picture} alt="" className="jj_card_pic" />
                    <div className="jj_event_pic_container_back">
                        <Link to="cultural_events">
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

            {/* block3 which is same as block 2 itseld */}
            <div className="jj_event_block1 jj_event_block2">
                <div className="jj_event_block1_left jj_event_block2_left"> 03  <strong> Rules </strong> </div>
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

            {/* bblock 4 */}

           {data.judging_criteria_show?
            
            <div className="jj_event_block1 jj_event_block2">

            <div className="jj_event_block1_left jj_event_block2_left"> 04  <strong> Judging Criteria </strong> </div>
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
                <div className="jj_event_block1_left jj_event_block2_left"> {data.judging_criteria_show?"05":"04"}  <strong> Prizes </strong> </div>
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
                                    <img src ={a.pic} className="jj_event_block5_organiser_photo" />
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

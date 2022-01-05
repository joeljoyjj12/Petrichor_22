import React,{useEffect} from 'react'
import './Meet_the_Team.css'
import img1 from './Images/img_1.jpg'
import img2 from './Images/img_2.jpg'
import img3 from './Images/img_3.jpg'
import img4 from './Images/img_4.jpg'
import img5 from './Images/img_5.jpg'
import img6 from './Images/img_6.jpg'
import img7 from './Images/img_7.jpg'
import img8 from './Images/img_8.jpg'
import img9 from './Images/img_9.jpg'
import img10 from './Images/img_10.jpg'
import img11 from './Images/img_11.jpg'
import img12 from './Images/img_12.jpg'
import img13 from './Images/img_13.jpg'
import img14 from './Images/img_14.jpg'
import img15 from './Images/img_15.jpg'
import img16 from './Images/img_16.jpg'

import sp_1 from './Images/Supportive heads/sp_1.jpg'
import sp_2 from './Images/Supportive heads/sp_2.jpg'
import sp_3 from './Images/Supportive heads/sp_3.jpg'
import sp_4 from './Images/Supportive heads/sp_4.jpg'
import sp_5 from './Images/Supportive heads/sp_5.jpg'

import web_1 from './Images/Web/web_1.jpeg'
import web_2 from './Images/Web/web_3.jpeg'
import web_3 from './Images/Web/web_3.jpeg'
import web_4 from './Images/Web/web_4.jpg'


function Meet_the_Team() {

    useEffect(()=>{
        var t1=document.querySelector(".core_team_desc_main .container.team_1");
        var t2=document.querySelector(".core_team_desc_main .container.team_2")

        window.scrollTo(0,0);

        window.addEventListener('scroll',()=>{
            let scroll_val=window.scrollY;
           
            if(window.innerWidth>992){
            if(scroll_val<1300)
            t1.style.transform=`translate(0px,${window.scrollY+80}px)`;

            // if(scroll_val>1400 && scroll_val<1530 )
            // t2.style.transform=`translate(0px,${window.scrollY-1400+40}px)`;
            }

        });
    },[])
    return (
        <div>

            {/* Team 1 */}

            <div className="row core_main justify-content-center">
                <div className="col-lg-5 core_team_desc_main ">
                    <div className="container team_1" id="jerry_addon_meet_the_team">
                        <h2 className='core_heading text-center'>CORE</h2>
                        <h2 className='core_heading text-center' style={{transform:"translate(0,-18px)"}}>TEAM</h2>
                        <div className="d-flex justify-content-center">
                            <p className='core_descr '>
                            The people behind the efficient and smooth management of the fest! The Core Team of Petrichor’22 comprises these enthusiastic individuals who believe in working tirelessly to make Petrichor a big success. 
                            </p>    
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 col-11 core_image_main_box">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img1} className='core_img'/>
                            <div className='text-center core_p_name'>Arjun V</div>
                            <div className="core_desig text-center"> Fest Coordinator </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img9} className='core_img'/>
                            <div className='text-center core_p_name'>Sreehari P S</div>
                            <div className="core_desig text-center"> Mentor </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img4} className='core_img'/>
                            <div className='text-center core_p_name'>Keerthana P</div>
                            <div className="core_desig text-center"> Cultural Head</div>
                        </div>

                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img8} className='core_img'/>
                            <div className='text-center core_p_name'>R K Raj Surya</div>
                            <div className="core_desig text-center">Cultural Head</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img5} className='core_img'/>
                            <div className='text-center core_p_name'>Manas Gupta</div>
                            <div className="core_desig text-center"> Technical Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img6} className='core_img'/>
                            <div className='text-center core_p_name'>Manoranjan</div>
                            <div className="core_desig text-center"> Technical Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img7} className='core_img'/>
                            <div className='text-center core_p_name'>Rahul Patidar</div>
                            <div className="core_desig text-center"> Media and Publicity Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img13} className='core_img'/>
                            <div className='text-center core_p_name'>Aleena Paul</div>
                            <div className="core_desig text-center"> Media and Publicity Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img2} className='core_img'/>
                            <div className='text-center core_p_name'>Sai Prakash Vorluvothu</div>
                            <div className="core_desig text-center"> Marketing Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img15} className='core_img'/>
                            <div className='text-center core_p_name'>Josh Ebram Joseph</div>
                            <div className="core_desig text-center">  Marketing Head</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img12} className='core_img'/>
                            <div className='text-center core_p_name'>Gautham Giri</div>
                            <div className="core_desig text-center">Creative Head</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img16} className='core_img'/>
                            <div className='text-center core_p_name'>Rituraj Singh</div>
                            <div className="core_desig text-center">Guest Lecture and Proshow Head</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img11} className='core_img'/>
                            <div className='text-center core_p_name'>Aman Bhargav</div>
                            <div className="core_desig text-center">Finance Head</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img10} className='core_img'/>
                            <div className='text-center core_p_name'>Shrujan Kanabar</div>
                            <div className="core_desig text-center"> Students' General Secretary </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img3} className='core_img'/>
                            <div className='text-center core_p_name'>Himanshu Kumar</div>
                            <div className="core_desig text-center"> Assistant Coordinator </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img14} className='core_img'/>
                            <div className='text-center core_p_name'>Rahul M</div>
                            <div className="core_desig text-center"> Assistant Coordinator </div>
                        </div>
                        
                       

                    </div>
                </div>
            </div>


            {/* Team 2 */}

            <div className="row core_main core_main_2 justify-content-center">
                <div className="col-lg-5 core_team_desc_main core_team_desc_2">
                    <div className="container team_2" id="jerry_addon_meet_the_team">
                        <h2 className='core_heading text-center'>SUPPORTIVE</h2>
                        <h2 className='core_heading text-center' style={{transform:"translate(0,-18px)"}}>HEADS</h2>
                        <div className="d-flex justify-content-center">
                            <p className='core_descr '>
                            A set of creative people who put their all in to support the core team with all their might. The supportive heads handle the various departments which are involved in bringing the very best of Petrichor to the audience. 
                            </p>    
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 col-11 core_image_main_box">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={sp_1} className='core_img'/>
                            <div className='text-center core_p_name'>Antony Jerald</div>
                            <div className="core_desig text-center"> Tech Summit Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={sp_2} className='core_img'/>
                            <div className='text-center core_p_name'>Priyanka Dangwal</div>
                            <div className="core_desig text-center"> Content Creative Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={sp_3} className='core_img'/>
                            <div className='text-center core_p_name'>Abhirami K</div>
                            <div className="core_desig text-center"> Social Initiative Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={sp_4} className='core_img'/>
                            <div className='text-center core_p_name'>Sujit Mandava</div>
                            <div className="core_desig text-center"> Workshop Head</div>
                        </div>

                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={sp_5} className='core_img'/>
                            <div className='text-center core_p_name'>Jeswin Jose</div>
                            <div className="core_desig text-center"> Film And Videography Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={web_3} className='core_img'/>
                            <div className='text-center core_p_name'>Shubham Raj</div>
                            <div className="core_desig text-center"> Web Development Head </div>
                        </div>       

                    </div>
                </div>
            </div>


             {/* Team 3 */}

             <div className="row core_main core_main_2 justify-content-center">
                <div className="col-lg-5 core_team_desc_main core_team_desc_2">
                    <div className="container team_3" id="jerry_addon_meet_the_team">
                        <h2 className='core_heading text-center'>WEBSITE</h2>
                        <h2 className='core_heading text-center' style={{transform:"translate(0,-18px)"}}>TEAM</h2>
                        <div className="d-flex justify-content-center">
                            <p className='core_descr '>
                            The minds behind the wonderful website in front of you today! Our website team is the perfect mix of people who strive for perfection in their work.
                            </p>    
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 col-11 core_image_main_box">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={web_2} className='core_img'/>
                            <div className='text-center core_p_name'>Jerry John Thomas</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={web_1} className='core_img'/>
                            <div className='text-center core_p_name'>Ayush Singh</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={web_4} className='core_img'/>
                            <div className='text-center core_p_name'>Joel Joy</div>
                        </div>        

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Meet_the_Team

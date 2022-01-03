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

import sp_1 from './Images/Supportive heads/sp_1.jpg'
import sp_2 from './Images/Supportive heads/sp_2.jpg'
import sp_3 from './Images/Supportive heads/sp_3.jpg'
import sp_4 from './Images/Supportive heads/sp_4.jpg'
import sp_5 from './Images/Supportive heads/sp_5.jpg'

import web_1 from './Images/Web/web_1.jpeg'


function Meet_the_Team() {

    useEffect(()=>{
        var t1=document.querySelector(".core_team_desc_main .container.team_1");
        var t2=document.querySelector(".core_team_desc_main .container.team_2");
        window.addEventListener('scroll',()=>{
            let scroll_val=window.scrollY;
           
            if(window.innerWidth>992){
            if(scroll_val<1000)
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
                                Just like mycelium we operate as a network organisation. Our team is a beautiful community of nature explorers and medical experts, artists and scientists, meditators and activists who are convinced that the challenges of the future are best addressed by reconnecting with na
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
                            <img src={img3} className='core_img'/>
                            <div className='text-center core_p_name'>Himanshu Kumar</div>
                            <div className="core_desig text-center"> Assistant Coordinator </div>
                        </div>

                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img2} className='core_img'/>
                            <div className='text-center core_p_name'>Sai Prakash Vorluvothu</div>
                            <div className="core_desig text-center"> Marketing Head </div>
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
                            <img src={img9} className='core_img'/>
                            <div className='text-center core_p_name'>Sreehari P S</div>
                            <div className="core_desig text-center"> Mentor </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img10} className='core_img'/>
                            <div className='text-center core_p_name'>Shrujan Kanabar</div>
                            <div className="core_desig text-center"> Students' General Secretary </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img11} className='core_img'/>
                            <div className='text-center core_p_name'>Aman Bhargav</div>
                            <div className="core_desig text-center">Finance Head</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img12} className='core_img'/>
                            <div className='text-center core_p_name'>Gautham Giri</div>
                            <div className="core_desig text-center">Creative Head</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img13} className='core_img'/>
                            <div className='text-center core_p_name'>Aleena Paul</div>
                            <div className="core_desig text-center"> Media and Publicity Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img14} className='core_img'/>
                            <div className='text-center core_p_name'>Rahul M</div>
                            <div className="core_desig text-center"> Assistant Coordinator </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={img15} className='core_img'/>
                            <div className='text-center core_p_name'>Josh Ebram Joseph</div>
                            <div className="core_desig text-center">  Marketing Head</div>
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
                                Just like mycelium we operate as a network organisation. Our team is a beautiful community of nature explorers and medical experts, artists and scientists, meditators and activists who are convinced that the challenges of the future are best addressed by reconnecting with na
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
                            <img src={'data:image/jpeg;base64,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'} className='core_img'/>
                            <div className='text-center core_p_name'>Gautham Giri</div>
                            <div className="core_desig text-center"> Creative Head </div>
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
                                Just like mycelium we operate as a network organisation. Our team is a beautiful community of nature explorers and medical experts, artists and scientists, meditators and activists who are convinced that the challenges of the future are best addressed by reconnecting with na
                            </p>    
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-10 col-11 core_image_main_box">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={'data:image/jpeg;base64,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'} className='core_img'/>
                            <div className='text-center core_p_name'>Arjun V</div>
                            <div className="core_desig text-center"> Fest Coordinator </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={'data:image/jpeg;base64,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'} className='core_img'/>
                            <div className='text-center core_p_name'>Gautham Giri</div>
                            <div className="core_desig text-center"> Creative Head </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={web_1} className='core_img'/>
                            <div className='text-center core_p_name'>Ayush Singh</div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-4 image_box_core">
                            <img src={'data:image/jpeg;base64,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'} className='core_img'/>
                            <div className='text-center core_p_name'>Josh Ebram Joseph</div>
                            <div className="core_desig text-center">  Marketing Head</div>
                        </div>        

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Meet_the_Team

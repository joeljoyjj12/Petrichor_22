import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';
import './Contact_content.css'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Contact_content() {
    const red={color:"red",fontSize:"30px",display:"inline-block",marginBottom:"10px"};
    return (
        <div className="bottom_contact">
             <div className="container social_container1">
                {/* <div> */}
                <div className="row je_footer_container_in contact_info justify-content-around align-items-center"> 
                   
                <div className="je_footer_s1 col-sm-12 col-md-4 col-lg-3 col-8 pt-2 ">
                        <div className="je_contact_address contact_address">
                            <PlaceIcon style={red}/> 
                            <h3>ADDRESS</h3>
                            <address>
                            Indian Institute of Technology Palakkad,
                            Ahalia Integrated Campus,Kozhippara P. O, Palakkad,
                            Kerala, Pin: 678557
                            </address>
                        </div>
                    </div>

                    {/* <div className="footer_disapperer" style={{width:"2px",height:"90px",backgroundColor:"white",transform:"translateY(-30px)"}}></div> */}
                    <div className=" je_footer_s2 col-sm-12 col-md-4 col-lg-3 col-8 pt-2 " >
                        <a href="https://www.facebook.com/petrichor.iitpkd/" className="je_minner" target="_blank" >
                            <FacebookIcon className="icon_social facebook"/>
                          </a>
                        <a href="https://www.instagram.com/petrichor.iitpkd/?hl=en" className="je_minner" target="_blank">
                            <InstagramIcon className="icon_social insta"/>
                        </a>
                        <a href="https://www.linkedin.com/company/petrichor-iitpkd/?originalSubdomain=in"  className="je_minner" target="_blank">
                            <LinkedInIcon className="icon_social linkedin"/>
                        </a>
                        <a href="https://twitter.com/petrichor_iit" target="_blank">
                            <TwitterIcon className="icon_social twitter"/>
                        </a>
                        
                    </div>


                    {/* <div className="footer_disapperer" style={{width:"2px",height:"90px",backgroundColor:"white",transform:"translateY(30px)"}}></div> */}
                    <div className="je_footer_s3 col-sm-12 col-md-4 col-lg-3 col-8 contact_mail pt-2 ">
                        <div className="contact_address" >
                            <EmailIcon style={red}/> 
                            <h3>EMAIL</h3>
                            {/* <div className="jerry_footer_email_flex"> */}
                            <a href="mailto:events.petrichor@iitpkd.ac.in"  id="je_color_red_hover" className="je_aa_footer je_aa je_color_red_hover">events.petrichor@iitpkd.ac.in</a>
                            <a href="mailto:realtions.petrichor@iitpkd.ac.in" id="je_color_red_hover"  className="je_aa_footer je_aa je_color_red_hover">realtions.petrichor@iitpkd.ac.in</a>
                            <a href="mailto:petrichor@iitpkd.ac.in"  id="je_color_red_hover" className="je_aa_footer je_aa ">petrichor@iitpkd.ac.in</a>
                            {/* </div> */}
                        </div>
                    </div>
                   
                    
                </div>
            </div> 
        </div>
    )
}

export default Contact_content

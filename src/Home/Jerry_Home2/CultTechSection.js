import React from 'react'
import "./CultTechSection.css"
import guitar from "./guitar.jpg"
import workshop1 from "./workshop1.jpg"
import technical1 from "./technical1.jpg"
// import technical1 from "./Technical2.jpg"
function CultTechSection() {
    return (
        <div>
            
            {/* type1 */}
            
            <div className="jerry_ct_wrapper">
                <div className="jerry_ct_row1">
                    <div className="je_ct_img_container">
                        <img src={guitar} className="jerry_ct_pic jerry_ct_pic_s1" alt="" />
                        <div className="je_ct_text"><div>Cultural</div> <div>Events</div></div>
                    </div>
    
                    <div className="je_ct_img_container">
                        <img src={technical1} className="jerry_ct_pic jerry_ct_pic_s1" alt="" />
                        <div className="je_ct_text"><div>Technical</div> <div>Events</div></div>
                    </div>
                </div>
                <div className="jerry_ct_row2">
                    <div className="je_ct_img_container">
                        <img src={workshop1} className="jerry_ct_pic jerry_ct_pic_s2" alt="" />
                        <div className="je_ct_text"><div>Workshops</div></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CultTechSection

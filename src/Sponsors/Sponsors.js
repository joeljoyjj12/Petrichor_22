import React from 'react'
import { Sponsor,Partner } from '../data/Sponsor_data'
import "./Sponsors.css"


function Sponsors() {
    return (
        <div className='jj_sponsor_container'>
            <div className='jj_top_pad'></div>
            Sponsor

            
            
            <div className='jj_partner_title'>Official Partners</div>
            <div className="je_partner_container">
                {Partner.map((a,b)=>{
                    return(
                    <div className="je_partner_item">
                        <a href={a[1]} className="je_aa"><img src={a[0]} className='je_parnter_item_pic'></img></a>
                        <div className='je_parnter_item_title'><a href={a[1]} className="je_aa">{a[2]}</a></div>
                    </div>
                        )
                })}

            </div>

        </div>
    )
}

export default Sponsors

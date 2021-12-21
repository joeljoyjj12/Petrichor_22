import React,{useEffect, useState} from 'react'
import "./Navbar.css"
import Hamburger from 'hamburger-react'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";


function Navbar1() {
    
    const [isOpen, setOpen] = useState(false);
    const[d1,setd1]=useState(true);
    const[d2,setd2]=useState(true);
    const[d3,setd3]=useState(true);
    const[d4,setd4]=useState(true);
    const[d5,setd5]=useState(true);
    const[d6,setd6]=useState(true);
    const[d7,setd7]=useState(true);
    const[d8,setd8]=useState(true);

    useEffect(()=>{
        handleResize();
        window.addEventListener("resize", handleResize);
    },[])


    let handleResize = (e)=>{
        let w = window.innerWidth;
        // if(w<1600) setd8(false); else setd8(true);
        if(w<1500) setd8(false); else setd8(true);
        if(w<1300) setd7(false); else setd7(true);
        if(w<1200) setd6(false); else setd6(true);
        if(w<1100) setd5(false); else setd5(true);
        if(w<700) 
        {
            setd4(false);
            setd3(false);
            setd2(false);
            setd1(false);
        }
        else
        {
            setd4(true);
            setd3(true);
            setd2(true);
            setd1(true);
        }
    }

    return (
        <div>
            <div className="je_navbar_outer_container">
                <div className="je_navbar_left_triangle"></div>
                <div className="je_navbar_container">
                        {d1?<div className="je_navbar_item je_navbar_item_current"><Link to="/about/" className="je_link_simp">About</Link></div>:null}
                        {d2?<div className="je_navbar_item je_navbar_item_current"><Link to="/cultural_events/" className="je_link_simp">Cultural</Link></div>:null}
                        {d3?<div className="je_navbar_item je_navbar_item_current"><Link to="/technical_events" className="je_link_simp">Technical</Link></div>:null}
                        {d4?<div className="je_navbar_item je_navbar_item_current"><Link to="/workshops" className="je_link_simp">WorkShops</Link></div>:null}
                        {d5?<div className="je_navbar_item je_navbar_item_current"><Link to="/proshows" className="je_link_simp">Proshows</Link></div>:null}
                        {d6?<div className="je_navbar_item je_navbar_item_current"><Link to="/sponsors" className="je_link_simp">Sponsors</Link></div>:null}
                        {d7?<div className="je_navbar_item"><a target="_blank" href="https://www.petrichor-iitpkd.com/ca-portal/" className="je_link_simp">CA Portal</a></div>:null}
                        {d8?<div className="je_navbar_item"><a target="_blank" href="https://merch.amazon.com/"className="je_link_simp">Merchandise</a></div>:null} 
                        <div  className="je_navbar_item je_navbar_list nav_hover_open">
                            <Hamburger  toggled={isOpen} toggle={setOpen} className="nav_hover_open" data-trigger="hover"/>
                        {isOpen?<div className="je_navbar_hover_list_container nav_hover_open"><Rupesh d1={d1} d2={d2}  d3={d3} d4={d4} d5={d5} d6={d6} d7={d7} d8={d8}/></div>:null}
                        </div>
                </div>
            </div>
        </div>
    )
}

function Rupesh({d1,d2,d3,d4,d5,d6,d7,d8}){
    return (
        <div className='je_navbar_hover_list nav_hover_open'>
            {d1==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>About</div>:null}
            {d2==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>Cultural</div>:null}
            {d3==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>Technical</div>:null}
            {d4==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>WorkShop</div>:null}
            {d5==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>Proshows</div>:null}
            {d6==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>Sponsors</div>:null}
            {d7==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>CA Portal</div>:null}
            {d8==false?<div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>Merchandise</div>:null}
            <div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>About Us</div>
            <div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>Core Team</div>
            <div className='je_navbar_hover_list_item je_navbar_hover_list_underline'>Contact Us</div>
            <div className='je_navbar_hover_list_item '>Subscribe</div>
        </div>
    )

}

export default Navbar1

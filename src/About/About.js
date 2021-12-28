import React, { useEffect } from 'react'
import "./About_main.css"
function About() {
    
    let img_data=["https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    "https://images.unsplash.com/photo-1640610041030-7ac28e1ab318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1640607359697-a4efb6692bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1640576905072-8181534f83ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    // "https://images.unsplash.com/photo-1640177469193-148eeed13e0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    // "https://images.unsplash.com/photo-1640094289612-38cad00d4db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    // "https://images.unsplash.com/photo-1638694093876-a4d42c71545d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    // "https://images.unsplash.com/photo-1638694016431-a8ed9b0b1d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
]

    return (
        <div>
            
                <div className="je_section1">okk</div>


                <div className="je_s2">
                        {img_data.map((a,b)=>{
                            return <Card2 data={a} b={b} />
                        })}

                </div>

        </div>
    )
}


function Card2 ({data,b}){
    
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    let click11 =(b,e)=>{
        let a =document.querySelector(".jee_card_wrapper"+b);
        // let vt=a.offsetTop;
        // let vl=a.offsetLeft;

        // a.style.position="absolute";
        // a.style.top=0;
        // console.log("top is "+vt);
        // console.log("left is "+vl);
        // a.style.left=0;

        // a.style.width=vw+"px";
        // a.style.height="100vh";

        let hh=document.querySelector(".hiden_abs"+b);
        let distanceFromTop = hh.getBoundingClientRect().top; 
        let vt=hh.offsetTop;
        let vl=hh.offsetLeft;

        let ans = vt -distanceFromTop;

        console.log("distnace form the top is "+ distanceFromTop);
        console.log("top is "+vt);
        console.log("left is "+vl);
        hh.style.opacity="1";
        hh.style.top=ans+"px";
        hh.style.left=0;
        hh.style.width="100vw";
        hh.style.height="100vh";
       

    }

    useEffect(()=>{
        let a =document.querySelector(".jee_card_wrapper"+b);
        let vt=a.offsetTop;
        let vl=a.offsetLeft;

        
        let hh=document.querySelector(".hiden_abs"+b);
        hh.style.top=vt+"px";
        hh.style.left=vl+"px";
    },[])

    return(
        <div className={`jee_card_wrapper jee_card_wrapper${b}`} onClick={()=>click11(b)}>
            <img src={data} alt="" className='jee_img' />
            <img src={data} alt="" className={`jee_img hiden_abs${b} hiden_abs`} />
            <div>text</div>
        </div>
    )
}

export default About

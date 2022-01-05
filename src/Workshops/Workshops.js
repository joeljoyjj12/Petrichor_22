import React from 'react'
import Bg from './Images/bg_wk_red.jpg'
// import Bg from './workshop_jerry.jpg'
// import Bg from './workshop_jerry3.jpg'
// import WorkImg from './workshop.jpg'

import Aos from "aos";
import "aos/dist/aos.css"
import './workshop.css'
import { useEffect,useRef,useState } from 'react'
import NET from "vanta/dist/vanta.net.min"
// import GLOBE from "vanta/dist/vanta.globe.min"
import * as THREE from "three"
import Workshops_joel from './Workshops/Workshops_joel';

class Workshops extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
      window.scrollTo(0,0);
    }
    componentDidMount() {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        THREE: THREE,

        mouseControls: false,
        touchControls: false,
        backgroundColor:"#000000",
        color:"#ff0000",
        minHeight:"100",
        scaleMobile: "0.2",
        spacing: 34.00,
        points:19,
        scale:"1",
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
    
    render() {
      
      return <div class="ayush_workshop">
              <div class="ayush_workshop_bg_div" ref={this.vantaRef}>
                {/* <img src={Bg} class="ayush_workshop_bg_img" /> */}
              </div>
              <h1 class="ayush_workshop_heading" >Workshops</h1>
              <div class="ayush-bg" >
              
              <Workshops_joel />
              
              </div>
            </div>
      
    }
  }


  export default Workshops
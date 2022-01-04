import React from 'react'
// import Bg from './ayush_workshop_bg.jpg'
// import Bg from './workshop_jerry.jpg'
// import Bg from './workshop_jerry3.jpg'
// import WorkImg from './workshop.jpg'
import Bg from './workshop_arjun.jpg'

import Aos from "aos";
import "aos/dist/aos.css"
import './workshop.css'
import { useEffect,useRef,useState } from 'react'
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three"
import Workshops_joel from './Workshops/Workshops_joel';

class Workshops extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        THREE: THREE,
        backgroundColor:"#000000",
        color:"#ff0000",
        minHeight:"1000",
        scaleMobile: "0.1",
        scale:"1",
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }
   
    
    render() {
      return <div class="ayush_workshop">
            <div class="ayush_workshop_bg_div"><img src={Bg} class="ayush_workshop_bg_img"/></div>
            <h1 class="ayush_workshop_heading" >Workshops</h1>
            <div class="ayush-bg" ref={this.vantaRef}>
            
            <Workshops_joel />
            
            </div>
            </div>
      
    }
  }


  export default Workshops
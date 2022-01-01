import React from 'react'
import Bg from './ayush_workshop_bg.jpg'
import WorkImg from './workshop.jpg'
import Aos from "aos";
import "aos/dist/aos.css"
import './workshop.css'
import { useEffect,useRef,useState } from 'react'
import NET from "vanta/dist/vanta.net.min"
import * as THREE from "three"

class Workshops extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        THREE: THREE
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
            <div class="ayushwaala-container">
            <div class="ayush-card">
                <img class="ayush-card-img" src={WorkImg} />
                <div class="ayush-card-body">
                <div class="ayush-card-text">
                    <h3 class="ayush-card-head">Title</h3>
                    <p class="ayush-card-content">
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolore
                    <br/>
                    <h3 class="ayush-other-head">Speaker: someone</h3>
                    <h3 class="ayush-other-head">Deadline: some date</h3>
                    <h3 class="ayush-other-head"> Fees: everything you have got</h3>
                    
                    </p>
                </div>
                <button class="ayush-card-button">Register</button>
                </div>
            </div>
            <div class="ayush-card">
                <img class="ayush-card-img" src={WorkImg} />
                <div class="ayush-card-body">
                <div class="ayush-card-text">
                    <h3 class="ayush-card-head">Title</h3>
                    <p class="ayush-card-content">
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolore
                    <br/>
                    <h3 class="ayush-other-head">Speaker: someone</h3>
                    <h3 class="ayush-other-head">Deadline: some date</h3>
                    <h3 class="ayush-other-head"> Fees: everything you have got</h3>
                    
                    </p>
                </div>
                <button class="ayush-card-button">Register</button>
                </div>
            </div>
            <div class="ayush-card">
                <img class="ayush-card-img" src={WorkImg} />
                <div class="ayush-card-body">
                <div class="ayush-card-text">
                    <h3 class="ayush-card-head">Title</h3>
                    <p class="ayush-card-content">
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolore
                    <br/>
                    <h3 class="ayush-other-head">Speaker: someone</h3>
                    <h3 class="ayush-other-head">Deadline: some date</h3>
                    <h3 class="ayush-other-head"> Fees: everything you have got</h3>
                    
                    </p>
                </div>
                <button class="ayush-card-button">Register</button>
                </div>
            </div>
            <div class="ayush-card">
                <img class="ayush-card-img" src={WorkImg} />
                <div class="ayush-card-body">
                <div class="ayush-card-text">
                    <h3 class="ayush-card-head">Title</h3>
                    <p class="ayush-card-content">
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolore
                    <br/>
                    <h3 class="ayush-other-head">Speaker: someone</h3>
                    <h3 class="ayush-other-head">Deadline: some date</h3>
                    <h3 class="ayush-other-head"> Fees: everything you have got</h3>
                    
                    </p>
                </div>
                <button class="ayush-card-button">Register</button>
                </div>
            </div>
            
            </div>
            </div>
            

            </div>

      
      
      
      
      
      
      
      
    }
  }


  export default Workshops
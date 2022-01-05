import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Cultural_main from './Cultural_Events/Cultural_main';
// import Home from './Home/Home';
import Home from './Home/Jerry_Home2/Home2';
// import Navbar from "./Navbar/Navbar"
import Navbar from "./Navbar/Navbar1.js"
import Technical_main from './Technical_Events/Technical_main';
import Meet_the_Team from "./Meet_the_Team/Meet_the_Team"
import Sponsor from "./Sponsors/Sponsors"
import Event_Card from './Event_Card/Event_Card';
import About from "./About/About.js" 
import Workshops from './Workshops/Workshops.js';
import Proshows from "./Proshows/Proshows.js"
import "./App.css"
import { Scrollbars } from 'react-custom-scrollbars';
import About_us from './About_us/About_us';
import Footer from './Footer/Footer';
import Countdown from './Countdown/Countdown';

function App() {
  // const [isover,setIsover]=useState(false);
  const [isover,setIsover]=useState(false);
  const [gotocountdown,Setgotocountdown]=useState(true);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log("Hello");
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);

      document.querySelector(".progress").style.backgroundImage = `conic-gradient(red 0deg,red ${scrollPercentRounded*3.6}deg,rgb(0, 0, 0) ${scrollPercentRounded*3.6}deg)`; 
      document.querySelector(".inside p").innerHTML=`${scrollPercentRounded}%`;
    })
  },[])

  useEffect(()=>{

    let deadline = new Date("Jan 7, 2022 21:00:00").getTime();
    let now = new Date().getTime();
    let t = deadline - now;
    if(t<0)
    {
      Setgotocountdown(false);       
    }
    else{
      Setgotocountdown(true);       

    }

  },[])

  return (
    <Router >
      <Navbar />

      
      <div class="progress">
          <div class="inside">
            <p>0%</p>
          </div>
        </div>
        <Switch>
          <Route  exact path="/" 
                    render={(props) => <Home isover={isover} setIsover={setIsover} /> } 
          />
          <Route  exact path="/home" render={(props) => <Home isover={isover} setIsover={setIsover} /> } 
          />
          <Route  exact path="/about" component={About}/>
          <Route  exact path="/about_us" component={About_us}/>
          <Route exact path="/technical_events" component={Technical_main}/>
          <Route exact path="/technical_events/event" component={Event_Card}/>
          <Route exact path="/cultural_events/" component={Cultural_main}/>
          <Route exact path="/cultural_events/event" component={Event_Card}/>
          <Route exact path="/meet_the_team" component={Meet_the_Team}/>
          <Route exact path="/countdown" component={Countdown}/>
          <Route exact path="/sponsors" component={Sponsor}/>
          <Route exact path="/workshops" component={Workshops}/>
          <Route exact path="/proshows" component={Proshows}/>
          <Redirect from="/cultural_events/*" to="/cultural_events/#" />
          <Redirect from="/technical_events/*" to="/technical_events/#" />
          {/* <Redirect from="*" to="/#" /> */}
        </Switch>
        <Footer />
  </Router>
  )
}




export default App

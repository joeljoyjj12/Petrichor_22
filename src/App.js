import React from 'react'
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

function App() {
  return (
    <div>
    <Router >
      <Navbar />
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/home" component={Home}/>
          <Route  exact path="/about" component={About}/>
          <Route  exact path="/about_us" component={About_us}/>
          <Route exact path="/technical_events" component={Technical_main}/>
          <Route exact path="/technical_events/event" component={Event_Card}/>
          <Route exact path="/cultural_events/" component={Cultural_main}/>
          <Route exact path="/cultural_events/event" component={Event_Card}/>
          <Route exact path="/meet_the_team" component={Meet_the_Team}/>
          <Route exact path="/sponsors" component={Sponsor}/>
          <Route exact path="/workshops" component={Workshops}/>
          <Route exact path="/proshows" component={Proshows}/>
          <Redirect from="/cultural_events/*" to="/cultural_events/#" />
          <Redirect from="/technical_events/*" to="/technical_events/#" />
          <Redirect from="*" to="/#" />
        </Switch>
  </Router>
  </div>
  )
}




export default App

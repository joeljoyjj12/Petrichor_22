import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Cultural_main from './Cultural_Events/Cultural_main';
import Home from './Home/Home';
import Navbar from "./Navbar/Navbar"
import Technical_main from './Technical_Events/Technical_main';
import Meet_the_Team from "./Meet_the_Team/Meet_the_Team"
import Sponsor from "./Sponsors/Sponsors"
import Event_Card from './Event_Card/Event_Card';
function App() {
  return (
    <div>
    <Router >
      <Navbar />
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/home" component={Home}/>
          <Route exact path="/technical_events" component={Technical_main}/>
          <Route exact path="/technical_events/event" component={Event_Card}/>
          <Route exact path="/cultural_events/" component={Cultural_main}/>
          <Route exact path="/cultural_events/event" component={Event_Card}/>
          <Route exact path="/meet_the_team" component={Meet_the_Team}/>
          <Route exact path="/sponsor" component={Sponsor}/>
          <Redirect from="/cultural_events/*" to="/cultural_events/#" />
          <Redirect from="/technical_events/*" to="/technical_events/#" />
          <Redirect from="*" to="/#" />
        </Switch>
  </Router>
  
  </div>
  )
}




export default App

import './App.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { Switch, Route} from "react-router-dom";

import LandingPage from './components/LandingPage';
import DreamForm from './components/DreamForm';
import DreamsContainer from './components/DreamsContainer';
import Dream from './components/Dream';



function App() {

  const [dreams, setDreams] = useState([])


  useEffect(() => {
    fetch('http://localhost:3000/dreams')
    .then(response => response.json())
    .then(apiDreams => setDreams(apiDreams))
  }, []);



  return (
    
    <div className="App">
    <Route exact path="/" component={LandingPage}/>
    <Route path="/new-dream" component={DreamForm}/>
    <Route path="/dreams" component={DreamsContainer}/>
    <Switch>  
    </Switch>
    </div>
  );
}

export default App;

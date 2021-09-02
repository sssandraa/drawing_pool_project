import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar"
import DreamList from "./components/DreamList"

function App() {
  const [dreams, setDreams] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/dreams")
    .then((r) => r.json())
    .then(setDreams)
  }, [])


  return (
    
    <div className="App">
      
      <br></br>
      <br></br>
      <h1> The Dream Pool </h1>
      <br></br>
      <br></br>
      <img src="https://data.whicdn.com/images/266864759/original.gif" alt="gif of a anime pool"/>
      <br>
      </br>
      <br>
      </br>
   <button> Enter </button>
   <BrowserRouter>
    <Switch>
    <Route path="/dreams" component={() => <DreamList dreams={dreams}/>} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

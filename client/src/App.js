import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route} from "react-router-dom";


import LandingPage from './components/LandingPage';
import CreateUserForm from './components/CreateUserForm';
import DreamForm from './components/DreamForm';
import DreamsContainer from './components/DreamsContainer';
import YourDreamsContainer from './components/YourDreamsContainer';

// function notLoggedIn(){

//   const [user, setUser] = useState('')


//   useEffect(() => {
//     fetch('http://localhost:3000/profile', {
//       credentials: 'include',
//       method: 'GET'
//     })
//     .then(response => response.json())
//     .then(useResponse => {
//       console.log("hiiiiiiiii", useResponse)
//       if (!useResponse.error){
//         setUser(useResponse)
//       }
//     })  
//   }, []);

//  return(
//   <Route path="/" render={() => <LandingPage setUser={setUser}/>}/>
//  )
// }

// function isLoggedIn(){
//   const [user, setUser] = useState('')
//   const [dreams, setDreams] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:3000/profile', {
//       credentials: 'include',
//       method: 'GET'
//     })
//     .then(response => response.json())
//     .then(useResponse => {
//       console.log("hiiiiiiiii", useResponse)
//       if (!useResponse.error){
//         setUser(useResponse)
//       }
//     })  
//   }, []);


//   useEffect(() => {
//     fetch('http://localhost:3000/dreams')
//     .then(response => response.json())
//     .then(apiDreams => setDreams(apiDreams))
//   }, []);

//   function handleDelete(dreamid){

//     console.log(dreamid)
//   fetch(`http://localhost:3000/dreams/${dreamid}`, {
//     method: "DELETE",
//     credentials: "include",
//   }).then((r)=>{
//     if(r.ok){
//       let newDreams = dreams.filter(dream => dream.id !== dreamid)
//       setDreams(newDreams)
//     }
//   }, [])
//   }

  

// return(
// <div className="App">
// <Route path="/new-user">
//       <CreateUserForm setUser={setUser}/>
//       </Route>
//       <Route path="/new-dream">
//        <DreamForm addDream={addDream} user={user}/>
//       </Route>
//       <Route path="/dreams">
//        <DreamsContainer dreams={dreams} user={user} setDreams={setDreams} handleDelete={handleDelete}/>
//       </Route>
//       <Route path="/your-dreams">
//        <YourDreamsContainer user={user} dreams={dreams} handleDelete={handleDelete}/>
//       </Route>
// </div>
// )
// }

function App() {

  const [dreams, setDreams] = useState([])
  const [user, setUser] = useState('')


  useEffect(() => {
    fetch('http://localhost:3000/profile', {
      credentials: 'include',
      method: 'GET'
    })
    .then(response => response.json())
    .then(useResponse => {
      console.log("hiiiiiiiii", useResponse)
      if (!useResponse.error){
        setUser(useResponse)
      }
    })  
  }, []);


  useEffect(() => {
    fetch('http://localhost:3000/dreams')
    .then(response => response.json())
    .then(apiDreams => setDreams(apiDreams))
  }, []);



  function handleDelete(dreamid){

    console.log(dreamid)
  fetch(`http://localhost:3000/dreams/${dreamid}`, {
    method: "DELETE",
    credentials: "include",
  }).then((r)=>{
    if(r.ok){
      let newDreams = dreams.filter(dream => dream.id !== dreamid)
      setDreams(newDreams)
    }
  }, [])
  }



  function addDream(dreamInput){
    const updatedDreamList = [...dreams, dreamInput]
    setDreams(updatedDreamList)
    console.log(updatedDreamList)
  }

  console.log("login??", user)
  return (
    
    <div className="App">
    <Switch> 
      <Route path="/new-user">
      <CreateUserForm setUser={setUser}/>
      </Route>
      <Route path="/new-dream">
       <DreamForm addDream={addDream} user={user}/>
      </Route>
      <Route path="/dreams">
       <DreamsContainer dreams={dreams} user={user} setDreams={setDreams} handleDelete={handleDelete}/>
      </Route>
      <Route path="/your-dreams">
       <YourDreamsContainer user={user} dreams={dreams} handleDelete={handleDelete}/>
      </Route>
      <Route path="/" render={() => <LandingPage setUser={setUser}/>}/>
    </Switch>
    </div>
  );
}

export default App;

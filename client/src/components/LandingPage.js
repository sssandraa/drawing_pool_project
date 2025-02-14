import React, { useState } from 'react';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'

function LandingPage ({ setUser }){

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    const [buttonClick, setButtonClick] = useState(false)
    const history = useHistory();
    const [errors, setErrors] = useState([]);


  function handleSubmit(e){
    e.preventDefault();
    setName("")
    fetch("http://localhost:3000/login", {
      credentials: "include",
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password
      }),
    // }).then(response => response.json())
    // .then(result => setUser(result))
    }).then((r) => {
      if (r.ok) {
        r.json().then((newUser) => setUser(newUser.user))
        history.push("/dreams");
      } else {
        r.json().then((err) => setErrors([...errors, err.error]));
        history.push("/new-user")
      }
    })
  }

    return (
    <div className="landingpage">
      <br></br>
      <br></br>
      <br></br>
      <h1> The Dream Pool </h1>
      <p className="subtitle">a archive and conversation of sleep dreams</p>
      <br></br>
      <img className="homeimage" src="https://d2w9rnfcy7mm78.cloudfront.net/2794474/original_9cf23c197ee7e597211bbfb577b09c6c.gif?1538327510?bc=1" alt="waterfall gif"/>
      <br>
      </br>
      <br>
      </br>
    {buttonClick ? 
    <div>
    <form className="loginform" onSubmit={handleSubmit}>
    <label htmlFor="name">name </label>
    <input 
        name="name"
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)}
    />
  
    <label htmlFor="password">password </label>
    <input 
        name="password"
        type="password"
        value={password} 
        onChange={e => setPassword(e.target.value)}
    />
    <button type="submit">come in</button>
    </form> 
    <Link to="/new-user">sign up ➺</Link>
    </div>
    :
    <button onClick={() => setButtonClick(true)}> Enter </button>}
      </div>
    )
}

export default LandingPage;
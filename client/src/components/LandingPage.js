import React, { useState } from 'react';
import { useHistory } from "react-router";

function LandingPage ({ setUser }){

    const [name, setName] = useState("")
    const [buttonClick, setButtonClick] = useState(false)
    const history = useHistory();
    const [errors, setErrors] = useState([]);


  function handleSubmit(e){
    e.preventDefault();
    setName("")
    fetch("http://localhost:3000/users", {
      credentials: "include",
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newUser) => setUser(newUser))
        history.push("/dreams");
      } else {
        r.json().then((err) => setErrors([...errors, err.error]));
      }
    })
  }

    return (
    <div className="landingpage">
      <br></br>
      <br></br>
      <h1> The Dream Pool </h1>
      <p>an ongoing archive and conversation of sleep dreams</p>
      <br></br>
      <br></br>
      <img className="homeimage" src="https://web.archive.org/web/20090821174141/http://geocities.com/SoHo/Bistro/3064/aniwater.gif" alt="waterfall gif"/>
      <br>
      </br>
      <br>
      </br>
    {buttonClick ? 
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    value={name} 
    onChange={e => setName(e.target.value)}>
    </input>
    <button type="submit">call me this</button>
    </form> :
    <button onClick={() => setButtonClick(true)}> Enter </button>}
      </div>
    )
}

export default LandingPage;
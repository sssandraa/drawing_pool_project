import React, { useState } from 'react';



function Dream ({ dream, handleDelete }){

   
    const [text, setText] = useState("")
    const [buttonClick, setButtonClick] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setText("")
        fetch("http://localhost:3000/notes", {
            credentials: "include",
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: text,
              user_id: 1,
              dream_id: 1
            }),
        }).then(response => response.json())
         .then(apiNotes => console.log(apiNotes))
        }
     

    // const renderNotes = () => notes.map(note => <Notes note={note}/>)
       

return(
         <div className="dream-card">
                    <img src={dream.image} alt="dream"/>
                    <h4>{dream.date_time}</h4>
                    <p>{dream.description}</p>
                    <button onClick={() => handleDelete(dream.id)}>delete</button>
                    {buttonClick ? 
                        <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        value={text} 
                        onChange={e => setText(e.target.value)}>
                        </input>
                        <button type="submit">submit</button>
                        </form> 
                        :
                        <button onClick={() => setButtonClick(true)}> add note </button>}
         </div>
)
}

export default Dream;
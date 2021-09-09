import React, { useState } from 'react';


function Dream ({ dream, handleDelete, user}){

   
    const [text, setText] = useState("")
    const [buttonClick, setButtonClick] = useState(false)
    const [note, setNote] = useState({})

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
              user_id: user.id,
              dream_id: dream.id
            }),
        }).then(response => response.json())
         .then(newDreamNotes => {console.log(newDreamNotes)
        }, [])
        }
     

console.log(dream.notes)
console.log("hiiiiiiiii")

return(
         <div className="dream-card">
                    <img src={dream.image} alt="dream"/>
                    <h4>{dream.date_time}</h4>
                    {/* <p>{dream.description}</p> */}
                    {dream.notes.map((note) => <p>{note}</p>)}
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
import React, { useState } from 'react';
import Note from './Note';


function Dream ({ dream, handleDelete, user, setDreams}){

   
    const [text, setText] = useState("")
    const [buttonClick, setButtonClick] = useState(false)
    const [note, setNote] = useState([])

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
         .then(newNote => {
            setDreams((prevDreams) => {
              const newDreams = [...prevDreams]
              const newDreamNoteIndex = newDreams.findIndex(x => x.id === newNote.dream.id)
              console.log(newDreamNoteIndex)

              newDreams[newDreamNoteIndex].notes.push(newNote)
              // newDreamNote.notes.push(newNote)
              
              console.log("newdreams", newDreams)
              console.log("newnote!", newNote)
            //find index in array of dream and add to array
              return newDreams
            })
          })
        }
     
    
console.log(note)

return(
         <div className="dream-card">
                    <img src={dream.image} alt="dream"/>
                    <h4>{dream.date_time}</h4>
                    <p>{dream.description}</p>
                    {/* <p>{note.text}</p> */}
                    {dream.notes.map((note) => <Note note={note} />)}
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
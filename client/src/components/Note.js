import React from "react";

function Note({ note }){
    return(
       <div className="notes-section">
           <p>{note.text}</p>
       </div>
    )
}

export default Note;


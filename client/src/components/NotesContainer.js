import Note from "./Note"
    
    
function NotesContainer({ notes, user }){
    
    const renderNotes = () => {
        return notes.map(note => <Note key={note.id} note={note} user={user}/>)
     }
    
    return(
        <>
        <section className="notes-container">
        {renderNotes()}
        </section>
        </>
    )
}

export default NotesContainer;


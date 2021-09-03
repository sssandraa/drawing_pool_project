
import { useState } from 'react'

function DreamForm(){

    const [image, setImage] = useState('')
    const [date_time, setDate_time] = useState('')
    const [description, setDescription] = useState('')

    return(
        <form className="dream-form">
        <label htmlFor="image">image: </label>
        <input 
        type="text" 
        id="image"
        value={image}
        onChange={event => setImage(event.target.value)}
        />

        <label htmlFor="date_time"> date: </label>
        <input 
        type="text" 
        id="date_time"
        value={date_time}
        onChange={event => setDate_time(event.target.value)}
        /> 

        <label htmlFor="description"> description: </label>
        <textarea 
        type="text" 
        id="description"
        value={description}
        onChange={event => setDescription(event.target.value)}
        />
        <input type="submit" value="add dream"/>
        </form>
    )
}

export default DreamForm;

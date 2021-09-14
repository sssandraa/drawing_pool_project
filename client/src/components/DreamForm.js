import { useState } from 'react'
import Header from './Header'

function DreamForm({ addDream, user }){

    const [image, setImage] = useState('')
    const [date_time, setDate_time] = useState('')
    const [description, setDescription] = useState('')
   
    

    const handleSubmit = (event) => {
        event.preventDefault();

      const options = {
            credentials: "include",
            method: "POST",
            headers:{
                Accept: 'application/json',
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                image: image,
                date_time: date_time,
                description: description,
                user_id: user.id
              }),
         
            }
            fetch('http://localhost:3000/dreams', options)
            .then(response => response.json())
            .then((dreamInput) => addDream(dreamInput)) 

            setImage('')
            setDate_time('')
            setDescription('')
          }

    return(
        <>
        <Header/>
        <form className="dream-form" onSubmit={handleSubmit}>
        <label htmlFor="image">image </label>
        <input 
        type="text" 
        id="image"
        value={image}
        onChange={event => setImage(event.target.value)}
        />

        <label htmlFor="date_time"> date </label>
        <input 
        type="text" 
        id="date_time"
        value={date_time}
        onChange={event => setDate_time(event.target.value)}
        /> 

        <label htmlFor="description"> description </label>
        <textarea 
        type="text" 
        id="description"
        value={description}
        onChange={event => setDescription(event.target.value)}
        />
        <input type="submit" value="add dream"/>
        </form>
        </>
    )
}

export default DreamForm;

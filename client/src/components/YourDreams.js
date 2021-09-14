

function YourDreams({ dream, user, handleDelete }){

return(
    <>

     {(user.id === dream.user.id) ?
        <div className="dream-card">
        <img src={dream.image} alt="dream"/>
        <h4>{dream.date_time}</h4>
        <p>entry by, {dream.user.name}</p>
        <p>{dream.description}</p>
        <button onClick={() => handleDelete(dream.id)}>delete</button>
        </div>
        :
        <h3></h3>
     }
    </>
    )
   
}

export default YourDreams;


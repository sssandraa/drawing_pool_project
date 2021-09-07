

function YourDreams({ dream }){
    return(
        <div key={dream.id} className="dream-card">
        <img src={dream.image} alt="dream"/>
        <h4>{dream.date_time}</h4>
        <p>entry by, {dream.user.name}</p>
        <p>{dream.description}</p>
        <button> add note</button>
        </div>
         )
}

export default YourDreams;
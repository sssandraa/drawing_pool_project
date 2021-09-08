

function YourDreams({ dream, user }){

    if (user.id === dream.user.id){
        console.log(user.id)

    return(
        <div className="dream-card">
        <img src={dream.image} alt="dream"/>
        <h4>{dream.date_time}</h4>
        <p>entry by, {dream.user.name}</p>
        <p>{dream.description}</p>
        <button> add note</button>
        </div>
         )

        } else{
            return(
                <p>no dreams found :(</p>
            )
        }
}

export default YourDreams;
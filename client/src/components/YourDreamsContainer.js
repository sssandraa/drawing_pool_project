import YourDreams from "./YourDreams";
import Header from "./Header";

function YourDreamsContainer({ dreams, user, handleDelete }){
    const renderDreams = () => {
        return dreams.map(dream => <YourDreams key={dream.id} user={user} handleDelete={handleDelete} dream={dream}/>)
     }
 
 return(
     <>
     <Header/>
     <h3 className="your-dream-header">{user.name}'s dreams</h3>
     <section className="dreams-container">  
     {renderDreams()}   
     </section>
     </>
     )
}

export default YourDreamsContainer;

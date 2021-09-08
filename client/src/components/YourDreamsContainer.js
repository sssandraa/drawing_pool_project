import YourDreams from "./YourDreams";
import Header from "./Header";

function YourDreamsContainer({ dreams, user }){
    const renderDreams = () => {
        return dreams.map(dream => <YourDreams key={dream.id} user={user} dream={dream}/>)
     }
 
 return(
     <>
     <Header/>
     <section className="dreams-container">  
     {renderDreams()}   
     </section>
     </>
     )
}

export default YourDreamsContainer;

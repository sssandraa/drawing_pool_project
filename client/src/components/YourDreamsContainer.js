import YourDreams from "./YourDreams";
import Header from "./Header";

function YourDreamsContainer({ dreams }){
    const renderDreams = () => {
        return dreams.map(dream => <YourDreams key={dream.id} dream={dream}/>)
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

import YourDreams from "./YourDreams";
import Header from "./Header";

function YourDreamsContainer({ dreams }){
    const renderDreams = () => {
        return dreams.map(dream => <YourDreams dream={dream}/>)
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

import Dream from './Dream';
import Header from './Header';

function DreamsContainer({ dreams, user, setDreams, handleDelete}){

    const renderDreams = () => {
       return dreams.map(dream => <Dream key={dream.id} dream={dream} user={user} setDreams={setDreams} handleDelete={handleDelete}/>)
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

export default DreamsContainer;

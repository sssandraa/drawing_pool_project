import Dream from './Dream';
import Header from './Header';

function DreamsContainer({ dreams, handleDelete }){

    const renderDreams = () => {
       return dreams.map(dream => <Dream key={dream.id} dream={dream} handleDelete={handleDelete}/>)
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

import Dream from './Dream';

function DreamsContainer({ dreams }){

    const renderDreams = () => {
       return dreams.map(dream => <Dream dream={dream}/>)
    }

return(
    <section className="dreams-container">  
    {renderDreams()}   
    </section>
    )
}

export default DreamsContainer;

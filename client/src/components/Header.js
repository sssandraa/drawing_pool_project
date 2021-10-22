
import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    const date = new Date().toLocaleDateString()
   
    return(
        <header className="header" >
         <nav>
             <div className="one">
             <a>The Dream Pool</a>
             <a>{date}</a>
             </div>
             <div className="two">
             <Link to="/"><img src="http://wrasse.pw/~joel/icons/OzG1W.gif" alt="blue hands"/></Link>
             <Link to="/new-dream"><img src="http://wrasse.pw/~joel/icons/iconnote.gif" alt="blue hands"/></Link>
             <Link to="/your-dreams"><img src="http://wrasse.pw/~joel/icons/1285.bmp" alt="blue hands"/></Link>
             <Link to="/dreams">❄</Link>
             </div>
             </nav> 
        </header>
    )
}

export default Header;
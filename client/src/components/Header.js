
import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    const date = new Date().toLocaleDateString()
   
    return(
        <header className="header" >
         <nav>
             <a>The Dream Pool</a>
             <a>{date}</a>
             <a>|</a>
             <Link to="/your-dreams">❈</Link>
             <Link to="/new-dream">✺</Link>
             <Link to="/dreams">➺</Link>
             </nav> 
        </header>
    )
}

export default Header;
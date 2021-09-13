
import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    const date = new Date().toLocaleDateString()
   
    return(
        <header className="header" >
         <nav>
             {/* <img src="https://pngimg.com/uploads/drops/drops_PNG13515.png" /> */}
             <br></br>
             <a>The Dream Pool</a>
             <a>{date}</a>
             <a>|</a>
             <Link to="/your-dreams">⚀</Link>
             <Link to="/new-dream">✼</Link>
             <Link to="/dreams">♨</Link>
             </nav> 
        </header>
    )
}

export default Header;
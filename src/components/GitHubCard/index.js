import React, { useState } from "react";
import "./style.css";


function GitHubCard() {

  const [hover, setHover] = useState(false)

  const handleMouseHover = () => {
    setHover(!hover);
    console.log(hover)
  }


  return (
    
    !hover ?

        (<div className='holder' onMouseEnter={handleMouseHover}>
           <img className='gitHub' alt='git' src='../../../images/github.png' />
           </div>) 

           :

           (<div className="card hoverCard" onMouseLeave={handleMouseHover}>
           <div className="card-body">
             <h3 className="card-title">check me out on GitHub</h3>
             <a href='https://github.com/jborgen64' className="btn btn-light">go to page</a>
           </div>
         </div>)
     
  );
}

export default GitHubCard;
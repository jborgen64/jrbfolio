import React, { useState } from "react";
import "./style.css";
import projects from '../../db.json'

function ProjThreeCard() {

  const [hover, setHover] = useState(false)

  const handleMouseHover = () => {
    setHover(!hover);
    console.log(hover)
  }

  return (
    !hover ?
      (
        <div className="card">
          <div className="img-container" onMouseEnter={handleMouseHover}>
            <img alt={projects[2].name} src={projects[2].image} />
          </div>
        </div>
     ) :

     (<div className="card hoverCard" onMouseLeave={handleMouseHover}>
     <div className="card-body">
       <h3 className="card-title">Pokedex</h3>
       <p className="card-text">React/Redux</p>
       <a href={projects[2].link} className="btn btn-light">see project</a>
     </div>
   </div>)

  );
}

export default ProjThreeCard;
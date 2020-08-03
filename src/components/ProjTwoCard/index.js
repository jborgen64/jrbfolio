import React, { useState } from "react";
import "./style.css";
import projects from '../../db.json'

function ProjTwoCard() {

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
            <img alt={projects[1].name} src={projects[1].image} />
          </div>
        </div>
     ) :

     (<div className="card hoverCard" onMouseLeave={handleMouseHover}>
     <div className="card-body">
       <h3 className="card-title">Centaur Game Trading Co.</h3>
       <p className="card-text">React/Node JS/MySQL</p>
       <a href={projects[1].link} className="btn btn-light">see project</a>
     </div>
   </div>)

  );
}

export default ProjTwoCard;
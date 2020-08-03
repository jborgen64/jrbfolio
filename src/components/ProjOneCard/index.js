import React, { useState } from "react";
import "./style.css";
import projects from '../../db.json'

function ProjOneCard() {

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
            <img alt={projects[0].name} src={projects[0].image} />
          </div>
        </div>
     ) :

     (<div className="card hoverCard" onMouseLeave={handleMouseHover}>
     <div className="card-body">
       <h3 className="card-title">Book Reso</h3>
       <p className="card-text">Javascript/jQuery</p>
       <a href={projects[0].link} className="btn btn-light">see project</a>
     </div>
   </div>)

  );
}

export default ProjOneCard;
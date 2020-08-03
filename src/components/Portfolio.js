
import React, { useState } from "react";
import ProjOneCard from './ProjOneCard';
import ProjTwoCard from './ProjTwoCard';
import ProjThreeCard from './ProjThreeCard ';
import Wrapper from "./Wrapper";
import GitHubCard from "./GitHubCard";



function Portfolio() {



  return (

    <div className='portfolioPage' id='portfolio'>
      <Wrapper>
        < ProjOneCard />
        < ProjTwoCard />
        < ProjThreeCard />
       < GitHubCard />
      </Wrapper>
    </div>

  )

}


export default Portfolio;
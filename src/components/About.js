import React from 'react';
import Wrapper from './Wrapper'

function About() {
  return (
    <div className="aboutPage" id='about'>
    
      <div className='selfie'>
        <img alt='selfie' src='../../../images/selfie.jpg' />
      </div>
      <div className='aboutContent'>
        <h5>I am a full stack software engineer seeking new opportunities
        to learn and grow. I operate well within a team setting and lead by example.
        I welcome new challenges and try to be a part of the great innovation taking
        place in tech today.

        I am proficient in both front end and back end components of web development
        including Javascript, jquery, Node.js, Express, HTML, CSS (including frameworks
        like bootstrap and materialize), front end frameworks like React and Vue,
        databases like mySQL, MongoDB and more.

        I have a background in hospitality management and have held various management
        positions at the Kansas City Marriott Downtown. I have managed large scale staffs
        of 100+ down to tight knit teams of 10. Most recently I have been a food and beverage
        manager working with a great team and overseeing all bar and restaurant operations
        within the hotel.
       </h5>
      </div>

    </div>
  );
}

export default About;

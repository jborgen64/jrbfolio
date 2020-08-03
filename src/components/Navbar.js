import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">

          <Link
            className='nav-item nav-link active'
            activeClass='active'
            to='home'
            offset={-50}
            spy={true}
            smooth={true}
            duration={500}
          >home</Link>

          <Link
            className='nav-item nav-link active'
            activeClass='active'
            to='about'
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
          >about</Link>

          <Link
            className='nav-item nav-link active'
            activeClass='active'
            to='portfolio'
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
          >portfolio</Link>

          <Link
            className='nav-item nav-link active'
            activeClass='active'
            to='contact'
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
          >contact</Link>

        </div>
      </div>
    </nav>


  );
}

export default Navbar;

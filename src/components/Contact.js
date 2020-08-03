import React from 'react';


function Contact() {
  return (
    <div className="contactPage" id='contact'>
      <div className="jumbotron jumbotron-fluid">
        <div className="container contactContent">
          <h1 className="display-4">Get In Touch</h1>
          <div className='contentContainer'>
            <a href='https://github.com/jborgen64' className="lead">GitHub: jborgen64</a>
            <br />
            <a href='https://www.linkedin.com/in/jacob-borgen-9793a1124/' className="lead">linkedin: Jacob Borgen</a>
            <br />
            <a href='#' className="lead">email: jacobrborgen@gmail.com</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import SocialIcons from '../components/SocialIcons';

function Contact() {

  return (
    <div className="contact">
      <p className='secondary-title'>Contact</p>
      <p className="text">Feel free to get in touch</p>
      <br />
      <hr />
      <SocialIcons />
      <br />
      <p className='sub-title'><a className='link' rel="noreferrer" target='_blank' href="mailto:gauravgorade2929@gmail.com">gauravgorade2929@gmail.com</a></p>
    </div>
  );
}


export default Contact;

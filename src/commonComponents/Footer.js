import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return(
    <footer className='footer' >
      <div className="container">
        <p className="copyright">&copy; {year} Mini TuneIn. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
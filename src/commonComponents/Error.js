import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Error = () => {
  return(
    <div className="Error">
      <Header/>
      <main className="container">
        <div style={{padding: '100px 20px'}}>
          <h1>Oops!</h1>
          <p>Something went wrong.</p>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Error;
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const fourofour = () => {	
  return(
    <div className="fourofour">
      <Header/>
      <main className="container">
        <div style={{padding: '100px 20px'}}>
          <h1>Oh no!</h1>
          <p>This is not the page you are looking for.</p>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default fourofour;
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Loading = () => {
  return(
    <div className="Loading">
      <Header/>
      <main className="container">
        <div className="holder">
          loading...
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Loading;
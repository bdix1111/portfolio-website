import React, { useEffect } from 'react';

  function Home() {

    useEffect(() => {
    // Update the document title using the browser API
      document.title = `Hello, World`;
    });


    return (
      <div class='home'>
        <div class='hello'>
          <h1>Hello?</h1>
        </div>
        <div class='face'>
          <img id="face" src='flowerface.jpg'/>
        </div>
      </div>
    )
  }

export default Home;

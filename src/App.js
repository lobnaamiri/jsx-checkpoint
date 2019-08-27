import React from 'react';
import photo from './img/src.jpg';

import './App.css';
import './style.css';

function App() {
  return (
    <div className="App" style={{border:'solid 1 black', maxWidth:'100vw'}}>

      <h1 className={"title red"}>JSX Checkpoint</h1>


      <img src={photo} alt={"image1"} className={"bg"}/>


      <img src="/public.jpg" alt={"image2"} className={"bg"}/>
      
    </div>
  );
}

export default App;

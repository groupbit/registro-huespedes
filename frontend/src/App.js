import React from 'react';
//import posada from './ImgPosada.JPG';
import './App.css';
import CargarHuespedes from './components/cargaHuesped.js';

function App() {
  return (
    <div>
      <header className="App-header">
      <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet"/>
        <div class="overlay">
          <h1 class="titulo">Posada Chambery</h1>
          <h3>Reasons for Choosing US</h3>
          <div class="no-cel">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
	          <br></br >
          </div>
        </div>
      </header>
      <p>
        <CargarHuespedes></CargarHuespedes>
      </p>
    </div>
  );
}

//<img src={posada} />

export default App;

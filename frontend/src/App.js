import React from 'react';
//import posada from './ImgPosada.JPG';
import './App.css';
import CargarHuespedes from './components/cargaHuesped.js';
import ListadoHuespedes from './components/listadoHuespedes.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet" />
          <div class="overlay">
            <h1 class="titulo">Posada Chambery</h1>
            <h3>Hotel en Capitán Sarmiento</h3>
            <div class="no-cel">
              <p>
                Dirección: BV Mitre 1535, Capitán Sarmiento, Buenos Aires. 
                Teléfono: 02478 48-1656. 
                Provincia: Provincia de Buenos Aires.
              </p>
              <br></br >
            </div>
          </div>
        </header>

        <main>
          <Switch>
            <Route path="/hospedarse" exact component={CargarHuespedes} />
            <Route path="/huespedes" component={ListadoHuespedes} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

//<img src={posada} />

export default App;

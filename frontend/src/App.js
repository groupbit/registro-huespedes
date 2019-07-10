import React from 'react';
//import posada from './ImgPosada.JPG';
import './App.css';
import CargarHuespedes from './components/cargaHuesped.js';
import ListadoHuespedes from './components/listadoHuespedes.js';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <header className="App-header">
          <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet" />
          <div class="overlay">
            <h1 class="titulo">Posada Chambery</h1>
            <h3>Reasons for Choosing US</h3>
            <div class="no-cel">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
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

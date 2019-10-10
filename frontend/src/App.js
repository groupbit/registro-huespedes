// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-wrapper";
import './App.css';
import posada from './ImgPosada.jpg';

import CargarHuespedes from './components/cargaHuesped.js';
import ListadoHuespedes from './components/listadoHuespedes.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <BrowserRouter>
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
        <NavBar />

        <main>
          <Switch>
            <Route path="/hospedarse" exact component={CargarHuespedes} />
            <Route path="/huespedes" component={ListadoHuespedes} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
    // <div className="App">
    //   <BrowserRouter>
    //     <header>
    //       <NavBar />
    //     </header>
    //     <Switch>
    //       <Route path="/" exact />
    //       <Route path="/hospedarse" exact component={CargarHuespedes} />
    //       <Route path="/huespedes" component={ListadoHuespedes} />
    //       <Route path="/profile" component={Profile} />
    //       <PrivateRoute path="/profile" component={Profile} />
    //     </Switch>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;

// import React from 'react';
// //import posada from './ImgPosada.JPG';
// import './App.css';
// import CargarHuespedes from './components/cargaHuesped.js';
// import ListadoHuespedes from './components/listadoHuespedes.js';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

// function App() {
//   return (
//     <div>
//       <Router>
//         <header className="App-header">
//           <link href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" rel="stylesheet" />
//           <div class="overlay">
//             <h1 class="titulo">Posada Chambery</h1>
//             <h3>Hotel en Capitán Sarmiento</h3>
//             <div class="no-cel">
//               <p>
//                 Dirección: BV Mitre 1535, Capitán Sarmiento, Buenos Aires. 
//                 Teléfono: 02478 48-1656. 
//                 Provincia: Provincia de Buenos Aires.
//               </p>
//               <br></br >
//             </div>
//           </div>
//         </header>

//         <main>
//           <Switch>
//             <Route path="/hospedarse" exact component={CargarHuespedes} />
//             <Route path="/huespedes" component={ListadoHuespedes} />
//             <Redirect to="/" />
//           </Switch>
//         </main>
//       </Router>
//     </div>
//   );
// }

// //<img src={posada} />

// export default App;

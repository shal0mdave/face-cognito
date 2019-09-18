import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Nav from './Components/Nav/Nav';
import Landing from '../src/Components/Landing/Landing';
import Auth from '../src/Components/Auth/Auth';
import About from '../src/Components/About/About'
import Menu from '../src/Components/Menu/Menu';

import DetectBody from './Components/Actions/DetectBody/DetectBody';
import DetectFace from './Components/Actions/DetectFace/DetectFace';
import DetectFaceAttributes from './Components/Actions/DetectFaceAttributes/DetectFaceAttributes';
import CompareFaces  from './Components/Actions/CompareFaces/CompareFaces';

import Demo from './Components/Actions/Demo/Demo';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Nav />
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/auth" component={Auth} />
        <Route path="/menu" component={Menu} />

        <Route path="/detect-body" component={DetectBody}/>
        <Route path="/detect-face" component={DetectFace}/>
        <Route path="/detect-face-attributes" component={DetectFaceAttributes}/>
        <Route path="/compare-faces" component={CompareFaces}/>

        <Route path="/demo" component={Demo}/>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;

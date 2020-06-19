import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import TitleBar from 'frameless-titlebar';

import Navbar from './components/Navbar';

// pages
import News from './components/News';
import Games from './components/Games';

// images
import icon from './img/Uplay_Logo.png';

import './css/style.css';
import './css/icons.css';

const remote = window.require('electron').remote;
const currentWindow = remote.getCurrentWindow();

function App() {
  return (
    <Router>
      <TitleBar
        iconSrc={icon}
        currentWindow={currentWindow}
        platform={"win32"}
        onClose={() => currentWindow.close()}
        onMinimize={() => currentWindow.minimize()}
        onMaximize={() => currentWindow.maximize()}
        theme={{
          "bar": {
            "background": "#121519",
            "borderBottom": "",
            "height": "30px",
            "icon": {
              "width": "48px",
              "height": "12px",
            },
          }
        }}
      />
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={News} />
          <Route exact path="/games" component={Games} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
/*new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#444')
});*/

/*const titlebar = new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex('#121519'),
  //icon: './src/img/Uplay_Logo.png',
  menu: null,
  drag: true,
  minimizable: true,
  unfocusEffect: false,
});*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

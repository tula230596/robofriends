
// React includes webpack that does the bundling for us
// thats why we can use the "import" codes
// if not, have to use browerify, require
import React from 'react';
// React can be used for mobile, web, many things. ReactDOM is for the web, DOM
import ReactDOM from 'react-dom'; 
import './index.css';
// import Card from './Card.js';
// make a parent CardList for Card so that dont have to copy all 10
import App from './containers/App.js'
import * as serviceWorker from './misc/serviceWorker';
// import tachyons for style
import 'tachyons';
//  import robot names, have to destructure {} because export is not default in the file



ReactDOM.render(
	<App/>

	,document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

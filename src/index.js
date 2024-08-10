import React from 'react';
import ReactDOM from 'react-dom/client';

// now we provide our redux store to the app here by importing the Provider component from the react-redux package we just installed 
// and then we wrap our root component with this provider component and AFTER WRAPPING IT WITH PROVIDER and importing our store WE 
// ALSO NEED TO SPECIFY , WHAT STORE WE ARE PROVIDING TO IT BY PASSING THE STORE PROP TO OUR PROVIDER COMPONENT and giving the value of
// our store to it .This now provides our store to the react app 
import {Provider} from 'react-redux'
import store from './store';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);

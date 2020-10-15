import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

import Firebase from './utils/Firebase'; //Atividade 9 e 11
import FirebaseContext from './utils/FirebaseContext';

//Atividade 11
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import reduxThunk from 'redux-thunk'

import reducer from './store/reducers' //Chamando index.js



const store = createStore(
  reducer,
  {},
  applyMiddleware(reduxThunk)
)

const rrfProps = {
  Firebase,
  config: {},
  dispatch: store.dispatch
}

//----------------
ReactDOM.render(

  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      
        <App />
      
    </ReactReduxFirebaseProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

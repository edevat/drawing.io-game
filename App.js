import React, { Component } from 'react';
//import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './app/reducers';
import MainPage from './app/mainPage';


class App extends Component {

  /*componentWillMount() {
    const config = {
      apiKey: "AIzaSyBGEMdMSXpacfFH5AaOn8eDA2-58zi6ciw",
      authDomain: "svibe-4ed1c.firebaseapp.com",
      databaseURL: "https://svibe-4ed1c.firebaseio.com",
      projectId: "svibe-4ed1c",
      storageBucket: "",
      messagingSenderId: "830705986621",
      appId: "1:830705986621:web:9ee1b64075c310c2"
    };
    firebase.initializeApp(config);
  }*/

  render() {
    console.disableYellowBox = true;
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}


export default App;


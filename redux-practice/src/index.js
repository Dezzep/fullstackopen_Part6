import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from './reducers/noteReducer';

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     case 'ZERO':
//       return 0;
//     default:
//       return state;
//   }
// };
const store = legacy_createStore(noteReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

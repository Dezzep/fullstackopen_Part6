import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import noteReducer, {
  createNote,
  toggleImportanceOf,
} from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';
import { filterChange } from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(filterChange('UNIMPORTANT'));
store.dispatch({
  type: 'notes/createNote',
  payload: 'Redux Toolkit is awesome!',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

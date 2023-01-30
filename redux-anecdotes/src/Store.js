import { configureStore } from '@reduxjs/toolkit';
import notifcationReducer from './reducers/notificationReducer';
import anecdoteReducer from './reducers/anecdoteReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notifcationReducer,
    filter: filterReducer,
  },
});

export default store;
